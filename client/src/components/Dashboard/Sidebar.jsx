import React, { useState } from 'react'
import sidebarLinks from '../../data/dashboard-links'
import { NavLink, useNavigate } from 'react-router-dom'
import { VscSettingsGear, VscSignOut, VscAccount, VscDashboard, VscVm, VscAdd, VscMortarBoard } from "react-icons/vsc"


function Sidebar(props) {

    const navigate = useNavigate();
    const setisLogin= props.setisLogin;
    const user= props.user;

    
    function logoutHandler() {

        localStorage.removeItem("token");
        setisLogin(false);
        navigate("/");

    }
   

    return (

        <div className='flex min-w-[222px] flex-col justify-start border-r-[1px] border-r-richblack-50
             min-h-[calc(100vh-3.5rem)] bg-richblack-800 py-20 px-6 text-richblack-50'>

            <div className='flex flex-col gap-y-2 text-richblack-50'>
                {
                    sidebarLinks.map(function (link) {
                        return (
                            link.type===user.accountType?(<div className='flex items-center gap-x-4 hover:text-richblack-5'>
                                <link.icon />
                                <NavLink to={link.path}>{link.name}</NavLink>
                            </div>):null
                        )
                    })
                }
            </div>

            <div className='mt-6 mb-6 h-[1px] w-full bg-richblack-600'></div>

            <div className='flex flex-col gap-y-2'>

                <div className='flex items-center gap-x-4'>
                    <VscSettingsGear />
                    <NavLink to="/dashboard/setting">Setting</NavLink>
                </div>

                <button
                   onClick={logoutHandler}
                    className=' font-medium text-richblack-50'>
                    <div className='flex items-center gap-x-4'>
                        <VscSignOut />
                        Logout
                    </div>

                </button>

            </div>

        </div>

    
    )
}

export default Sidebar
