import React from "react";
import frame from "../../assets/Images/frame.png";
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Template(props) {
    let title = props.title;
    let desc1 = props.desc1;
    let desc2 = props.desc2;
    let image = props.image;
    let formType = props.formType;
    let setisLogin = props.setisLogin;
    const setUser = props.setUser;

    return (
        <div className="flex items-center justify-center m-auto  py-12 gap-x-72 w-11/12 max-w-[1160px]">

            <div className="flex flex-col w-11/12 mt-6 max-w-[450px]">
                <h1 className="text-richblack-25 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text-[1.125rem] mt-3 leading-[1.625rem]">
                    <span className="text-richblack-100">{desc1}</span>
                    <span className="text-blue-100 italic">{desc2}</span>
                </p>

                {formType === "signup" ? <SignupForm setisLogin={setisLogin} /> : <LoginForm setisLogin={setisLogin} setUser={setUser} />}

                {(formType === "login") ? <a href="/signup">
                    <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 
                    border px-[12px] py-[8px] gap-x-2 mt-6">
                        <FcGoogle />
                        <p className="font-semibold">Signup</p>
                    </button>
                </a> : null}


            </div>

            <div className="relative w-11/12 max-w-[450px]">

                <img
                    src={frame}
                    alt="patter"
                    width={558}
                    height={504}
                    loading="lazy"

                />
                <img
                    src={image}
                    alt="patter"
                    width={558}
                    height={504}
                    loading="lazy"
                    className="absolute -top-4 right-4 rounded-xl"
                />
            </div>

        </div>
    )
}

export default Template;