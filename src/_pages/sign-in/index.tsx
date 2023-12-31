import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import GoogleLogin from "../../_components/google-login";
import AuthLayout from "../../_components/auth-layout";
import { line_style } from "./styles";
import { Form, Formik } from "formik";
import CustomInputs from "../../_components/custom-inputs";
import { Auth_Footer, Auth_Header } from "./_fragments";
interface IFormValues {
  email: string;
  password: string;
}
function Sign_in() {
  const { pathname } = useLocation();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("email is required"),
    password: Yup.string().required("Password is required"),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values: IFormValues) => {
    console.log(values);
  };

  return (
    <AuthLayout>
      <div className="bg-white px-10 w-[400px]  mt-[100px] pb-[30px]">
        <Auth_Header />
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ handleChange, values, handleBlur, errors, touched }) => {
              return (
                <Form>
                  <CustomInputs
                    error={errors.email}
                    label={"Email"}
                    type={"text"}
                    name={"email"}
                    placeholder={"name@email.com"}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.email}
                  />
                  <CustomInputs
                    error={errors.password}
                    label={"Password"}
                    type={"password"}
                    name={"password"}
                    placeholder={"Enter password"}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.password}
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#2c55d4] text-[#fff]  rounded-md text-[1rem] py-[0.4em] hover:opacity-[0.8]"
                  >
                    Sign in
                  </button>
                </Form>
              );
            }}
          </Formik>
          <div className="flex items-center justify-center my-[1.2rem] ">
            <div className={line_style}></div>
            <p className="mx-[1.5rem] flex-2">or</p>{" "}
            <div className={line_style}></div>
          </div>
          <GoogleLogin />
        </div>
        <Auth_Footer />
      </div>
    </AuthLayout>
  );
}

export default Sign_in;
