import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../UserProvider";
import Side_modal from "./side_modal";

function NavBar() {
  const [openNavSideModal, setOpenSidModal] = useState(false);
  const handleClose = () => setOpenSidModal(false);
  const handleOpen = () => setOpenSidModal(true);
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between pb-[7px] mx-[auto] border-b-2 border-b-[#e9e9e9f5] max-md:w-full">
      {!user?.accessToken ? (
        <button className="hidden max-md:block border border-gray-900 py-[2px] px-[9px] rounded-md">
          <Link to="/sign-in">Sign up</Link>
        </button>
      ) : (
        <> </>
      )}
      {!user?.accessToken ? (
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

          <div className=" max-md:hidden rounded-full" onClick={handleOpen}>
            <img
              className="w-[2.1em] rounded-full cursor-pointer"
              src={`${user?.photoURL}`}
            ></img>
          </div>
        </>
      )}
      <button
        className="icon hidden max-md:block text-[1.3em] "
        onClick={() => {
          openNavSideModal ? setOpenSidModal(false) : setOpenSidModal(true);
        }}
      >
        {openNavSideModal ? (
          <p className="transition-[5s]">&#10005;</p>
        ) : (
          <p>&#9776;</p>
        )}
      </button>
      {!user?.accessToken ? (
        <div className="max-md:hidden">
          <button
            className={`font-medium py-[2px] px-[9px] rounded-md mr-5 hover:text-[rgba(0,0,0,0.7)]`}
          >
            <Link to={`/sign-in`}>Sign in</Link>
          </button>
          <button
            className={`border border-gray-900 py-[2px] px-[9px] rounded-md font-medium hover:text-[rgba(0,0,0,0.7)] hover:border-[rgba(0,0,0,0.7)]`}
          >
            <Link to={`/sign-in`}>Sign up</Link>
          </button>
        </div>
      ) : (
        <></>
      )}
      <Side_modal open={openNavSideModal} handleClose={handleClose} />
    </div>
  );
}

export default NavBar;
