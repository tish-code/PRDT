// import "./NavBar.css";
import Auth_modal from "./auth_modal";
import { useState } from "react";

function NavBar() {
  const [openNavModal, setOpenNavModal] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const handleOpen = () => setOpenAuthModal(true);
  const handleClose = () => setOpenAuthModal(false);

  //styles
  const btn_styles =
    "btn h-[100%] bg-none rounded-[999em] py-[10px] px-[20px] text-[0.9em] transition-[0.5s] hover:bg-[#2c55d4] hover:text-[#ffffff] ";
  return (
    <div className="flex items-center justify-between w-[80%] max-w-[750px] pb-[7px] mx-[auto] border-b-2 border-b-[#e9e9e9f5] max-md:w-full">
      <button className="hidden max-md:block border border-gray-900 py-[2px] px-[9px] rounded-md">
        Sign up
      </button>
      <div className="logo font-big text-[1.6em] max-md:mx-[auto] max-md:text-[1.4em]">
        PRDT
      </div>
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
      <div className="auth rounded-[999em] bg-[#e9e9e9f5] h-[80%] max-md:hidden">
        <button
          className={btn_styles}
          onClick={() => {
            handleOpen();
          }}
        >
          Join us
        </button>
        <button className={btn_styles}>Services</button>
        <button className={btn_styles}>Contact Us</button>
      </div>
      <Auth_modal handleClose={handleClose} open={openAuthModal} />
    </div>
  );
}

export default NavBar;
