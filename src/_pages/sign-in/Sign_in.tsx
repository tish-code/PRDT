import { Link, useNavigate } from "react-router-dom";
import { logo as Sign_in_logo } from "../../_components/navBar/_fragments";
import GoogleLogin from "../../_components/google-login";
import AuthLayout from "../../_components/auth-layout";

function Sign_in() {
  const line_style = "border border-gray-200 flex-1 h-0";
  const input_style =
    "w-full rounded-md py-[0.4em] px-[0.4em] text-gray-900 text-[0.9em] outline-indigo-900 border border-gray-400 focus:outline-none focus:border-2 focus:border-[#2c55d4]  mb-[1.3rem]";
  return (
    <AuthLayout>
      <div className="flex flex-col items-center h-[100vh]">
        <div className="bg-white px-10 w-[400px] rounded-lg">
          <div className="flex flex-col">
            <Sign_in_logo styles="mx-[auto] mt-[2rem] text-[1.6em] text-[#2c55d4] font-big" />
            <p className="mx-[auto] text-[1.3em] my-[1.5rem]">
              Sign in to PRDT
            </p>
          </div>
          <div>
            <form action="" onSubmit={() => {}}>
              <input
                disabled
                className={input_style}
                type="text"
                placeholder="Email"
              />
              <input
                disabled
                className={input_style}
                type="text"
                placeholder="Password"
              />
              <button
                type="submit"
                disabled
                className="w-full bg-[#2c55d4] text-[#fff]  rounded-md text-[1rem] py-[0.4em] hover:opacity-[0.8]"
              >
                Sign in
              </button>
            </form>
            <div className="flex items-center justify-center my-[1.2rem] ">
              <div className={line_style}></div>
              <p className="mx-[1.5rem] flex-2">or</p>{" "}
              <div className={line_style}></div>
            </div>
            <GoogleLogin />
          </div>
          <div className="flex mt-[1.5em] text-[0.9em]">
            <p>
              New to PRDT?{"  "}
              <Link className="text-primary-100" to="/sign-up">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Sign_in;
