import React from "react";
import signupImg from "../assets/Images/signup.webp";
import Template from "../components/Login/Template";

function Signup(props) {

    let setisLogin=props.setisLogin;
    return (
        <div>
            <Template
                title="Join the CodeNest, learn and implement."
                desc1="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                image={signupImg}
                formType="signup"
                setisLogin={setisLogin}
            />
        </div>
    );
}
export default Signup;