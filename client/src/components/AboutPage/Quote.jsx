import React from "react";


const Quote = () => {
    return (
        <div className=" text-xl md:text-2xl font-semibold mx-auto py-5 pb-15 text-center text-richblack-25">
            We are passionate about revolutionizing the way we learn. Our
            innovative platform <p className="font-bold text-caribbeangreen-200">combines technology</p>{" "}
            <span className="text-richblack-25 font-bold">
                {" "}
                expertise
            </span>
            , and community to create an
            <span className="text-caribbeangreen-200 font-bold">
                {" "}
                unparalleled educational
                experience.
            </span>
        </div>
    )
}

export default Quote;