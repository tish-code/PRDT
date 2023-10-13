import "./NavBar.css";
import Auth_modal from "./auth_modal";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="main">
      <div className="logo">PRDT</div>
      <div className="auth">
        <button
          className="btn"
          onClick={() => {
            handleOpen();
          }}
        >
          Join us
        </button>
        <button className="btn">Services</button>
        <button className="btn">Contact Us</button>
      </div>
      <Auth_modal handleClose={handleClose} open={open} />
    </div>
  );
}

export default NavBar;
