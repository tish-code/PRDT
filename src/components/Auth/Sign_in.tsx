import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "./firebase-config";
import { signInWithPopup } from "firebase/auth";
import { RouterName } from "../../types";
import { useUser } from "../../UserProvider";
import { useState } from "react";

const image = require("../../assets/google.png");

function Sign_in() {
  const navigate = useNavigate();

  const { updateUserCurrentUser } = useUser();
  const handleGoogleSignIn = async () => {
    const data = await signInWithPopup(auth, provider);
    const {
      providerData,
      reload,
      emailVerified,
      isAnonymous,
      uid,
      metadata,
      providerId,
      tenantId,
      ...others
    } = data.user;
    updateUserCurrentUser({ ...others, isLoggedIn: true });
    localStorage.setItem("user", JSON.stringify(others));
    navigate(RouterName.HOME);
  };
  const [signIn, SetSignIn] = useState("Sign in with google");
  //styles
  const line_style = "border border-gray-200 flex-1 h-0";
  const input_style =
    "w-full rounded-md py-[0.4em] px-[0.4em] text-gray-900 text-[0.9em] outline-indigo-900 border border-gray-400 focus:outline-none focus:border-2 focus:border-[#2c55d4]  mb-[1.3rem]";
  return (
    <div className="flex flex-col items-center h-[100vh]">
      <div className="bg-white px-10 w-[400px] rounded-lg">
        <div className="flex flex-col">
          <p className="mx-[auto] mt-[2rem] text-[1.6em] text-[#2c55d4] font-big">
            <Link to="/">PRDT</Link>
          </p>
          <p className="mx-[auto] text-[1.3em] my-[1.5rem]">Sign in to PRDT</p>
        </div>
        <div className="">
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
            type="button"
            disabled
            className="w-full bg-[#2c55d4] text-[#fff]  rounded-md text-[1rem] py-[0.4em] hover:opacity-[0.8]"
          >
            Sign in
          </button>
          <div className="flex items-center justify-center my-[1.2rem] ">
            <div className={line_style}></div>
            <p className="mx-[1.5rem] flex-2">or</p>{" "}
            <div className={line_style}></div>
          </div>
          <button
            type="button"
            className="flex w-full items-center justify-center mb-[1rem] border border-gray-800 text-[1rem] text-gray-800 rounded-md hover:opacity-[0.8]"
          >
            <div
              className="flex items-center my-[0.1em]"
              onClick={async () => {
                SetSignIn("Loading...");
                await handleGoogleSignIn();
              }}
            >
              <img
                src={image}
                alt="google logo"
                className="mr-[0.4rem] w-[2rem]"
              />
              {signIn}
            </div>
          </button>
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
  );
}

export default Sign_in;
