import React from "react";
import Instructor from "../../assets/Tech Image 3.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function InstructorSec() {

    return (
        <div className="w-11/12 mx-auto flex items-center mt-6 justify-center">

            <div className='w-[50%] ml-10 mt-10 mb-2'>
                <img
                    src={Instructor}
                    alt=""
                    className=' w-[75%] rounded-xl shadow-2xl shadow-blue-200'
                />
            </div>

            <div className=' flex flex-col items-center gap-2'>

                <div className='text-3xl text-center font-semibold text-white'>
                    Become an
                    <span className="text-caribbeangreen-300"> Intructor</span>
                </div>
                <p className='text-richblack-200 text-[16px] text-center mb-5'>Highly educated and eligible faculties from the different
                    <br />parts of the world are here.
                </p>

                <Link to="/signup">
                    <div className="relative grb2 p-2 gap-2 gbutton rounded-lg flex items-center justify-center cursor-pointer h-11">
                        <button className="text-sm">Start Teaching Today</button>
                        <FaArrowRight></FaArrowRight>
                    </div>
                </Link>


            </div>

        </div>
    )
}
export default InstructorSec;
