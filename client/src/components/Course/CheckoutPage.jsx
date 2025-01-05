import { useLocation, useParams } from "react-router-dom"
import AvgRating from "./AvgRating";
import { useState } from "react";

export default function Cart() {
    const location = useLocation();
    const course = location.state.data || {}
    const [formData, setFormData]= useState({
        Name:"",
        email:""
    })

   async function submitHandler(){

    }

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
            <h1 className="mb-14 ml-12 text-3xl font-medium text-richblack-5">Checkout</h1>
            <p className="border-b border-b-richblack-500 pl-2 pb-2 font-semibold text-richblack-400">
                Order Summury
            </p>

            <div className="mt-8 flex flex-col mx-8 items-start justify-between gap-x-20 gap-y-6 lg:flex-row">

                <div className="flex flex-col border border-b-blue-400 px-2 pb-2 gap-x-4 items-center lg:flex-row">
                    <img
                        src={course?.thumbnail}
                        alt={course?.courseName}
                        className="h-[148px] w-[100%] mt-2 mb-4 rounded-lg object-cover"
                    />
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-richblack-5">
                            {course?.courseName}
                        </p>
                        <p className=" text-richblack-300">
                            {course?.category}
                        </p>
                        <div className="flex text-white items-center gap-2">
                            <AvgRating courseId={course._id} />
                            <span className="text-richblack-300">(review)</span>
                        </div>
                        <p className="text-richblack-25 mt-4">Rs: {course?.price}/-</p>
                    </div>
                </div>

                <div className="min-w-[280px] w-1/3 rounded-xl border-[1px] border-richblack-700 bg-richblack-800 mr-6 p-6">
                    <p className="mb-1 text-lg font-medium text-richblack-50">Payment Details:</p>
                    <p className="mb-6 text-sm font-medium text-richblack-300">Complete your purchase details and
                        provide your details for successful payment done.</p>

                    <div className="border border-richblack-700 rounded-lg p-6">
                        <form onSubmit={submitHandler} className=" flex flex-col gap-y-1">
                            <label htmlFor="name" className="text-[0.875rem] text-richblack-50 mb-1 leading-[1.375rem]">Full Name:
                                <sup className="text-pink-200">*</sup></label>
                            <input
                                required
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your Full Name"
                                onChange={changeHandler} className="bg-richblack-700  rounded-[0.75rem] w-full p-[12px] text-richblack-50
                                placeholder:text-richblack-600"></input>

                            <label htmlFor="email" className="text-[0.875rem] text-richblack-50 mb-1 leading-[1.375rem]">Email:
                                <sup className="text-pink-200">*</sup></label>
                            <input
                                required
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter you Email address"
                                onChange={changeHandler} className="bg-richblack-700 rounded-[0.75rem] w-full p-[12px] text-richblack-50
                                 placeholder:text-richblack-600"></input>

                                <div className="h-[1px] w-full bg-richblack-500 mt-6"></div>
                                <div className="text-richblack-5 flex justify-between">Total: <span>Rs.{course?.price}/-</span></div>

                            <button type="submit" className="w-full bg-caribbeangreen-600 hover:bg-caribbeangreen-700 
                            py-[8px] px-[12px] rounded-[8px] mt-6 text-richblack-100">Buy Now</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}