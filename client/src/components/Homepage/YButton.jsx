import React from "react";
import { FaArrowRight } from "react-icons/fa";

function YButton(props){
    const name=props.name;

    return(
        <div>
            <button className=" m-4 mx-2 p-2 text-richblack-900 
             text-sm h-10 rounded-lg gbutton grb2">{name}</button>
        </div>
    );
}
export default YButton;