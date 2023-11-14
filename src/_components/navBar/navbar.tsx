import { useState } from "react";
import { useUser } from "../../UserProvider";
import Side_modal from "./_sideModal";
import {
  logo as Nav_logo,
  FullWidthAuthBtns,
  OpenSideModalBtn,
} from "./_fragments";
import { Link } from "react-router-dom";

function NavBar() {
  const [openNavSideModal, setOpenSideModal] = useState(false);
  const handleClose = () => setOpenSideModal(false);
  const handleOpen = () => setOpenSideModal(true);
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between pb-[7px] mx-[auto] border-b-2 border-b-[#e9e9e9f5] max-md:w-full">
      {!user?.accessToken && (
        <button className="hidden max-md:block border border-gray-900 py-[2px] px-[9px] rounded-md">
          <Link to="/sign-up">Sign up</Link>
        </button>
      )}
      {!user?.accessToken ? (
        <Nav_logo styles="logo font-big text-[1.6em] max-md:mx-[auto] max-md:text-[1.4em]" />
      ) : (
        <>
          <div className="hidden max-md:block rounded-full">
            <img
              className="w-[1.85em] rounded-full"
              src={`${user?.photoURL}`}
            ></img>
          </div>
          <Nav_logo styles="logo font-big text-[1.6em] max-md:mx-[auto] max-md:text-[1.4em]" />

          <div className=" max-md:hidden rounded-full" onClick={handleOpen}>
            <img
              className="w-[2.1em] rounded-full cursor-pointer"
              src={`${user?.photoURL}`}
            ></img>
          </div>
        </>
      )}
      <OpenSideModalBtn
        setOpenSideModal={setOpenSideModal}
        openNavSideModal={openNavSideModal}
      />
      {!user?.accessToken && <FullWidthAuthBtns />}
      <Side_modal open={openNavSideModal} handleClose={handleClose} />
    </div>
  );
}

export default NavBar;
