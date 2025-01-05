import { useEffect, useState } from "react"
//import { FiUpload } from "react-icons/fi"

import toast from "react-hot-toast"
import { FiUpload } from "react-icons/fi";

export default function ChangeProfilePicture(props) {

    const user = props.user;
    const setUser = props.setUser;
    const [imageFile, setImageFile] = useState(user.image);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);

    }

    const handleFileUpload = async () => {
        try {

            const data = new FormData();
            data.append("profilePic", imageFile);
            console.log("imageData", data);

            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/profile/updateDisplayPicture`,
                {
                    method: "PUT",
                    body: data,
                    credentials: 'include'
                }
            );
           

            if (Response.ok) {
                toast.success("Image uploaded");
                const resdata = await Response.json();
                // console.log("ResData",resdata)
                setUser(resdata.data);


            } else {
                toast.error("IMAGE NOT UPLOADED.");
            }

        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }
    }

    return (

        <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5">
            <div className="flex items-center gap-x-6">
                <img
                    src={user?.image}
                    alt={""}
                    className="aspect-square w-[75px] p-1 rounded-full object-cover"
                />
                <div className="space-y-2">
                    <p>Change Profile Picture</p>
                    <div className="flex flex-row gap-3">
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className=" rounded-full"
                            accept="image/png, image/gif, image/jpeg"
                        />
                        <button
                            onClick={handleFileUpload}
                            className="flex items-center gap-x-2 rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50">
                             <FiUpload></FiUpload>
                             Upload
                        </button>

                    </div>
                </div>
            </div>
        </div >

    )
}