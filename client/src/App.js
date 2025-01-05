import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import VerifyEmail from "./components/Login/VerifyEmail";
import UpdatePassword from "./pages/UpdatePassword";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/Dashboard/MyProfile";
import Error from "./pages/Error";
import Setting from "./components/Dashboard/Setting";
import EnrolledCourse from "./components/Dashboard/EnrolledCourse";
import AddCourse from "./components/Dashboard/AddCourse";
import CourseInformationForm from "./components/Dashboard/CourseInformationForm";
import MyCourse from "./components/Dashboard/MyCourse";
import Lecture from "./components/Dashboard/Lecture";
import LectureForm from "./components/Dashboard/LectureForm";
import InstructorDashboard from "./components/Dashboard/InstructorDashboard";
import CourseDetails from "./components/Course/CourseDetails";
import CategoryPage from "./components/Course/CategoryPage";
import CheckoutPage from "./components/Course/CheckoutPage";
import VideoDashboard from "./components/Course/VideoDashboard";

function App() {

  const [login, setisLogin] = useState(false);
  const [user, setUser] = useState(null);

  function checkLogin() {

    const token = localStorage.getItem("token");
    if (token) {
      const Userdata = JSON.parse(localStorage.getItem("user"));
      setisLogin(true);
      setUser(Userdata);
    }
  }

  useEffect(function () {
    checkLogin();
  }, []);

  return (
    <div className="w-screen flex flex-col min-h-screen font-inter bg-richblack-900">

      <Navbar setisLogin={setisLogin} login={login} setUser={setUser}></Navbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login setisLogin={setisLogin} setUser={setUser} />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/verifyEmail" element={<VerifyEmail />}></Route>
        <Route path="/reset-password" element={<UpdatePassword />}></Route>
        <Route path="/category/:categoryName" element={<CategoryPage/>}></Route>
        <Route path="/course-details/:courseId/:courseName" element={<CourseDetails login={login} user={user}/>}></Route>

        <Route element={login ? <Dashboard user={user} setisLogin={setisLogin} /> : <Home />}>
          <Route path="/dashboard/My-profile" element={<MyProfile user={user} />}></Route>
          <Route path="/dashboard/setting" element={<Setting user={user} setUser={setUser} setisLogin={setisLogin} />}></Route>
          <Route path="/dashboard/enrolled-courses" element={<EnrolledCourse />}></Route>
          <Route path="/dashboard/instructor" element={<InstructorDashboard/>}></Route>
          <Route path="/dashboard/my-courses" element={<MyCourse />}></Route>
          <Route path="/checkout/:courseName" element={<CheckoutPage />}></Route>
          <Route path="/view-course/:courseName/:courseId" element={<Lecture user={user} />}></Route>
          <Route  element={<AddCourse />}>
            <Route path="/dashboard/add-course" element={<CourseInformationForm />} />
            <Route path="/add-Lecture/:courseName/:courseId" element={<LectureForm/>} />
          </Route>
        </Route>

        <Route path="/view-lecture/:courseName/:courseId/:videoId" element={login ? <VideoDashboard /> : <Login />}></Route>

        <Route path="*" element={<Error />}></Route>

      </Routes>
    </div>
  );
}

export default App;





