// import React, { useState } from 'react'
// import {Chart, registerables} from "chart.js"
// import {Pie} from "react-chartjs-2"

// Chart.register(...registerables);

// const InstructorChart = ({courses}) => {

//     const [currChart, setCurrChart] = useState("students");

//     //functio to genertae random colors
//     const getRandomColors = (numColors) => {
//         const colors = [];
//         for(let i=0; i<numColors; i++) {
//             const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random()*256)},
//             ${Math.floor(Math.random()*256)})`
//             colors.push(color);
//         }
//         return colors;
//     }

//     //create data for chart displaying student info

//     const chartDataForStudents = {
//         labels: courses.map((course)=> course.courseName),
//         datasets: [
//             {
//                 data: courses.map((course)=> course.totalStudentsEnrolled),
//                 backgroundColor: getRandomColors(courses.length),
//             }
//         ]
//     }


//     //create data for chart displaying iincome info
//     const chartDataForIncome = {
//         labels:courses.map((course)=> course.courseName),
//         datasets: [
//             {
//                 data: courses.map((course)=> course.totalAmountGenerated),
//                 backgroundColor: getRandomColors(courses.length),
//             }
//         ]
//     }


//     //create options
//     const options = {

//     };


//   return (
//     <div>
//       <p>Visualise</p>
//       <div className='flex gap-x-5'>
//         <button
//         onClick={() => setCurrChart("students")}
//         >
//             Student
//         </button>

//         <button
//         onClick={() => setCurrChart("income")}
//         >
//             Income
//         </button>
//       </div>
//       <div>
//         <Pie 
//             data={currChart === "students" ? chartDataForStudents : chartDataForIncome}
//             options={options}
//         />
//       </div>
//     </div>
//   )
// }

// export default InstructorChart










import React, { useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';

Chart.register(...registerables);

const InstructorChart = ({ courses }) => {
    const [currChart, setCurrChart] = useState('students');

    const getRandomColors = (numColors) => {
        const colors = [];
        for (let i = 0; i < numColors; i++) {
            const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)})`;
            colors.push(color);
        }
        return colors;
    };

    const chartDataForStudents = {
        labels: courses.map((course) => course.courseName),
        datasets: [
            {
                data: courses.map((course) => course.totalStudentsEnrolled),
                backgroundColor: getRandomColors(courses.length),
            },
        ],
    };

    const chartDataForIncome = {
        labels: courses.map((course) => course.courseName),
        datasets: [
            {
                data: courses.map((course) => course.totalAmountGenerated),
                backgroundColor: getRandomColors(courses.length),
            },
        ],
    };

    const options = {};

    return (
        <div className="p-6 bg-transparent rounded-lg shadow-md">
            <p className="text-2xl font-semibold text-white mb-4">Visualise</p>
            <div className="flex gap-x-5 mb-6">
                <button
                    className={`px-4 py-2 rounded-lg ${currChart === 'students' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                    onClick={() => setCurrChart('students')}
                >
                    Students
                </button>
                <button
                    className={`px-4 py-2 rounded-lg ${currChart === 'income' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                    onClick={() => setCurrChart('income')}
                >
                    Income
                </button>
            </div>
            <div className='bg-richblack-50 w-1/2 h-1/4 mx-auto'>
                <Pie
                    data={currChart === 'students' ? chartDataForStudents : chartDataForIncome}
                    options={options}
                />
            </div>
        </div>
    );
};

export default InstructorChart;
