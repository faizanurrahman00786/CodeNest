import ChangeProfile from "./ChangeProfile"
import DeleteAccount from "./DeleteAccount"
import EditProfile from "./EditProfile"


export default function Settings(props) {

  const user = props.user;
  const setUser = props.setUser;
  const setisLogin= props.setisLogin;
  return (
    <>
      <h1 className="mb-12 ml-16 text-3xl font-medium text-richblack-5">
        Edit Profile
      </h1>

      <div className="flex flex-col w-3/5 m-auto">
        <ChangeProfile user={user} setUser={setUser} />


        <EditProfile user={user} />


        <DeleteAccount setisLogin={setisLogin}/>
      </div>

    </>
  )
}