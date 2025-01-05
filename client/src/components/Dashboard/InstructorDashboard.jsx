// import React, { useEffect, useState } from 'react'
// import InstructorChart from './InstructorChart';
// import { Link } from 'react-router-dom';
// import toast from 'react-hot-toast';

// const InstructorDashboard = () => {

//     const [loading, setLoading] = useState(false);
//     // const [instructorData, setInstructorData] = useState(null);
//     const [courses, setCourses] = useState([]);


//     const getCourseDataWithStats = async () => {
//         setLoading(true);

//         try {
//             const Response = await fetch(
//                 "http://localhost:4000/api/v1/profile/getMyCourses",
//                 {
//                     method: "GET",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     credentials: "include"
//                 }
//             );

//             if (!Response.ok) {
//                 toast.error("Failed to load Dashboard");
//             }
//             setLoading(false);
//             const res = await Response.json();
//             setCourses(res.data);


//         } catch (error) {
//             console.log("Could not fetch dashboard courses.")
//         }
//     }

//     useEffect(function () {
//         getCourseDataWithStats()
//     }, []);


//     let totalStudents = 0;
//     let totalAmount = 0;
//     courses.forEach(function (course) {
//         totalAmount = totalAmount + course.price * course.studentsEnrolled;
//         totalStudents = totalStudents + course.studentsEnrolled;
//     })

//     return (
//         <div className='text-white'>
//             <div>
//                 <h1>Hi </h1>
//                 <p>Let's start something new</p>
//             </div>

//             {loading ? (<div className='spinner'></div>)
//                 : courses.length > 0
//                     ? (<div>
//                         <div>
//                             <div>
//                                <InstructorChart courses={courses}/>
//                                 <div>
//                                     <p>Statistics</p>
//                                     <div>
//                                         <p>Total Courses</p>
//                                         <p>{courses.length}</p>
//                                     </div>

//                                     <div>
//                                         <p>Total Students</p>
//                                         <p>{totalStudents}</p>
//                                     </div>

//                                     <div>
//                                         <p>Total Income</p>
//                                         <p>{totalAmount}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             {/* Render 3 courses */}
//                             <div>
//                                 <p>Your Courses</p>
//                                 <Link to="/dashboard/my-courses">
//                                     <p>View all</p>
//                                 </Link>
//                             </div>
//                             <div>
//                                 {
//                                     courses.slice(0, 3).map((course) => (
//                                         <div>
//                                             <img
//                                                 src={course.thumbnail}
//                                             />
//                                             <div>
//                                                 <p>{course.courseName}</p>
//                                                 <div>
//                                                     <p>{course.studentsEnrolled.length} students</p>
//                                                     <p> | </p>
//                                                     <p> Rs {course.price}</p>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                     ))
//                                 }
//                             </div>
//                         </div>
//                     </div>

//                     )
//                     : (<div>
//                         <p>You have not created any courses yet</p>
//                         <Link to={"/dashboard/addCourse"}>
//                             Create a Course
//                         </Link>
//                     </div>)}
//         </div>
//     )
// }

// export default InstructorDashboard;




import React, { useEffect, useState } from 'react';
import InstructorChart from './InstructorChart';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const InstructorDashboard = () => {
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);

    const getCourseDataWithStats = async () => {
        setLoading(true);

        try {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/profile/getMyCourses`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include"
                }
            );

            if (!response.ok) {
                toast.error("Failed to load Dashboard");
            }
            setLoading(false);
            const res = await response.json();
            setCourses(res.data);

        } catch (error) {
            console.log("Could not fetch dashboard courses.")
        }
    }

    useEffect(function () {
        getCourseDataWithStats()
    }, []);

    let totalStudents = 500;
    let totalAmount = 25000;
    courses.forEach(function (course) {
        totalAmount = totalAmount + course.price * course.studentsEnrolled;
        totalStudents = totalStudents + course.studentsEnrolled;
    });

    return (
        <div className='text-white p-4'>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold'>Hi</h1>
                <p className='text-lg'>Let's start something new</p>
            </div>

            {loading ? (
                <div className='spinner' />
            ) : courses.length > 0 ? (
                <div>
                    <div className='mb-8'>
                        <div>
                            <InstructorChart courses={courses} />
                            <div className='mt-4'>
                                <p className='text-2xl font-semibold mb-4'>Statistics</p>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                    <div className='bg-gray-800 p-4 rounded-md'>
                                        <p className='text-lg'>Total Courses</p>
                                        <p className='text-2xl font-bold'>{courses.length}</p>
                                    </div>

                                    <div className='bg-gray-800 p-4 rounded-md'>
                                        <p className='text-lg'>Total Students</p>
                                        <p className='text-2xl font-bold'>{totalStudents}</p>
                                    </div>

                                    <div className='bg-gray-800 p-4 rounded-md'>
                                        <p className='text-lg'>Total Income</p>
                                        <p className='text-2xl font-bold'>{totalAmount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between items-center mb-4'>
                            <p className='text-2xl font-semibold'>Your Courses</p>
                            <Link to="/dashboard/my-courses" className='text-blue-500'>View all</Link>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            {courses.slice(0, 3).map((course) => (
                                <div key={course.id} className='bg-gray-800 p-4 rounded-md'>
                                    <img
                                        src={course.thumbnail}
                                        alt={course.courseName}
                                        className='w-full h-40 object-cover rounded-md mb-4'
                                    />
                                    <div>
                                        <p className='text-lg font-bold'>{course.courseName}</p>
                                        <div className='flex items-center mt-2'>
                                            <p>{course.studentsEnrolled.length} students</p>
                                            <p className='mx-2'> | </p>
                                            <p>Rs {course.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <p>You have not created any courses yet</p>
                    <Link to={"/dashboard/addCourse"} className='text-blue-500'>
                        Create a Course
                    </Link>
                </div>
            )}
        </div>
    )
}

export default InstructorDashboard;

