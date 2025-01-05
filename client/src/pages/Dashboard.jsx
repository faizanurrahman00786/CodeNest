import React  from 'react'
import {  Outlet } from "react-router-dom"
import Sidebar from '../components/Dashboard/Sidebar'


const Dashboard = (props) => {
   
  const setisLogin= props.setisLogin;
  const user= props.user;

  return (
    <div className='relative flex min-h-[calc(100vh-3.5rem)] bg-richblack-900'>
      <Sidebar setisLogin={setisLogin} user={user} />
      <div className=' w-full bg-richblack-900 overflow-hidden'>

        <Outlet />

      </div>
    </div>
  )
}

export default Dashboard;
