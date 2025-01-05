import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function LoginForm(props) {

    let setisLogin = props.setisLogin;
    const setUser= props.setUser;
    let navigate = useNavigate();


    async function submitHandler(e) {
        e.preventDefault();

        try {
            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                    credentials: "include"
                }
            );

            if (Response.ok) {
                toast.success("Logged In successfully");
                const data = await Response.json();
                localStorage.setItem("token", data.token);
                const localData = JSON.stringify(data.user);
                localStorage.setItem("user", localData);
                setisLogin(true);
                setUser(data.user);
                navigate("/");
                
            } else {
                toast.error("Email or Password not exist.");
            }
        }
        catch (error) {
            console.error("Failed to Logged In", error);
        }

    }

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function changeHandler(event) {
        setFormData(
            (prev) => {
                return {
                    ...prev,
                    [event.target.name]: event.target.value,
                }
            }
        );
    }
    return (
        <div>

            <form onSubmit={submitHandler} className="mt-4 flex flex-col gap-y-1">
                <label htmlFor="email" className="text-[0.875rem] text-richblack-25 mb-1 leading-[1.375rem]">Email Address
                    <sup className="text-pink-200">*</sup></label>
                <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    // value={formData.email}
                    placeholder="Enter your E-mail address"
                    onChange={changeHandler} className="bg-richblack-800  rounded-[0.75rem] w-full p-[12px] text-richblack-50
                    placeholder:text-richblack-600"></input>

                <label htmlFor="password" className="text-[0.875rem] text-richblack-25 mb-1 leading-[1.375rem]">Password
                    <sup className="text-pink-200">*</sup></label>
                <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    // value={formData.password}
                    placeholder="Enter Password"
                    onChange={changeHandler} className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-50
                    placeholder:text-richblack-600"></input>

                <Link to="/reset-password">
                    <p className="text-xs mt-1 text-blue-100 ml-80">Forgot Password</p>
                </Link>


                <button type="submit" className="w-full bg-caribbeangreen-600 hover:bg-caribbeangreen-700 
                py-[8px] px-[12px] rounded-[8px] mt-6 text-richblack-100">Login</button>
            </form>

            <div className="flex w-full items-center my-4 gap-x-2">
                <div className="h-[1px] w-full bg-richblack-700"></div>
                <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
                <div className="h-[1px] w-full bg-richblack-700"></div>
            </div>

        </div>
    );
}
export default LoginForm;