import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";


function VerifyEmail() {

  const navigate = useNavigate();
  let location = useLocation();

  let formData = location.state.data || {};

  async function resendOtp() {

    const Response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/auth/sendotp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email })
      }
    );


    if (Response.ok) {
      toast.success("Otp sent successfully");

    } else {
      console.log("Failed to send OTP", await Response.json());
    }

  }


  async function handleVerifyAndSignup(e) {
    e.preventDefault();

    const Response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      }
    );


    if (Response.ok) {
      toast.success("Account created successfully");
      navigate("/login");

    } else {
      console.log("Failed to save user's data", await Response.json());
    }

  };

  function changeHandler(event) {

    formData[event.target.name] = event.target.value;

  }


  return (
    <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center">

      <div className="max-w-[500px] p-4 lg:p-8">
        <h1 className="text-richblack-25 font-semibold text-[1.875rem] leading-[2.375rem]">
          Verify Email
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
          A verification code has been sent to you. Enter the code below.
        </p>
        <form onSubmit={handleVerifyAndSignup}>

          <input
            required
            type="text"
            name="otp"
            placeholder="OTP"
            onChange={changeHandler}
            className="w-full bg-richblack-800 text-center rounded-[0.75rem] p-[10px]
             placeholder:text-richblack-600 text-richblack-50 text-xl"
          >
          </input>

          <button
            type="submit"
            className="w-full bg-caribbeangreen-500 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
          >
            Verify Email
          </button>
        </form>
        <div className="mt-3 flex items-center justify-between">
          <Link to="/signup">
            <p className="text-richblack-50 flex  items-center gap-x-2">
              <BiArrowBack /> Back To Signup
            </p>
          </Link>
          <button
            className="flex items-center text-blue-100 gap-x-2"
            onClick={resendOtp}>

            <RxCountdownTimer />
            Resend it
          </button>
        </div>
      </div>

    </div>
  );
}

export default VerifyEmail;