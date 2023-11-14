import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

export function logo(props: { styles: string }) {
  return (
    <div className={props.styles}>
      <Link to="/">PRDT</Link>
    </div>
  );
}

export function FullWidthAuthBtns() {
  return (
    <div className="max-md:hidden">
      <button className="font-medium py-[2px] px-[9px] rounded-md mr-5 hover:text-[rgba(0,0,0,0.7)]">
        <Link to="/sign-in">Sign in</Link>
      </button>
      <button className="border border-gray-900 py-[2px] px-[9px] rounded-md font-medium hover:text-[rgba(0,0,0,0.7)] hover:border-[rgba(0,0,0,0.7)]">
        <Link to="/sign-up">Sign up</Link>
      </button>
    </div>
  );
}

type TOpenSideModalBtn = {
  setOpenSideModal: Dispatch<SetStateAction<boolean>>;
  openNavSideModal: Boolean;
};
export function OpenSideModalBtn({
  setOpenSideModal,
  openNavSideModal,
}: TOpenSideModalBtn) {
  return (
    <button
      className="icon hidden max-md:block text-[1.3em] "
      onClick={() => {
        setOpenSideModal(!openNavSideModal);
      }}
    >
      {openNavSideModal ? (
        <p className="transition-[5s]">&#10005;</p>
      ) : (
        <p>&#9776;</p>
      )}
    </button>
  );
}
