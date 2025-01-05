import {  useState } from "react"
import { toast } from "react-hot-toast"
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import IconBtn from "../../components/Homepage/EditButton"
import DragAndDropInput from "../Dashboard/DragAndDropInput";
import { useNavigate } from "react-router-dom"

export default function CourseInformationForm() {

    let obj={
        courseName:"",
        courseDescription:"",
        instruction:"",
        price:"",
        whatYouWillLearn:"",
        category:""
    }
    const [courseData, setcourseData] = useState(obj);
    const [upload, setupload] = useState([]);

    const navigate = useNavigate();

    //   handle next button click
    const onSubmit = async (e) => {
        e.preventDefault();

        try {

            const formData = new FormData();
            formData.append("courseName", courseData.courseName)
            formData.append("courseDescription", courseData.courseDescription)
            formData.append("price", courseData.price)
            formData.append("whatYouWillLearn", courseData.whatYouWillLearn)
            formData.append("category", courseData.category)
            formData.append("instruction", courseData.instruction)
            formData.append("thumbnailImage", upload[0]);
           
            // console.log("formData",formData);

            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/course/createCourse`,
                {
                    method: "POST",
                    body: formData,
                    credentials: "include"
                }
            );

            if (Response.ok) {
                toast.success("Course created successfully");
                const data = await Response.json();
                setcourseData(data.data);
                navigate("/dashboard/my-courses");

            } else {
                toast.error("Course not created.");
            }
        }
        catch (error) {
            console.error("Failed to create course", error);
        }

    }

    function changeHandler(event) {
        setcourseData(
            (prev) => {
                return {
                    ...prev,
                    [event.target.name]: event.target.value,
                }
            }
        );
    }

    return (
        <div>
            <form
                onSubmit={onSubmit}
                className="space-y-8 rounded-lg border-[1px] border-richblack-700 bg-richblack-800 p-6">

                {/* Course Title */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-5" htmlFor="courseTitle">
                        Course Name <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                        required
                        id="courseTitle"
                        name="courseName"
                        onChange={changeHandler}
                        placeholder="Enter Course Title"
                        className="bg-richblack-700  rounded-[0.75rem] w-full p-[10px] text-richblack-50
                    placeholder:text-richblack-600"
                    />

                </div>
                {/* Course Short Description */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-5" htmlFor="courseShortDesc">
                        Course Description <sup className="text-pink-200">*</sup>
                    </label>
                    <textarea
                        id="courseShortDesc"
                        placeholder="Enter Description"
                        onChange={changeHandler}
                        name="courseDescription"
                        className="bg-richblack-700  rounded-[0.75rem] w-full p-[10px] text-richblack-50
                    placeholder:text-richblack-600"
                    />

                </div>
                {/* Course Price */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-5" htmlFor="coursePrice">
                        Course Price <sup className="text-pink-200">*</sup>
                    </label>
                    <div className="relative">
                        <input
                            required
                            id="coursePrice"
                            name="price"
                            onChange={changeHandler}
                            placeholder="Enter Price"
                            type="text"
                            className="bg-richblack-700  rounded-[0.75rem] w-full p-[10px] px-10 text-richblack-50
                    placeholder:text-richblack-600"
                        />
                        <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
                    </div>

                </div>
                {/* Course Category */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-5" htmlFor="courseCategory">
                        Course Category <sup className="text-pink-200">*</sup>
                    </label>
                    <select
                        name="category"
                        defaultValue=""
                        onChange={changeHandler}
                        id="courseCategory"
                        className="bg-richblack-700  rounded-[0.75rem] w-full p-[10px] text-richblack-50
                    placeholder:text-richblack-600"
                    >
                        <option value="">
                            ---Choose Category---
                        </option>
                        <option value="Web Development">
                            Web Development
                        </option>
                        <option value="Data Science">
                            Data Science
                        </option>
                        <option value="">
                            Android Devlopment
                        </option>
                        <option value="Data Structure">
                            Data Structure
                        </option>

                    </select>

                </div>

                <DragAndDropInput setupload={setupload} upload={upload} Name={"Thumbnail"}></DragAndDropInput>

                {/* Benefits of the course */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-5" htmlFor="courseBenefits">
                        What you will learn <sup className="text-pink-200">*</sup>
                    </label>
                    <textarea
                        name="whatYouWillLearn"
                        id="courseBenefits"
                        onChange={changeHandler}
                        placeholder="Enter benefits of the course"
                        className="bg-richblack-700  rounded-[0.75rem] w-full p-[10px] text-richblack-50
                    placeholder:text-richblack-600"
                    />

                    <label className="text-sm text-richblack-5" htmlFor="instruction">
                        Instruction <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                        name="instruction"
                        id="instruction"
                        onChange={changeHandler}
                        placeholder="Instruction"
                        className="bg-richblack-700  rounded-[0.75rem] w-full p-[10px] text-richblack-50
                    placeholder:text-richblack-600"
                    />


                    {/* Next Button */}
                    <div className="flex justify-end gap-x-2">
                        <button type="submit">
                            <IconBtn
                                name={"Save"}>
                            </IconBtn>
                        </button>

                    </div>
                </div>
            </form>
        </div>
    )
}