
import { Outlet } from "react-router-dom";

export default function AddCourse() {
    return (

        <div className="flex w-full items-start gap-x-6">

            <div className="flex flex-col w-[65%]">
                <h1 className="mb-6 ml-12 text-3xl font-medium text-richblack-5">
                    Add Course
                </h1>
                {/* <div className="flex justify-around text-richblack-25">
                    <p className="rounded-full h-6 w-6 border border-white text-center">1 </p>
                    <p className="rounded-full h-6 w-6 border border-white text-center">2</p>
                    <p className="rounded-full h-6 w-6 border border-white text-center">3</p>
                </div> */}
                <div className="mt-4 mx-24 mb-6" >
                    {/* <RenderSteps /> */}
                    <Outlet></Outlet>
                </div>
            </div>
            {/* Course Upload Tips */}
            <div className="sticky top-10 mx-auto hidden  max-w-[350px] rounded-md border-[1px] border-richblack-700 bg-richblack-800 mt-6 p-6 xl:block">
                <p className="mb-8 text-lg text-richblack-5">⚡ Course Upload Tips</p>
                <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
                    <li>Set the Course Price option or make it free.</li>
                    <li>Standard size for the course thumbnail is 1024x576.</li>
                    <li>Video section controls the course overview video.</li>
                    <li>Course Builder is where you create & organize a course.</li>
                    <li>
                        Add Topics in the Course Builder section to create lessons,
                        quizzes, and assignments.
                    </li>
                    <li>
                        Information from the Additional Data section shows up on the
                        course single page.
                    </li>
                    <li>Make Announcements to notify any important</li>
                    <li>Notes to all enrolled students at once.</li>
                </ul>
            </div>
        </div>

    )
}