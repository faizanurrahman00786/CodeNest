import React, { useEffect, useState } from "react"
import { BiInfoCircle, BiVideo } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import { useNavigate, useParams } from "react-router-dom"
import Footer from "../Homepage/Footer"
import AvgRating from "./AvgRating"
import Error from "../../pages/Error"
import toast from "react-hot-toast"
import CourseCard from "./CourseCard"


function CourseDetails(props) {

    const navigate = useNavigate()
    const [courseData, setCourseData] = useState([]);
    const login= props.login;
    const user= props.user;

    // Getting courseId from url parameter
    const { courseId, courseName } = useParams()
    // Calling fetchCourseDetails fucntion to fetch the details
    // console.log("User",user,courseId,login);

    async function fetchCourseDetails() {

        try {
            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/course/getCourseDetails`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ courseId: courseId }),
                    credentials: "include"
                }
            );

            if (!Response.ok) {
                toast.error("Failed to load Course");

                return <Error />

            }
            const res = await Response.json();
            setCourseData(res.data);

        } catch (error) {
            console.log("Could not fetch course.");
        }

    }

    useEffect(function () {
        fetchCourseDetails()
    }, []);


    return (
        <>
            <div className={`relative w-full bg-richblack-800`}>
                {/* Hero Section */}
                <div className="mx-auto box-content px-4 lg:w-[1260px] 2xl:relative ">
                    <div className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
                        <div className="relative block max-h-[30rem] lg:hidden">
                            <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
                            <img
                                src={courseData?.thumbnail}
                                alt="course thumbnail"
                                className="aspect-auto w-full"
                            />
                        </div>
                        <div
                            className={`z-30 my-5 flex flex-col justify-center gap-2 py-2 text-lg text-richblack-5`}
                        >
                            <div>
                                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-pink-100 to-caribbeangreen-200 sm:text-[42px]">
                                    {courseData.courseName}
                                </p>
                            </div>
                            <p className={`text-richblack-100 text-[0.930rem]`}>{courseData.courseDescription}</p>
                            <div className=" flex flex-wrap items-center mt-4 gap-2">
                                <AvgRating courseId={courseId} />
                                <span className="text-sm">{`(${courseData?.ratingAndReviews?.length} reviews )`}</span>
                                <span className="flex text-sm">{`Enrolled: ${courseData?.studentsEnrolled?.length}`}</span>
                            </div>
                            <div>
                                <p className="text-richblack-25 text-sm">
                                    <span className="text-richblack-50">Instructor: </span>{`${courseData?.instructor?.firstName} ${courseData?.instructor?.lastName}`}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-5 text-lg">
                                <p className="flex items-center text-richblack-25 text-sm gap-2">
                                    {" "}
                                    <BiInfoCircle />  <span className="text-richblack-50 text-sm">Created on: </span> {courseData?.date?.slice(0, 10)}
                                </p>
                                <p className="flex items-center text-richblack-25 text-sm gap-2">
                                    {" "}
                                    <HiOutlineGlobeAlt className="text-caribbeangreen-200 text-lg" /> English
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
                            <p className="space-x-3 pb-4 text-3xl font-semibold text-richblack-5">
                                Rs. {courseData?.price}
                            </p>
                            <button className="yellowButton" onClick={() => { }}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                    {/* Courses Card */}
                    <div className="right-[6rem] top-[100px] mx-auto hidden min-h-[500px] w-1/4 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute  lg:block">
                        <CourseCard courseData={courseData} user={user} login={login} courseId={courseId} />
                    </div>
                </div>
            </div>
            <div className="mx-auto box-content px-4 text-start text-richblack-5 lg:w-[1260px]">
                <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
                    {/* What will you learn section */}
                    <div className="my-8 border border-richblack-600 rounded-lg p-8">
                        <p className="text-3xl font-semibold">What you'll learn</p>
                        <div className="mt-5 text-richblack-100">
                            {courseData.whatYouWillLearn}
                        </div>
                    </div>

                    {/* Course Content Section */}
                    <div className="max-w-[830px] ">
                        <div className="flex flex-col gap-3">
                            <p className="text-[28px] font-semibold">Course Content</p>
                            <div className="flex flex-wrap justify-between gap-2">
                                <div className="flex gap-2">
                                    <span>
                                       Total Lecture: {courseData?.courseContent?.length}
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Course Details Accordion */}
                        <div className="py-4 flex flex-col border border-richblack-600 rounded-lg px-4 gap-y-4">
                            {courseData?.courseContent?.map((course, index) => (
                                (<div className="flex justify-between text-richblack-50">
                                    <div className="flex gap-x-1 items-center"> 
                                        <BiVideo/>
                                        <p>{course?.title}</p>
                                    </div>
                                    <p>{course?.timeDuration.slice(0,2)} min</p>
                                </div>)
                            ))}
                        </div>

                        {/* Author Details */}
                        <div className="mb-12 mt-6 py-4">
                            <p className="text-[28px] font-semibold">Instructor</p>
                            <div className="flex items-center gap-4 py-4">
                                <img
                                    src={
                                        courseData?.instructor?.image
                                            ? courseData.instructor.image
                                            : `https://api.dicebear.com/5.x/initials/svg?seed=${courseData?.instructor?.firstName} ${courseData?.instructor?.lastName}`
                                    }
                                    alt="Author"
                                    className="h-14 w-14 rounded-full object-cover"
                                />
                                <p className="text-lg">{`${courseData?.instructor?.firstName} ${courseData?.instructor?.lastName}`}</p>
                            </div>
                            <p className="text-richblack-200">
                                Welcome, everyone! I’m excited to have you in {courseData.courseName} course. As your instructor, my goal is to guide you through a transformative
                                learning experience that will equip you with both knowledge and skills applicable in real-world scenarios.
                                Our sessions will be a mix of engaging lectures, interactive discussions, and hands-on activities designed to foster a deep understanding of the material.
                                I encourage you to actively participate, ask questions, and share your insights—you’re all here because you bring unique perspectives that will enrich our learning journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {/* {confirmationModal && <ConfirmationModal modalData={confirmationModal} />} */}
        </>
    )
}

export default CourseDetails