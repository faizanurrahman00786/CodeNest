import React from "react";
import loginImg from "../assets/Images/login.webp";
import Template from "../components/Login/Template";

function Login(props) {
    
    let setisLogin=props.setisLogin;
    const setUser= props.setUser;
   
    return ( 
        <div>
            <Template
                title="Welcome Back"
                desc1="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                image={loginImg}
                formType="login"
                setisLogin={setisLogin}
                setUser= {setUser}
               
            />
        </div>
    );
}
export default Login;