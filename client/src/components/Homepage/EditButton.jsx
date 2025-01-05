import React from "react";
import { FaUserEdit } from "react-icons/fa";

function EditButton(props){
    const name=props.name;

    return(
        <div>
            <button className=" flex gap-x-2 items-center m-2 p-2 px-3 font-bold text-richblack-900 
             text-sm h-9 rounded-lg gbutton grb2"> 
             <FaUserEdit></FaUserEdit>
             {name}</button>
        </div>
    );
}
export default EditButton;