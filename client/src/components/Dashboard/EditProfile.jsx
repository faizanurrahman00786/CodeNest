import { useNavigate } from "react-router-dom"
import IconBtn from "../../components/Homepage/EditButton"

const genders = ["Male", "Female", "Other"]

export default function EditProfile(props) {

  const user = props.user;
  const navigate = useNavigate()

  const submitProfileForm = async (e) => {
      e.preventdefault();
    try {

    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  return (
    <>
      <form onSubmit={submitProfileForm}>
        {/* Profile Information */}
        <div className="mt-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">
            Profile Information
          </h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="firstName" className="lable-style text-richblack-50">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                className="bg-richblack-700  rounded-[0.75rem] w-full p-[10px] text-richblack-50
                    placeholder:text-richblack-600"

                defaultValue={user?.firstName}
              />

            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="lastName" className="lable-style text-richblack-50">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter first name"
                className="bg-richblack-700  rounded-[0.75rem] w-full p-[10px] text-richblack-50
                    placeholder:text-richblack-600"

                defaultValue={user?.lastName}
              />

            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="dateOfBirth" className="lable-style text-richblack-50">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className="bg-richblack-700  rounded-[0.75rem] w-full p-[10px] text-richblack-50
                    placeholder:text-richblack-600"

                defaultValue={user?.additionalDetails?.dateOfBirth}
              />

            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="gender" className="lable-style text-richblack-50">
                Gender
              </label>
              <select
                type="text"
                name="gender"
                id="gender"
                className="bg-richblack-700  rounded-[0.75rem] w-full p-[10px] text-richblack-50
                    placeholder:text-richblack-600"

                defaultValue={user?.additionalDetails?.gender}
              >
                {genders.map((ele, i) => {
                  return (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  )
                })}
              </select>

            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="contactNumber" className="lable-style text-richblack-50">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Enter Contact Number"
                className="bg-richblack-700  rounded-[0.75rem] w-full p-[10px] text-richblack-50
                    placeholder:text-richblack-600"
                // {...register("contactNumber", {
                //   required: {
                //     value: true,
                //     message: "Please enter your Contact Number.",
                //   },
                //   maxLength: { value: 12, message: "Invalid Contact Number" },
                //   minLength: { value: 10, message: "Invalid Contact Number" },
                // })}
                defaultValue={user?.additionalDetails?.contactNumber}
              />

            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="about" className="lable-style text-richblack-50">
                About
              </label>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="Enter Bio Details"
                className="bg-richblack-700  rounded-[0.75rem] w-full p-[10px] text-richblack-50
                    placeholder:text-richblack-600"

                defaultValue={user?.additionalDetails?.about}
              />

            </div>
          </div>
        </div>

        <div className="flex justify-end mt-2">
        
          <IconBtn type="submit" name={"Save"} />
        </div>
      </form>
    </>
  )
}