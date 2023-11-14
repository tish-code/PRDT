import Sign_in from "../_pages/sign-in/Sign_in";
import { Navigate, createBrowserRouter, Link } from "react-router-dom";
import { RouterName } from "../types";
import MainLayout from "../_components/layout";
import App from "../App";

function Sign_up() {
  return (
    <div>
      <h1>In the Works</h1>
      <Link
        className=" text-primary-100 hover:border-b-[2px] hover:border-[#2c55d4]"
        to={RouterName.ROOT}
      >
        back to home
      </Link>
    </div>
  );
}

const PUBLIC = [
  {
    path: RouterName.SIGN_IN,
    element: <Sign_in />,
  },
  {
    path: RouterName.SIGN_UP,
    element: <Sign_up />,
  },
];

const router = createBrowserRouter([
  {
    path: RouterName.ROOT,
    element: <App />,
    children: [
      { path: RouterName.ROOT, element: <MainLayout />, children: [] },
      ...PUBLIC,
    ],
  },
]);

export default router;
