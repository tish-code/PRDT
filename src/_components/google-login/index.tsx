import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../UserProvider";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase-config";
import { RouterName } from "../../types";
const image = require("../../assets/google.png");

function GoogleLogin() {
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
    navigate(RouterName.ROOT);
  };
  const { pathname } = useLocation();
  return (
    <>
      <button
        type="button"
        onClick={async () => {
          await handleGoogleSignIn();
        }}
        className="flex w-full items-center justify-center mb-[1rem] border border-gray-800 text-[1rem] text-gray-800 rounded-md hover:opacity-[0.8]"
      >
        <div className="flex items-center my-[0.1em]">
          <img src={image} alt="google logo" className="mr-[0.4rem] w-[2rem]" />
          {pathname === RouterName.SIGN_IN
            ? "Sign in with Google"
            : "Sign up with Google"}
        </div>
      </button>
    </>
  );
}

export default GoogleLogin;
