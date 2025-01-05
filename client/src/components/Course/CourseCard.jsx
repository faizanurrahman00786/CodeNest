import React from "react"
// import copy from "copy-to-clipboard"
import { toast } from "react-hot-toast"
import { BsArrow90DegUp, BsTvFill } from "react-icons/bs"
import { FaShareSquare, FaClock, FaBook } from "react-icons/fa"
import { RiDiscountPercentFill } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

function CourseCard({ courseData, ...props}) {

  const instruction = [

    {
      id: 1,
      text: "Latest on-demand course",
      icon: <FaClock />
    },
    {
      id: 2,
      text: "Full life-Time access",
      icon: <BsArrow90DegUp />
    },
    {
      id: 3,
      text: "Access on Mobile and PC",
      icon: <BsTvFill />
    },
    {
      id: 4,
      text: "Certificate of completion",
      icon: <FaBook />
    }
  ]

  const navigate = useNavigate()
  const user = props.user;
  const login = props.login;
  const courseId = props.courseId;

  const {
    thumbnail: ThumbnailImage,
    price: CurrentPrice,
    _id: _id,
    courseName:courseName,
  } = courseData

  const percentOff = Math.floor((3999 - CurrentPrice) * 100 / 3999);


  // const handleShare = () => {
  //   copy(window.location.href)
  //   toast.success("Link copied to clipboard")
  // }

  function BuyHandler() {
    if (!login)
      navigate("/login");
    else {
      if (login && user.courses.includes(courseId))
        navigate(`/view-course/${courseName}/${courseId}`);
      else
        navigate(`/checkout/${courseName}`,{state:{ data: courseData }});
    }
  }

  return (
    <>
      <div
        className={`flex flex-col gap-4 rounded-3xl border shadow-2xl shadow-richblue-300 border-richblack-600 p-4 pt-6 text-richblack-25`}
      >
        {/* Course Image */}
        <img
          src={ThumbnailImage}
          alt={courseData?.courseName}
          className="max-h-[240px] min-h-[180px] w-[400px] overflow-hidden p-2 rounded-2xl object-cover md:max-w-full"
        />

        <div className="px-4">
          <div className="space-x-3 pb-4 text-2xl">
            <span className="flex items-center gap-x-2"><p className="font-semibold">Rs.</p>{CurrentPrice} <RiDiscountPercentFill className="text-pink-400" />
              <span className="text-xs mt-2">{percentOff}% off</span></span>
          </div>
          <div className="flex flex-col gap-4">
            <button
              className="w-full h-12 px-4 py-2 font-semibold text-richblack-900 hover:bg-yellow-300 hover:scale-[95%] transition-all rounded-lg border border-richblack-500 bg-yellow-200"
              onClick={BuyHandler}>
              {user?.courses.includes(courseId)?"Continue Learning":"Buy Now"}
            </button>

          </div>
          <div>
            <p className="pb-3 pt-6 text-center text-sm text-richblack-200">
              30-Day Money-Back Guarantee
            </p>
          </div>

          <div className={``}>
            <p className={`my-2 text-xl font-semibold `}>
              This Course Includes :
            </p>
            <div className="flex flex-col gap-3 text-sm text-caribbeangreen-100">
              {instruction?.map((item, i) => {
                return (
                  <p className={`flex gap-2`} key={i}>
                    {item.icon}
                    <span>{item.text}</span>
                  </p>
                )
              })}
            </div>
          </div>
          <div className="text-center">
            <button
              className="mx-auto flex items-center gap-2 py-6 text-richblack-200 "
              onClick={function handleShare() { }}
            >
              <FaShareSquare size={15} /> Share
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseCard