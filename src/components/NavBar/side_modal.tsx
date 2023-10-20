import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../UserProvider";
import { RouterName } from "../../types";

interface Props {
  handleClose: () => void;
  open: Boolean;
}
function Side_modal({ handleClose, open }: Props) {
  const { user } = useUser();
  const navigate = useNavigate();
  const { updateUserCurrentUser } = useUser();
  return (
    <>
      {open && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
          className="flex flex-col items-center justify-center fixed bg-[rgba(0,0,0,0.1)] top-0 left-0 h-[100%] w-[100%]"
        >
          <div
            className={`bg-white px-5 w-[350px] rounded-tl-2xl rounded-bl-xl h-[100%] ml-auto`}
          >
            <div className="flex flex-col h-[90%]">
              <div className={`flex items-center mt-[1em] mb-[1.1em]`}>
                <div
                  className={`${
                    user?.accessToken
                      ? `flex items-center mr-[auto] `
                      : `hidden`
                  }`}
                >
                  <img
                    className="w-[2.1em] mr-[0.4em] rounded-full"
                    src={`${user?.photoURL}`}
                  ></img>{" "}
                  <button className="text-[0.9em] font-big text-gray-800">
                    {user?.displayName ? user?.displayName.split(" ")[0] : ""}
                  </button>
                </div>
                <div
                  className={`${
                    user?.accessToken
                      ? `hidden`
                      : `block mr-[auto] font-big text-[1.2em]`
                  }`}
                >
                  PRDT
                </div>
                <div onClick={handleClose}>
                  <p className="text-[1.2em] text-gray-500 cursor-pointer hover:text-gray-900 bg-slate-100 px-[0.4em] rounded-md">
                    &#10005;
                  </p>
                </div>
              </div>
              <div className="border-[0.5px] border-gray-100 flex-1 my-[0.5em] max-h-[1px]"></div>
              <div className={`${user?.accessToken ? `block` : `hidden`}`}>
                <Link
                  to="/"
                  className="flex items-center text-gray-900 text-[0.9em] hover:bg-slate-100 px-[0.4em] py-[0.4em] rounded-md"
                >
                  <p>Your profile</p>
                </Link>
              </div>
            </div>
            <div className="">
              {user?.accessToken && (
                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    updateUserCurrentUser(null);
                    navigate(RouterName.HOME);
                  }}
                  className="w-[100%] mt-[auto] text-white bg-primary-100 text-[0.9em] hover:opacity-[0.7] px-[0.4em] py-[0.4em] rounded-md"
                >
                  logout
                </button>
              )}
              {!user?.accessToken && (
                <Link to="/sign-in">
                  <button
                    onClick={() => {
                      console.log("modal sign-in btn clicked!");
                    }}
                    className="w-[100%] mt-[auto] text-gray-950 border-2 border-gray-900  text-[0.9em] hover:border-[rgba(0,0,0,0.7)] px-[0.4em] py-[0.4em] rounded-md"
                  >
                    Sign in
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Side_modal;
