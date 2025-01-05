import React from "react";
import { useState } from "react";
import { useNavigate, } from "react-router-dom";
import toast from "react-hot-toast";


function SignupForm() {

    // let setisLogin = props.setisLogin;
    let navigate = useNavigate();


    async function submitHandler(e) {
        e.preventDefault();

        try {

            if (formData.password !== formData.confirmPassword) {
                toast.error("Password not matched");
                navigate("/signup");

            }
            else {

                const Response = await fetch(
                    `${process.env.REACT_APP_BASE_URL}/auth/sendotp`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({email:formData.email})
                    }
                );
                

                if (Response.ok) {
                    toast.success("Otp sent successfully");
                    navigate('/verifyEmail', {state:{ data: formData }});

                } else {
                    console.log("Failed to save user's data", await Response.json());
                }

            }
        }

        catch (error) {
            console.error("Error in send the mail.",error);
        }
    };




    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        confirmPassword: "",
        accountType: "",
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
            <form onSubmit={submitHandler} className="mt-4">

                <div className="flex gap-x-3">
                    <div>
                        <label htmlFor="firstname" className="text-[0.875rem] text-richblack-25 mb-1 leading-[1.375rem]">First Name
                            <sup className="text-pink-200">*</sup></label>
                        <input
                            required
                            type="text"
                            name="firstName"
                            id="firstname"
                            // value={formData.email}
                            placeholder="Enter First Name"
                            onChange={changeHandler}
                            className="bg-richblack-800 space-y-12 rounded-[0.75rem] w-full p-[12px]
                            placeholder:text-richblack-600 text-richblack-25"></input>
                    </div>
                    <div>
                        <label htmlFor="lastname" className="text-[0.875rem] text-richblack-25 mb-1 leading-[1.375rem]">Last Name
                            <sup className="text-pink-200">*</sup></label>
                        <input
                            required
                            type="text"
                            name="lastName"
                            id="lastname"
                            // value={formData.email}
                            placeholder="Enter Last Name"
                            onChange={changeHandler}
                            className="bg-richblack-800 space-y-12 rounded-[0.75rem] w-full p-[12px]
                            placeholder:text-richblack-600 text-richblack-25"></input>
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="text-[0.875rem] text-richblack-25 mb-1 leading-[1.375rem]">Email Address
                        <sup className="text-pink-200">*</sup></label>
                    <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        // value={formData.email}
                        placeholder="Enter your E-mail address"
                        onChange={changeHandler}
                        className="bg-richblack-800 space-y-12 rounded-[0.75rem] w-full p-[12px]
                        placeholder:text-richblack-600 text-richblack-25"></input>
                </div>
                <div className="flex gap-x-3">
                    <div>
                        <label htmlFor="password" className="text-[0.875rem] text-richblack-25 mb-1 leading-[1.375rem]">Password
                            <sup className="text-pink-200">*</sup></label>
                        <input
                            required
                            type="password"
                            name="password"
                            id="password"
                            // value={formData.password}
                            placeholder="Enter Password"
                            onChange={changeHandler}
                            className="bg-richblack-800 space-y-12 rounded-[0.75rem] w-full p-[12px]
                            placeholder:text-richblack-600 text-richblack-25"></input>
                    </div>
                    <div>
                        <label htmlFor="cnfpassword" className="text-[0.875rem] text-richblack-25 mb-1 leading-[1.375rem]">Confirm Password
                            <sup className="text-pink-200">*</sup></label>
                        <input
                            required
                            type="password"
                            name="confirmPassword"
                            id="cnfpassword"
                            // value={formData.password}
                            placeholder="Confirm Password"
                            onChange={changeHandler}
                            className="bg-richblack-800 space-y-12 rounded-[0.75rem] w-full p-[12px]
                            placeholder:text-richblack-600 text-richblack-25"></input>
                    </div>

                </div>

                <div>
                    <label htmlFor="accountType" className="text-[0.875rem] text-richblack-25 mb-1 leading-[1.375rem]">Role
                        <sup className="text-pink-200">*</sup></label>
                    <select
                        required
                        name="accountType"
                        id="accountType"
                        // value={formData.password}
                        onChange={changeHandler}
                        className="bg-richblack-800 space-y-12 rounded-[0.75rem] w-full p-[12px] text-richblack-25">

                        <option className="text" value={null}>
                            Select Role:</option>
                        <option className="text-richblack-25" value={"Student"}>Student</option>
                        <option className="text-richblack-25" value={"Instructor"}>Instructor</option>

                    </select>

                </div>

                <button className="w-full bg-caribbeangreen-600 hover:bg-caribbeangreen-700 
                py-[8px] px-[12px] rounded-[8px] mt-8 text-richblack-100 font-semibold">Create Account</button>
            </form>
        </div>
    )
}
export default SignupForm;