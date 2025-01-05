import React from "react";
import "../../App.css";
import image1 from "../../assets/Logo/AWS.svg";
import image2 from "../../assets/Logo/Accenture.svg";
import image3 from "../../assets/Logo/Capgemini.png";
import image4 from "../../assets/Logo/Microsoft-Azure-Logo.png";
import image5 from "../../assets/Logo/TCS.svg";
import image6 from "../../assets/Logo/TechM_Logo_1.svg";

import image9 from "../../assets/Logo/fireworks-ai.png";
import image10 from "../../assets/Logo/flipkart-logo.png";
import image11 from "../../assets/Logo/google_cloud.svg";
import image12 from "../../assets/Logo/langchain.svg";
import image13 from "../../assets/Logo/paytm.png";


function Logoanimation() {

    return (
        <div className="mt-6 w-full flex flex-col items-center justify-evenly h-[300px]">

            <div className="text-richblack-700 text-2xl">More than
                <span className="text-blue-200 font-bold"> 500+ students</span> are placed in these top dream companies.
            </div>

            <div className="relative flex flex-row w-full mt-2 h-1/2">

                <div className="w-[10%] absolute h-full z-10 shadowLeft"></div>

                <div className="flex flex-col relative justify-evenly h-full gap-y-1 items-center">

                    <div className="flex flex-row justify-between items-center h-1/2 companylogo1">
                        <img src={image1} alt="" className="rounded-lg h-full w-[12%] border  border-richblack-50 p-4 timeline"></img>
                        <img src={image2}alt="" className="rounded-lg h-full w-[12%]  border border-richblack-50 timeline p-4"></img>
                        <img src={image3} alt="" className="rounded-lg h-full w-[12%]  border border-richblack-50 p-4 timeline"></img>
                        <img src={image4} alt="" className="rounded-lg h-full  w-[12%]  border border-richblack-50 p-4 timeline"></img>
                        <img src={image5} alt="" className="rounded-lg h-full  w-[12%]  border border-richblack-50 p-4 timeline"></img>
                        <img src={image6} alt="" className="rounded-lg h-full  w-[12%]  border border-richblack-50 p-4 timeline"></img>
                        <img src={image2} alt="" className="rounded-lg h-full  w-[12%]  border border-richblack-50 p-4 timeline"></img>
                    </div>
                    <div className="flex flex-row justify-evenly items-center h-1/2 companylogo2">
                        <img src={image10} alt="" className="rounded-lg h-full  w-[11%] border border-richblack-50 p-4 timeline"></img>
                        <img src={image9} alt="" className="rounded-lg h-full  w-[11%] border border-richblack-50 p-4 timeline"></img>
                        <img src={image5} alt="" className="rounded-lg h-full  w-[11%] border border-richblack-50 p-4 timeline"></img>
                        <img src={image11} alt="" className="rounded-lg h-full  w-[11%] border border-richblack-50 p-4 timeline"></img>
                        <img src={image12} alt="" className="rounded-lg h-full  w-[11%] border border-richblack-50 p-5 timeline"></img>
                        <img src={image13} alt="" className="rounded-lg h-full  w-[11%] border border-richblack-50 p-5 timeline"></img>
                        <img src={image4} alt="" className="rounded-lg h-full  w-[11%] border border-richblack-50 p-5 timeline"></img>
                    </div>

                </div>

                <div className="w-[10%] absolute h-full right-0 z-10 shadowRight"></div>

            </div>



        </div>
    )
}
export default Logoanimation;