import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/CodeNest Image.png";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import toast from "react-hot-toast";
import { FaRegUser } from "react-icons/fa6";

function Navbar(props) {

    const navigate = useNavigate();
    const setisLogin = props.setisLogin;
    const login = props.login;
    const setUser= props.setUser;

    const data= ["All Courses","Web Devlopment","Data Structure","Data Science","Android Devlopment"];

    function logoutHandler() {

        localStorage.removeItem("token");
        setisLogin(false);
        setUser(null);
        navigate("/");

    }

    const [divOn, setdivOn] = useState(false);

    function divStatus() {
        if (divOn)
            setdivOn(false);
        else
            setdivOn(true);
    }

    async function fetchCategory() {
        try {

            const Response = await fetch(
                "http://localhost:4000/api/v1/course/showAllCategories",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (Response.ok) {
                toast.success("All Category fetched");
                const res = await Response.json();
                // setData(res.data);

            } else {
                toast.error("Failed");
            }

        }
        catch (error) {
            console.error("Error in getting category", error);
        }
    };

    return (
        <div className="h-14 flex items-center justify-around border-b-[1px] z-20 border-richblack-700">

            <Link to="/">
                <img src={logo} alt="/" width={110} height={10} className="mt-9"></img>
            </Link>

            <div className="text-richblack-25 flex gap-x-6 ">
                <NavLink to="/">Home</NavLink>

                <div className="relative flex items-center gap-x-1 group cursor-pointer"><button onClick={divStatus}>Category</button>
                    <IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
                    {divOn ? <div>
                        <div className="absolute mx-auto w-[50%] h-[100%] top-9 left-6 rotate-45 border-[1px]  bg-richblack-50"></div>
                        <div className="absolute mx-auto w-[200%] top-8 -left-6 rounded-md border-[1px] border-blue-100 border-t-richblack-900
                         pl-4 pt-4 pb-2 gap-y-2 bg-richblack-800  text-sm text-richblack-100 flex flex-col">
                            {data?.map(function (obj) {
                                return <NavLink className="hover:text-white" to={`/category/${obj}`} onClick={()=>setdivOn(false)}>{obj}</NavLink>
                            })}
                        </div>
                    </div> : null}

                </div>

                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </div>

            <div className="flex items-center gap-x-3">
                {login ? (<button className="h-9 px-3 rounded-md bg-transparent border border-richblack-300
                 text-richblack-50 hover:text-richblack-5" onClick={logoutHandler}>Logout</button>) :
                    (<Link to="/login"><button className="h-9 px-3 rounded-md bg-transparent border border-richblack-400
                 text-richblack-50 hover:text-richblack-5">Login</button></Link>)}

                <Link to={login?"/dashboard/My-profile":"/login"} title="Dashboard"><FaRegUser className="bg-richblack-100 w-6 h-6  p-1 rounded-2xl"></FaRegUser></Link>
            </div>

        </div>
    )
}

export default Navbar;