import { useEffect, useState } from "react"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { BiSolidBookReader, BiSolidTime } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { BsCurrencyRupee } from "react-icons/bs"
import { GiEmptyWoodBucket } from "react-icons/gi"

export default function MyCourse(props) {

    const navigate = useNavigate()

    const user= props.user;
    const [myCourses, setmyCourses] = useState([]);

    const getmyCourse = async () => {
        try {
            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/profile/getMyCourses`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer${user.token}`,
                    },
                    credentials: "include"
                }
            );

            if (!Response.ok) {
                toast.error("Failed to load Courses");
            }
            const res = await Response.json();
            setmyCourses(res.data);
            // console.log("My course", myCourses);

        } catch (error) {
            console.log("Could not fetch enrolled courses.")
        }
    };
    useEffect(function () {
        getmyCourse();
    }, [])

    return (
        <div>

            <div className="text-3xl ml-16 mb-12 text-richblack-5">My Courses</div>
            {
                !myCourses ? (
                    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
                        <div className="spinner"></div>
                    </div>
                ) : !myCourses.length ? (
                    <div>
                        <p className="grid w-full place-content-center text-2xl text-richblack-50">
                            You have not created any course yet.
                        </p>
                        <GiEmptyWoodBucket className="h-[20%] w-[20%] mx-auto text-richblack-600"></GiEmptyWoodBucket>
                    </div>
                ) : (
                    <div className="my-4 w-[80%] mx-auto text-richblack-25">
                        {/* Headings */}
                        <div className="flex rounded-t-lg bg-richblack-800 ">
                            <p className="w-[45%] px-5 py-3 flex items-center gap-x-1"><BiSolidBookReader /> Course Name</p>
                            <p className="w-1/4 px-2 py-3 flex items-center gap-x-1"><BiSolidTime /> Created Date</p>
                            <p className="flex-1 px-2 py-3 flex items-center gap-x-1"><BsCurrencyRupee /> Price</p>
                        </div>
                        {/* Course Names */}
                        {myCourses.map((course, i, arr) => (
                            <div
                                className={`flex items-center border border-richblack-700 ${i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
                                    }`}
                                key={i}>

                                <div
                                    className="flex w-[45%] cursor-pointer items-center gap-4 px-5 py-3"
                                    onClick={() => {
                                        navigate(
                                            `/view-course/${course?.courseName}/${course?._id}`
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
                                <div className="w-1/4 px-2 py-3">{course?.date?.slice(0, 10)}</div>
                                <div className="flex w-1/4 flex-col gap-2 px-2 py-3">
                                    <p>Rs: {course.price || 0}</p>
                                </div>
                                <BiDotsVerticalRounded className="cursor-pointer" />
                            </div>
                        ))}
                    </div>

                )
            }
        </div>
    )
}
