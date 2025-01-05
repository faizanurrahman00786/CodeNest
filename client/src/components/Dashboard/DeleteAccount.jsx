import React from "react";
import toast from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi"
import { useNavigate } from "react-router-dom"


export default function DeleteAccount(props) {

  const navigate = useNavigate();
  const setisLogin= props.setisLogin;

  async function handleDeleteAccount() {
    try {

      const Response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/profile/deleteProfile`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        }
    );

    if(Response.ok)
    {
      toast.success("Account Deleted successfully");
      localStorage.removeItem("token");
      setisLogin(false);
      navigate("/");
    }
    else{
      toast.error("Failed to delete Account");
    }

    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <>
      <div className="my-4 flex flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900 p-4 px-12">
        <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
          <FiTrash2 className="text-3xl text-pink-200" />
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-richblack-25">
            Delete Account
          </h2>
          <div className="w-3/5 italic text-sm text-pink-25">
            <p>
              This account may contain paid Courses. Deleting your account,
               will remove all the associated data with it.
            </p>
          </div>
          <button
            type="button"
            className="w-fit cursor-pointer p-2 px-4 hover:rounded-full  rounded-xl h-10 border border-pink-50 text-pink-200"
            onClick={handleDeleteAccount}
          >
            Delete.
          </button>
        </div>
      </div>
    </>
  )
}