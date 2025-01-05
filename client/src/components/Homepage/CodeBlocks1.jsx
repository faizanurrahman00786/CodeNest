import React from "react";
import { FaArrowRight } from "react-icons/fa";
import GButton from "../Homepage/GButton";
import techImage from "../../assets/mongodb.svg";
import "../../App.css";
import { Link } from "react-router-dom";

function CodeBlocks1(props) {
    const heading = props.heading;
    const subheading = props.subheading;

    return (
        <div className="relative w-11/12 h-[600px] flex flex-col justify-around items-center mt-4 mx-auto lg:flex-row">

            <div className="flex flex-col items-center justify-center space-y-2 w-1/2">
                {heading}
                {subheading}
                <div className="flex items-center justify-center">
                    {/* Button with arrow icon */}

                    <Link to="/login"><div className="relative grb2 p-2 gap-2 gbutton rounded-lg flex items-center justify-center cursor-pointer h-10">
                        <button className="text-sm">Let's Go</button>
                        <FaArrowRight></FaArrowRight>
                    </div></Link>

                    <GButton name={"Learn More"}></GButton>
                </div>
            </div>

            <img src={techImage} className="h-3/5 techImage m-4 w-1/2"></img>

        </div>
    )
}
export default CodeBlocks1;