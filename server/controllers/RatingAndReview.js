const RatingAndReview = require("../models/RatingAndRaview");
const Course = require("../models/Course");
const { mongo, default: mongoose } = require("mongoose");

//createRating
exports.createRating = async (req, res) => {
    try {

        //get user id
        const userId = req.user.id;
        //fetchdata from req body
        const { rating, review, courseId } = req.body;
        //check if user is enrolled or not
        let uid = new mongoose.Types.ObjectId(userId);
        const courseDetails = await Course.findById(courseId);
        let enrolled = courseDetails.studentsEnrolled.includes(uid);

        if (!enrolled) {
            return res.status(404).json({
                success: false,
                message: 'Student is not enrolled in the course',
            });
        }
        //check if user already reviewed the course
        const alreadyReviewed = await RatingAndReview.findOne({
            user: userId,
            course: courseId,
        });
        if (alreadyReviewed) {
            return res.status(403).json({
                success: false,
                message: 'Course is already reviewed by the user',
            });
        }
        //create rating and review
        const ratingReview = await RatingAndReview.create({
            rating, review,
            course: courseId,
            user: userId,
        });

        //update course with this rating/review
        const updatedCourseDetails = await Course.findByIdAndUpdate(courseId,
            {
                $push: {
                    ratingAndReviews: ratingReview._id,
                }
            },
            { new: true });
        // console.log(updatedCourseDetails);
        //return response
        return res.status(200).json({
            success: true,
            message: "Rating and Review created Successfully",
            ratingReview,
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}



//getAverageRating
exports.getAverageRating = async (req, res) => {
    try {
        //get course ID
        const courseId = req.body.courseId;
        //calculate avg rating
        let course = await Course.findById(courseId).populate("ratingAndReviews").exec();

        const ratingobj = course.ratingAndReviews;
        let sum = 0;
        ratingobj.forEach(function (obj) {
            sum = sum + obj.rating;
        })
        const result=sum/ratingobj.length;



        //return rating
        if (ratingobj.length > 0) {

            return res.status(200).json({
                success: true,
                data: result,
            })

        }

        //if no rating/Review exist
        return res.status(200).json({
            success: true,
            message: 'Average Rating is 0, no ratings given till now',
            data: 0,
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}


//getAllRatingAndReviews

exports.getAllRating = async (req, res) => {
    try {
        const allReviews = await RatingAndReview.find({})
            .sort({ rating: "desc" })
            .populate({
                path: "user",
                select: "firstName lastName email image",
            })
            .populate({
                path: "course",
                select: "courseName",
            })
            .exec();
        return res.status(200).json({
            success: true,
            message: "All reviews fetched successfully",
            data: allReviews,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}