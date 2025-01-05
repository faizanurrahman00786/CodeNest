import React from "react";
import "../../App.css";

function GButton(props){
    const name=props.name;
    return(
        <div>
            <button className=" h-10 rounded-lg m-4 mx-6 p-2 
            text-sm text-richblack-25 gbutton grb1">{name}</button>
        </div>
    );
}
export default GButton;