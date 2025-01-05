import React, { useEffect, useState } from 'react'
import Footer from '../Homepage/Footer'
import { Link, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import AvgRating from './AvgRating'

const Catalog = () => {


    const { categoryName } = useParams()
    const [active, setActive] = useState(1)

    //Fetch all categories

    const [allCourses, setallCourses] = useState([]);

    const fetchAllCourse = async () => {
        try {

            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/course/getAllCourses`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include"
                }
            );

            if (!Response.ok) {
                toast.error("Failed to load Courses");
            }
            const res = await Response.json();
            setallCourses(res.data);
            // console.log("My course", allCourses);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllCourse();
    }, [])


    return (
        <>
            {/* Hero Section */}
            <div className=" box-content bg-richblack-800 px-4">
                <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
                    <p className="text-sm text-richblack-300">
                        {`Home / Category / `}
                        <span className="text-yellow-25">
                            {categoryName}
                        </span>
                    </p>
                    <p className="text-3xl text-richblack-5">
                        {categoryName}
                    </p>
                    <p className="max-w-[870px] text-richblack-200">
                       Here you'll find rich collections of courses designed to ignite your curiosity,
                       enhance your skills, and towards your goals. Whether you're seeking to master new skills,
                        delve into the world of coding.
                    </p>
                </div>
            </div>

            {/* Section 1 */}
            <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
                <div className="section_heading">Courses to get you started</div>
                <div className="my-4 flex border-b border-b-richblack-600 text-sm">
                    <p
                        className={`px-4 py-2 ${active === 1
                            ? "border-b border-b-yellow-25 text-yellow-25"
                            : "text-richblack-50"
                            } cursor-pointer`}
                        onClick={() => setActive(1)}
                    >
                        All Courses
                    </p>
                    <p
                        className={`px-4 py-2 ${active === 2
                            ? "border-b border-b-yellow-25 text-yellow-25"
                            : "text-richblack-50"
                            } cursor-pointer`}
                        onClick={() => setActive(2)}
                    >
                        New
                    </p>
                </div>
                <div className='flex justify-between flex-wrap w-full gap-y-6 mb-12'>
                    {allCourses?.map(function (course) {
                        return (
                                <div className='w-[32%] max-h-[18rem] hover:scale-105 transition-all duration-500'>
                                    <Link className='flex flex-col h-full p-4 rounded-2xl hover:shadow-xl hover:shadow-blue-700 border border-richblack-700 text-white' to={`/course-details/${course?._id}/${course?.courseName}`}>
                                        <img src={course?.thumbnail} alt='/' className='max-h-[60%] h-full mb-3 rounded-xl object-center'></img>
                                        <div className='text-lg text-caribbeangreen-300 font-semibold'>{course?.courseName}</div>
                                        <AvgRating courseId={course?._id}/>
                                        <div className='text-richblack-200'><span>Enrolled:</span>{course?.studentsEnrolled?.length}</div>
                                        <div className='text-richblack-25'>Rs. <del className='text-richblack-25 italic'>3999</del>
                                         <span className='text-richblack-5 font-semibold' > {course?.price} </span></div>
                                       
                                    </Link>
                                </div>
                           
                    )})}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Catalog;