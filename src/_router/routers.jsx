import Sign_in from "../_pages/sign-in";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterName } from "../types";
import MainLayout from "../_components/layout";
import App from "../App";
import Sign_up from "../_pages/sign-up";

// function Sign_up() {
//   const navigate = useNavigate();

//   return (
//     <div className="p-[15px]">
//       <h1>In the Works</h1>
//       <button
//         className=" text-primary-100 hover:border-b-[2px] hover:border-[#2c55d4]"
//         onClick={() => navigate(-1)}
//       >
//         click to go back
//       </button>
//     </div>
//   );
// }

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
