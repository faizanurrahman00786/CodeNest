import { useEffect, useState } from "react"
import { BiDotsVerticalRounded } from "react-icons/bi"
import {  BiSolidBookReader,BiSolidTime } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { ImPriceTags } from "react-icons/im"
import { BsCurrencyRupee } from "react-icons/bs"

export default function EnrolledCourse() {

    const navigate = useNavigate()


    const [enrolledCourses, setEnrolledCourses] = useState(null);

    const getEnrolledCourse = async () => {
        try {
            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/profile/getMyCourses`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include"
                }
            );

            if (!Response.ok) {
                toast.error("Failed to load Courses");
            }
            const res = await Response.json();
            setEnrolledCourses(res.data);
            // console.log("My course", enrolledCourses);

        } catch (error) {
            console.log("Could not fetch enrolled courses.")
        }
    };
    useEffect(function () {
        getEnrolledCourse();
    }, [])

    return (
        <div>

            <div className="text-3xl ml-16 mb-12 text-richblack-5">Enrolled Courses</div>
            {
                !enrolledCourses ? (
                    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
                        <div className="spinner"></div>
                    </div>
                ) : !enrolledCourses.length ? (
                    <p className="grid h-[10vh] font-bold w-full place-content-center text-richblack-5">
                        You have not enrolled in any course yet.
                       
                    </p>
                ) : (
                    <div className="my-4 w-[85%] mx-auto text-richblack-25">
                        {/* Headings */}
                        <div className="flex rounded-t-lg bg-richblack-800 ">
                            <p className="w-[45%] px-5 py-3 flex items-center gap-x-1"><BiSolidBookReader/> Course Name</p>
                            <p className="w-1/4 px-2 py-3 flex items-center gap-x-1"><BiSolidTime/> Enrolled Date</p>
                            <p className="flex-1 px-2 py-3 flex items-center gap-x-1"><BsCurrencyRupee/> Price</p>
                        </div>
                        {/* Course Names */}
                        {enrolledCourses.map((course, i, arr) => (
                            <div
                                className={`flex items-center border border-richblack-700 ${i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
                                    }`}
                                key={i}>

                                <div
                                    className="flex w-[45%] cursor-pointer items-center gap-4 px-5 py-3"
                                    onClick={() => {
                                        navigate(
                                            `/course-details/${course?._id}/${course?.courseName}}`
                                        )
                                    }}>

                                    <img
                                        src={course.thumbnail}
                                        alt="course_img"
                                        className="h-14 w-14 rounded-lg object-cover"
                                    />
                                    <div className="flex max-w-xs flex-col gap-2">
                                        <p className="font-semibold">{course.courseName}</p>
                                        <p className="text-xs text-richblack-300">
                                            {course.courseDescription.length > 50
                                                ? `${course.courseDescription.slice(0, 50)}...`
                                                : course.courseDescription}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-1/4 px-2 py-3">{course?.date?.slice(0,10)}</div>
                                <div className="flex w-1/5 flex-col gap-2 px-2 py-3">
                                    <p>Rs: {course.price || 0}</p>

                                </div>
                            </div>
                        ))}
                    </div>

                )
            }
        </div>
    )
}