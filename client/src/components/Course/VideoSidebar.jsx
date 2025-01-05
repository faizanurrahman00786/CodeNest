import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { BiSolidVideo } from "react-icons/bi";


function VideoSidebar(props) {

    const navigate = useNavigate();
    const Lectures = props.lectures;
    const courseName = props.courseName;
    const courseId = props.courseId;
    const [clickDiv, setclickDiv] = useState(null);

    // console.log("lectureData", Lectures);

    function clickHandler(id) {
        setclickDiv(id);
        navigate(`/view-lecture/${courseName}/${courseId}/${id}`, { state: { data: Lectures } });
    }

    return (

        <div className='flex min-w-[222px] flex-col justify-start border-r-[1px] border-r-richblack-50
             min-h-[calc(100vh-3.5rem)] bg-richblack-800 py-20 px-6 text-richblack-50'>

            <div className="text-richblack-5 font-semibold text-xl">{courseName}</div>
            <div className="text-sm">Total Lecture: {Lectures?.length}</div>

            <div className='flex flex-col mt-8 gap-y-2 text-richblack-50'>
                {
                    Lectures?.map(function (link) {
                        return (

                            <div onClick={()=>clickHandler(link._id)} 
                             className={`cursor-pointer flex items-center gap-x-1 ${clickDiv===link._id? 'text-yellow-25' : '' }`}>
                               <BiSolidVideo/>
                                {link.title}
                            </div>

                        )
                    })
                }
            </div>

            <div className='mt-6 mb-6 h-[1px] w-full bg-richblack-600'></div>

        </div>


    )
}

export default VideoSidebar