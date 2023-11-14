import App from "../App";
import Sign_in from "../_pages/sign-in/Sign_in";
import { createBrowserRouter } from "react-router-dom";
import { RouterName } from "../types";

const PUBLIC = [
  {
    path: RouterName.SIGN_IN,
    element: <Sign_in />,
  },
];

const router = createBrowserRouter([
  {
    path: RouterName.ROOT,
    element: <App />,
    children: [...PUBLIC],
  },
]);

export default router;
