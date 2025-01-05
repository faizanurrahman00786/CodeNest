import React from "react";
import "../../App.css";
import Logo1 from "../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../assets/Images/TimelineImage.png"



function Timeline() {
    const timeline = [
        {
            Logo: Logo1,
            heading: "Leadership",
            Description: "Fully committed to the success company",
        },
        {
            Logo: Logo2,
            heading: "Responsiblity",
            Description: "You will be always our top priority.",
        },
        {
            Logo: Logo3,
            heading: "Flexiblity",
            Description: "The ability to switch good skill",
        },
        {
            Logo: Logo4,
            heading: "Problem solving",
            Description: "Solution making in complex enivironment.",
        },
    ];

    return (
        <div className="relative w-11/12 flex flex-col justify-around items-center mt-4 mx-auto lg:flex-row">

            <div className='flex flex-col gap-y-4 w-1/3 pl-2'>
                {
                    timeline.map((element, index) => {
                        return (
                            <div className='flex flex-row items-center hoverImage' key={index}>

                                <div className='w-[55px] h-[55px] bg-white '>
                                    <img src={element.Logo} className="w-[55%] h-[55%]" />
                                </div>

                                <div>
                                    <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                    <p className='text-[15px] text-richblack-600'>{element.Description}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <img src={timelineImage} alt="timelineImage"
                className=' w-[40%] rounded-lg mt-2 shadow-richblack-500 shadow-2xl'></img>

        </div>
    )
}
export default Timeline;