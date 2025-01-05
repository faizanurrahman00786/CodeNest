import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

import CountryCode from "../../data/countrycode.json";
// import { apiConnector } from "../../services/apiconnector"
// import { contactusEndpoint } from "../../services/apis"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false)
  // const obj={
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors, isSubmitSuccessful },
  // }

  const handleSubmit = async (data) => {
    // console.log("Form Data - ", data)
    try {
      // setLoading(true)
      // const res = await apiConnector(
      //   "POST",
      //   contactusEndpoint.CONTACT_US_API,
      //   data
      // )
      // console.log("Email Res - ", res)
      // setLoading(false)
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      setLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-7" onSubmit={handleSubmit()}>
      <div className="flex gap-x-3">
        <div>
          <label htmlFor="firstname" className="text-[0.875rem] text-richblack-25 mb-1 leading-[1.375rem]">First Name:
            <sup className="text-pink-200">*</sup></label>
          <input
            required
            type="text"
            name="firstName"
            id="firstname"
            // value={formData.email}
            placeholder="Enter First Name"
            // onChange={changeHandler}
            className="bg-richblack-800 space-y-12 rounded-[0.75rem] w-full p-[12px]
                            placeholder:text-richblack-600 text-richblack-25"></input>
        </div>
        <div>
          <label htmlFor="lastname" className="text-[0.875rem] text-richblack-25 mb-1 leading-[1.375rem]">Last Name:
            <sup className="text-pink-200">*</sup></label>
          <input
            required
            type="text"
            name="lastName"
            id="lastname"
            // value={formData.email}
            placeholder="Enter Last Name"
            // onChange={changeHandler}
            className="bg-richblack-800 space-y-12 rounded-[0.75rem] w-full p-[12px]
                            placeholder:text-richblack-600 text-richblack-25"></input>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-[0.875rem] text-richblack-25 mb-1 leading-[1.375rem]">Email Address:
          <sup className="text-pink-200">*</sup></label>
        <input
          required
          type="email"
          name="email"
          id="email"
          // value={formData.email}
          placeholder="Enter your E-mail address"
          // onChange={changeHandler}
          className="bg-richblack-800 space-y-12 rounded-[0.75rem] w-full p-[12px]
                        placeholder:text-richblack-600 text-richblack-25"></input>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber" className="text-[0.875rem] text-richblack-25 mb-1 leading-[1.375rem]">
          Phone Number:
          <sup className="text-pink-200">*</sup>
        </label>

        <div className="flex gap-5">

          <select
            type="text"
            name="countryCode"
            id="countryCode"
            placeholder=""
            className="w-[15%] bg-richblack-800 rounded-lg p-1"

          >
            {CountryCode.map((ele, i) => {
              return (
                <option key={i} value={ele.code}>
                  {ele.code} -{ele.country}
                </option>
              )
            })}
          </select>

          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              className="bg-richblack-800 space-y-12 rounded-[0.75rem] w-full p-[12px]
                        placeholder:text-richblack-600 text-richblack-25"

            />
          </div>
        </div>

      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="lable-style">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          placeholder="Enter your message here"
          className="p-2 bg-richblack-800 rounded-lg placeholder:text-richblack-600"

        />

      </div>

      <button
        disabled={loading}
        type="submit"
        className={`rounded-md bg-yellow-200 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${!loading &&
          "transition-all duration-200 hover:scale-95 hover:shadow-none"
          }  disabled:bg-richblack-500 sm:text-[16px] `}
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactUsForm