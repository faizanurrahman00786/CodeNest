import React, {useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"


function UpdatePassword() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
        email: "",
        otp: "",
    })

    async function optSender(e) {
        e.preventDefault();

        try {

            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/auth/sendotp`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: formData.email })
                }
            );


            if (Response.ok) {
                toast.success("Otp sent successfully");

            } else {
                toast.error("Failed to send OTP");
                console.log("Failed to send otp", await Response.json());
            }

        }


        catch (error) {
            console.error("Error in send the mail.", error);
        }
    };

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/auth/reset-password`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            

            if (Response.ok) {
                toast.success("Password changed");
                navigate("/login");

            } else {
                toast.error("Failed to change password.");
            }
        }
        catch (error) {
            console.error("Failed to change password", error);
        }


    }

    return (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">

            <div className="max-w-[500px] p-4 lg:p-8">
                <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-25">
                    Choose new password
                </h1>
                <p className="my-4 text-[1rem] leading-[1.500rem] text-richblack-100">
                    Almost done. Enter your new safe and secure password.
                </p>
                <form onSubmit={handleOnSubmit} className="flex flex-col">

                    <label className="relative">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-50">
                            Email <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="email"
                            onChange={handleOnChange}
                            placeholder="Enter Email:"
                            className="w-full bg-richblack-100 rounded-[0.75rem] p-[10px]
                             placeholder:text-richblack-300 text-richblack-800"
                        />

                    </label>

                    <button
                        onClick={optSender}
                        className="mt-3 rounded-[8px] bg-caribbeangreen-700 py-[8px] px-[8px]
                        hover:bg-caribbeangreen-600 text-richblack-50 text-sm mx-auto"
                    >
                        Send OTP
                    </button>

                    <label className="relative mt-2">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-50">
                            OTP: <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="otp"
                            onChange={handleOnChange}
                            placeholder="OTP"
                            className="w-full bg-richblack-100 rounded-[0.75rem] p-[10px]
                             placeholder:text-richblack-300 text-richblack-800 text-md"
                        />

                    </label>

                    <label className="relative mt-2">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-50">
                            New Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            placeholder="Enter Password"
                            className="w-full bg-richblack-100 rounded-[0.75rem] p-[10px]
                             placeholder:text-richblack-300 text-richblack-800"
                        />
                    </label>

                    <label className="relative mt-2 block">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-50">
                            Confirm New Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="password"
                            name="confirmPassword"
                            onChange={handleOnChange}
                            placeholder="Confirm Password"
                            className="w-full bg-richblack-100 rounded-[0.75rem] p-[10px]
                             placeholder:text-richblack-300 text-richblack-800"
                        />

                    </label>

                    <button
                        type="submit"
                        className="mt-6 rounded-[8px] bg-caribbeangreen-700 py-[10px] px-[12px] 
                        hover:bg-caribbeangreen-600 text-richblack-50 text-sm mx-auto"
                    >
                        Reset Password
                    </button>

                </form>
                <div className="mt-2 flex items-center justify-between">
                    <Link to="/login">
                        <p className="flex items-center gap-x-2 text-richblack-100 hover:text-richblack-50">
                            <BiArrowBack /> Back To Login
                        </p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default UpdatePassword