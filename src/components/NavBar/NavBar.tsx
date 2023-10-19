import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../UserProvider";

function NavBar() {
  const [openNavModal, setOpenNavModal] = useState(false);
  const { user } = useUser();
  console.log(user?.photoURL);

  return (
    <div className="flex items-center justify-between w-[80%] max-w-[750px] pb-[7px] mx-[auto] border-b-2 border-b-[#e9e9e9f5] max-md:w-full">
      {!user ? (
        <button className="hidden max-md:block border border-gray-900 py-[2px] px-[9px] rounded-md">
          Sign up
        </button>
      ) : (
        <> </>
      )}
      {!user ? (
        <div className="logo font-big text-[1.6em] max-md:mx-[auto] max-md:text-[1.4em]">
          <Link to="/">PRDT</Link>
        </div>
      ) : (
        <>
          <div className="hidden max-md:block rounded-full">
            <img
              className="w-[1.85em] rounded-full"
              src={`${user?.photoURL}`}
            ></img>
          </div>
          <div className="logo font-big text-[1.6em] max-md:mx-[auto] max-md:text-[1.4em]">
            <Link to="/">PRDT</Link>
          </div>

          <div className=" max-md:hidden rounded-full">
            <Link to="/profile">
              <img
                className="w-[1.9em] rounded-full"
                src={`${user?.photoURL}`}
              ></img>
            </Link>
          </div>
        </>
      )}
      <button
        className="icon hidden max-md:block text-[1.3em] "
        onClick={() => {
          openNavModal ? setOpenNavModal(false) : setOpenNavModal(true);
        }}
      >
        {openNavModal ? (
          <p className="transition-[5s]">&#10005;</p>
        ) : (
          <p>&#9776;</p>
        )}
      </button>
      {!user ? (
        <div className="max-md:hidden">
          <button
            className={`font-medium py-[2px] px-[9px] rounded-md mr-5 hover:text-[rgba(0,0,0,0.7)]`}
          >
            <Link to={`/sign-in`}>Sign in</Link>
          </button>
          <button
            className={`border border-gray-900 py-[2px] px-[9px] rounded-md font-medium hover:text-[rgba(0,0,0,0.7)] hover:border-[rgba(0,0,0,0.7)]`}
          >
            <Link to={`/sign-up`}>Sign up</Link>
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default NavBar;
