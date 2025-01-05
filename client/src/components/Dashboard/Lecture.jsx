import { useEffect, useState } from "react"
import { BiDotsVerticalRounded, BiSolidVideo } from "react-icons/bi"
import { BiSolidTime } from "react-icons/bi"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"
import EditButton from "../Homepage/EditButton"
import { GiEmptyWoodBucket } from "react-icons/gi"

export default function MyCourse(props) {

    const navigate = useNavigate();
    const params = useParams();
    const courseId = params.courseId;
    const courseName = params.courseName;
    const user= props.user;

    const [Lecture, setLecture] = useState([]);

    const getmyLecture = async () => {
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
                toast.error("Failed to load Lecture");
            }
            const res = await Response.json();
            setLecture(res.data.courseContent);

        } catch (error) {
            console.log("Could not fetch enrolled Lecture.");
        }
    };
    useEffect(function () {
        getmyLecture();
    }, [])


    return (
        <div>

            <div className="text-3xl ml-16 mb-12 text-richblack-5">{courseName}</div>
            {
                !Lecture ? (
                    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
                        <div className="spinner"></div>
                    </div>
                ) : !Lecture.length ? (
                    <div>
                        <p className="grid h-[10vh] text-2xl w-full place-content-center text-richblack-50">
                            There is not any Lecture available.
                        </p>
                        <GiEmptyWoodBucket className="h-[20%] w-[20%] mx-auto text-richblack-600"></GiEmptyWoodBucket>
                        {user?.accountType==="Instructor" && <div className="flex justify-center mt-3" onClick={() => navigate(`/add-Lecture/${courseName}/${courseId}`)}><EditButton name={"Add Lecture"}></EditButton></div>}
                    </div>
                ) : (
                    <div className="my-4 w-[80%] mx-auto text-richblack-25">
                        {/* Headings */}
                        <div className="flex rounded-t-lg bg-richblack-800 ">
                            <p className="w-[45%] px-5 py-3 flex items-center gap-x-1"><BiSolidVideo /> Lecture Name</p>
                            <p className="w-[40%] px-2 py-3 flex justify-end items-center gap-x-1"><BiSolidTime /> Duration</p>

                        </div>
                        {/* Course Names */}
                        {Lecture.map((course, i, arr) => (
                            <div className={`flex items-center border border-richblack-700 ${i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
                                }`}
                                key={i}>

                                <div
                                    className="flex w-[45%] cursor-pointer gap-4 px-5 py-3"
                                    onClick={()=>{
                                        navigate(`/view-lecture/${courseName}/${courseId}/${course._id}`,{state:{data:Lecture}})
                                        
                                    }}>
                                    <div className="text-richblack-300">{i + 1}. </div>
                                    <div className="flex max-w-xs flex-col gap-2">
                                        <p className="font-semibold text-richblack-25">{course?.title}</p>
                                        <p className="text-xs text-richblack-300">
                                            {course?.description?.length > 50
                                                ? `${course?.description.slice(0,50)}...`
                                                : course?.description}
                                        </p>
                                    </div>


                                </div>

                                <div className="flex w-[40%] justify-end gap-2 px-2 py-3">
                                    <p> {(course.timeDuration.slice(0,2))}:00 min</p>
                                </div>
                                <BiDotsVerticalRounded className="cursor-pointer ml-[10%]  " />
                            </div>
                        ))}

                       {user?.accountType==="Instructor"?<div className="flex justify-end mt-3" onClick={() => navigate(`/add-Lecture/${courseName}/${courseId}`)}><EditButton name={"Add Lecture"}></EditButton></div>:null}

                    </div>

                )
            }
        </div>
    )
}