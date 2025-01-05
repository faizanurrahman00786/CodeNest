const mongoose = require("mongoose");

// Define the Courses schema
const coursesSchema = new mongoose.Schema({

	courseName: {
		type: String,
		required: true
	},

	courseDescription: {
		type: String
	},
	instructor: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "user",
	},
	whatYouWillLearn: {
		type: String,
	},
	courseContent: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "SubSection",
		},
	],
	ratingAndReviews: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "RatingAndReview",
		},
	],
	price: {
		type: Number,
	},
	thumbnail: {
		type: String,
	},
	category: {
		type: mongoose.Schema.Types.String,
		ref: "Category",
	},
	studentsEnrolled: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
		},
	],
	instructions: {
		type: [String],
	},
	status: {
		type: String,
		enum: ["Draft", "Published"],
	},
	date:{
		type: Date,
	}
});

// Export the Courses model
module.exports = mongoose.model("Course", coursesSchema);