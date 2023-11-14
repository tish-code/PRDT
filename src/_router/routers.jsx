import Sign_in from "../_pages/sign-in/Sign_in";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { RouterName } from "../types";
import MainLayout from "../_components/layout";
import App from "../App";

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
    children: [
      { path: RouterName.ROOT, element: <MainLayout />, children: [] },
      ...PUBLIC,
    ],
  },
]);

export default router;
