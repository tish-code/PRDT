import { Link, useLocation } from "react-router-dom";
import { logo as Sign_in_logo } from "../../_components/navBar/_fragments";
import { RouterName } from "../../types";
export function Auth_Header() {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col">
      <Sign_in_logo styles="mx-[auto] mt-[2rem] text-[1.6em] text-[#2c55d4] font-big" />
      <p className="mx-[auto] text-[1.3em] my-[1.5rem]">
        {pathname === RouterName.SIGN_IN ? "Welcome back" : "Create an account"}
      </p>
    </div>
  );
}

export function Auth_Footer() {
  const { pathname } = useLocation();
  return (
    <div className="flex mt-[1.5em] text-[0.9em]">
      {pathname === RouterName.SIGN_IN ? (
        <p>
          New to PRDT?{" "}
          <Link className="text-primary-100" to={RouterName.SIGN_UP}>
            Create an account
          </Link>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <Link className="text-primary-100" to={RouterName.SIGN_IN}>
            Login
          </Link>
        </p>
      )}
    </div>
  );
}
