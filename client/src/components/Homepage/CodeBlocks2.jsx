import React from "react";
import { FaArrowRight } from "react-icons/fa";
import GButton from "../Homepage/GButton";
import { TypeAnimation } from "react-type-animation";
import "../../App.css";
import { Link } from "react-router-dom";

function CodeBlocks2(props) {
    const heading = props.heading;
    const subheading = props.subheading;
    const code = `<<!DOCTYPE html><html><head><title>Example
                </title><linkrel="stylesheet"href="styles.css"></head> <body><div></div></body></html>`

    return (

        <div className="relative w-11/12 h-[325px] flex flex-col-reverse justify-around items-center mx-auto lg:flex-row-reverse">

            <div className="flex flex-col items-center justify-center space-y-2  ">
                {heading}
                {subheading}

                <div className="flex items-center justify-center">
                    {/* Button with arrow icon */}

                    <Link to="/login">
                        <div className="relative grb2 p-2 gap-2 gbutton rounded-lg flex items-center justify-center cursor-pointer h-10">
                            <button className="text-sm">Try to yourself</button>
                            <FaArrowRight></FaArrowRight>
                        </div>
                    </Link>


                    <GButton name={"Learn More"}></GButton>
                </div>
            </div>

            <div className="h-[75%] w-1/4 pt-4 pb-4 px-2 pr-3 justify-center border hidden lg:flex
               rounded-xl  border-richblack-600 bg-richblack-800 shadow-2xl shadow-richblue-700 ">

                <div className='text-center text-[0.90rem] flex flex-col w-[10%] text-blue-500 font-bold'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>

                </div>

                <div className="w-[90%]">
                    <TypeAnimation sequence={[code, 1000, " "]}
                        wrapper="p" // The HTML element to wrap the text 
                        speed={50} // Speed of the typing animation 
                        style={{
                            fontSize: '0.85rem',
                            color: "yellow",
                            display: 'inline-block',
                        }} // Custom styles
                        repeat={Infinity} // Repeat the animation infinitely 
                        omitDeletionAnimation={true}
                    />
                </div>

            </div>

        </div>
    )
}
export default CodeBlocks2;