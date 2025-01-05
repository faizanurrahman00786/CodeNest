import { FaArrowRight } from "react-icons/fa";
import image1 from "../assets/Slide Image 2.svg"
import image2 from "../assets/Slide Image 3.svg"
import React from "react";
import bgImage from "../assets/background.png";
import "../App.css";
import GButton from "../components/Homepage/GButton";
import YButton from "../components/Homepage/YButton";
import CodeBlocks1 from "../components/Homepage/CodeBlocks1";
import CodeBlocks2 from "../components/Homepage/CodeBlocks2";
import Timeline from "../components/Homepage/Timeline";
import know from "../assets/Images/Know_your_progress.png";
import compare from "../assets/Images/Compare_with_others.png";
import plan from "../assets/Images/Plan_your_lessons.png";
import Logoanimation from "../components/Homepage/Logoanimation";
import InstructorSec from "../components/Homepage/InstructorSec";
import Footer from "../components/Homepage/Footer";
import { Link } from "react-router-dom";


function Home() {



    return (
        <div className="flex flex-col">

            {/* Section 1 */}

            <div className="relative w-screen h-screen">

                <div className="h-full w-full relative z-10">
                    <img src={bgImage} alt="/" className="h-full w-full" >
                    </img>

                    <div className="absolute left-10 top-1/4 justify-center items-center flex flex-col  space-y-2 select-none">
                        <h1 className="font-semibold text-white text-4xl text-center">Empower Yourself with
                            <span className="text-caribbeangreen-300 text-4xl"> Coding Skills</span></h1>
                        <p className="text-center text-[16px] text-richblack-200"> With our online coding courses,
                            you can learn at your own pace, from anywhere in the world,
                            and get access to a <br />wealth of resources, including hands-on projects, quizzes,
                            and personalized feedback from instructors.</p>

                        <div className="flex justify-center items-center">
                            <Link to="/about"><YButton name={"Learn More"}></YButton></Link>
                            <Link to="/category/All courses"><GButton name={"Buy Course"}></GButton></Link>
                        </div>
                    </div>


                </div>


                <div className="flex flex-col w-3/4 h-full  items-center justify-evenly
                 absolute top-0 right-2 transition-all duration-200 design">
                    <img src={image1} alt="/" className="h-2/5 w-full"></img>
                    <img src={image2} alt="/" className="h-2/5 w-full"></img>
                </div>
            </div>

            {/* Section 2 */}

            <CodeBlocks1
                heading={
                    <div className='text-4xl font-semibold text-white'>
                        Unlock Your
                        <span className="text-caribbeangreen-300"> Coding potential</span>
                        <br></br> with our online courses.
                    </div>
                }
                subheading={
                    <p className='text-richblack-200 text-[16px] '>Our courses are designed and taught by
                        industry experts who have years of <br />
                        experience in coding and are passionate about sharing their knowledge with you.</p>
                }>
            </CodeBlocks1>


            <CodeBlocks2
                heading={
                    <div className='text-4xl font-semibold text-white'>
                        Let's start
                        <span className="text-caribbeangreen-300"> Coding <br />in seconds</span>

                    </div>
                }
                subheading={
                    <p className='text-richblack-200 text-[16px] '> This platform provide you a lot of oppurtunity. From first class you
                        <br />will be expert in coding and real world projects.
                    </p>
                }>
            </CodeBlocks2>

            <div className='text-3xl text-center font-semibold text-white'>
                Unlock
                <span className="text-caribbeangreen-300"> the Power of Code</span>
            </div>
            <p className='text-richblack-200 text-[16px] text-center mb-5'>Learn and create anything that you can imagine.</p>

            {/* Section 3 */}

            <div className=" w-full justify-around items-center flex flex-col mt-2 bg-pure-greys-5">

                <div className="flex flex-row justify-around items-center w-11/12 mt-20 mx-auto">

                    <div className='text-4xl font-semibold text-richblack-700'>
                        Enhance your skills for
                        <span className="text-4xl text-blue-200"> Job <br />that's in demand</span>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <p className='text-[16px] text-richblack-700'>
                            Discover a new world of learning with our edutech platform,<br />
                            where knowledge meets technology to create limitless opportunities.
                        </p>
                        <button className=" m-4 mx-2 p-2 text-richblack-900 
                     text-sm h-10 rounded-lg grb3">Learn More</button>
                    </div>
                </div>

                <Timeline></Timeline>

                <div className="flex flex-col justify-around items-center w-11/12 mt-10 mx-auto">

                    <div className='text-4xl font-semibold text-blue-200'>
                        Revolutionize
                        <span className="text-richblack-700"> your educational experience</span>

                    </div>

                    <p className='text-richblack-700 text-[15px] '>With our state-of-the-art platform,
                        bridging the gap between traditional learning and modern technology.
                    </p>

                    <div className='flex flex-row items-center justify-center mt-2 w-[30%]'>
                        <img
                            src={know}
                            alt="Know"
                            className='object-contain -mr-32 hoverImage  '
                        />
                        <img
                            src={compare}
                            alt="Know"
                            className='object-contain hoverImage z-10 '
                        />
                        <img
                            src={plan}
                            alt="Know"
                            className='object-contain -ml-40 hoverImage '
                        />
                    </div>

                    <Link to="/login"><button className=" m-4 mx-2 p-2 text-richblack-900 
                     text-sm h-11 rounded-lg grb3">Start Learning</button></Link>

                </div>

                <Logoanimation></Logoanimation>

            </div>


            {/* Section 4 */}
            <InstructorSec></InstructorSec>
            <Footer></Footer>

        </div>
    );
}
export default Home;
