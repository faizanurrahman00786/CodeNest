import {  useState } from "react"
import { toast } from "react-hot-toast"
import IconBtn from "../../components/Homepage/EditButton"
import DragAndDropInput from "../Dashboard/DragAndDropInput";
import { useParams, useNavigate } from "react-router-dom";

export default function CourseInformationForm() {

    const params = useParams();
    const courseId = params.courseId;
    const courseName = params.courseName;
    const navigate = useNavigate();

    let obj = {
        title: "",
        description: "",
    }
    const [LectureData, setLectureData] = useState(obj);
    const [upload, setupload] = useState([]);

    //   handle next button click
    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log(courseData);
        // console.log("formData",formData);

        try {
            const formData = new FormData();
            formData.append("title", LectureData.title)
            formData.append("description", LectureData.description)
            formData.append("video", upload[0]);
            formData.append("courseId", courseId);
            // console.log("formData",formData);

            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/course/addSubSection`,
                {
                    method: "POST",
                    body: formData,
                    credentials: "include"
                }
            );

            if (Response.ok) {
                toast.success("Lecture created successfully");
                const data = await Response.json();
                setLectureData(data.data);
                navigate(`/view-course/${courseName}/${courseId}`);

            } else {
                toast.error("Lecture not created.");
            }
        }
        catch (error) {
            console.error("Failed to create Lecture", error);
        }

    }

    function changeHandler(event) {
        setLectureData(
            (prev) => {
                return {
                    ...prev,
                    [event.target.name]: event.target.value,
                }
            }
        );
    }

    return (
        <div >
            <form
                onSubmit={onSubmit}
                className="space-y-8 rounded-lg border-[1px] border-richblack-700 bg-richblack-800 p-6 w-[75%] mx-auto">

                {/* Course Title */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-5" htmlFor="courseTitle">
                        Video Title <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                        required
                        id="courseTitle"
                        name="title"
                        onChange={changeHandler}
                        placeholder="Enter Video Title"
                        className="bg-richblack-700  rounded-[0.75rem] w-full p-[10px] text-richblack-50
                    placeholder:text-richblack-600"
                    />

                </div>
                {/* Course Short Description */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-5" htmlFor="courseShortDesc">
                        Video Description <sup className="text-pink-200">*</sup>
                    </label>
                    <textarea
                        id="courseShortDesc"
                        placeholder="Enter Description"
                        onChange={changeHandler}
                        name="description"
                        className="bg-richblack-700  rounded-[0.75rem] w-full p-[10px] text-richblack-50
                    placeholder:text-richblack-600"
                    />

                </div>

                <DragAndDropInput setupload={setupload} upload={upload} Name={"Video"}></DragAndDropInput>



                {/* Next Button */}
                <div className="flex justify-end gap-x-2">
                    <button type="submit">
                        <IconBtn
                            name={"Save"}>
                        </IconBtn>
                    </button>

                </div>

            </form >
        </div >
    )
}