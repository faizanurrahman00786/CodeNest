import React from 'react'
import { useNavigate } from 'react-router-dom'
import IconBtn from '../../components/Homepage/EditButton'


const MyProfile = (props) => {

    const user = props.user;

    const navigate = useNavigate();

    return (
        <div className='text-white relative w-[60%] flex flex-col px-20'>

            <h1 className='text-3xl text-richblack-25 mb-6 mt-1'>
                My Profile
            </h1>

            {/* section 1 */}
            <div className='flex flex-col lg:flex-row justify-between bg-richblack-800 border border-richblack-700 w-full rounded-lg p-2 px-4'>
                <div className='flex items-center'>
                    <img
                        src={user?.image}
                        alt={""}
                        className='aspect-square w-[50px] mr-4 rounded-full' />

                    <div className='text-richblack-5 text-lg font-bold'>
                        <p> {user?.firstName + " " + user?.lastName} </p>
                        <p className='text-sm font-thin'>{user?.accountType}</p>
                    </div>
                </div>
                <button onClick={() => navigate("/dashboard/setting")}>
                    <IconBtn
                        name={"Edit"}>
                    </IconBtn>
                </button>

            </div>



            {/* section 3 */}
            <div className='flex flex-col bg-richblack-800 border border-richblack-700 w-full rounded-lg p-2 px-4 mt-4'>

                <div className='flex flex-col lg:flex-row justify-between items-center font-bold text-richblack-25'>
                    <p>Personal Details</p>

                    <button onClick={() => navigate("/dashboard/setting")}>
                        <IconBtn name={"Edit"} />
                    </button>

                </div>
                <div className='flex flex-col lg:flex-row gap-x-16 items-baseline'>
                    <div>
                        <div>
                            <p className='text-richblack-200'>First Name:</p>
                            <p className='text-richblack-25'>{user?.firstName}</p>
                        </div>
                        <div className='mt-4'>
                            <p className='text-richblack-200 mt-2'>Email:</p>
                            <p className='text-richblack-25'>{user?.email}</p>
                        </div>
                        <div className='mt-4'>
                            <p className='text-richblack-200 mt-2'>Gender:</p>
                            <p className='text-richblack-25'>{user?.additionalDetails?.gender ?? "--"}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-richblack-200 mt-2'>Last Name:</p>
                            <p className='text-richblack-25'>{user?.lastName}</p>
                        </div>
                        <div className='mt-4'>
                            <p className='text-richblack-200 mt-2'>Phone Number:</p>
                            <p className='text-richblack-25'>{user?.additionalDetails?.contactNumber ?? "--"}</p>
                        </div>
                        <div className='mt-4'>
                            <p className='text-richblack-200 mt-2'>Date of Birth:</p>
                            <p className='text-richblack-25'>{user?.additionalDetails?.dateofBirth ?? "--"}</p>
                        </div>
                    </div>
                </div>

                <div className='mt-1'>
                    <p className='text-richblack-200 mt-2'>Role:</p>
                    <p className='text-richblack-25'>{user?.accountType}</p>
                </div>
                <div className='mt-1'>
                    <p className='text-richblack-200 mt-2'>{user.accountType==="Student"?"Enrolled Courses:":"Created Courses:"}</p>
                    <p className='text-richblack-25'>{user?.courses.length ?? "--"}</p>
                </div>

            </div>


        </div>
    )
}

export default MyProfile
