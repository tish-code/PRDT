import { Link, useNavigate } from "react-router-dom";
import { logo as Sign_in_logo } from "../../_components/navBar/_fragments";
import * as Yup from "yup";
import GoogleLogin from "../../_components/google-login";
import AuthLayout from "../../_components/auth-layout";
import { line_style } from "./styles";
import { Form, Formik } from "formik";
import CustomInputs from "../../_components/custom-inputs";
interface IFormValues {
  email: string;
  password: string;
}
function Sign_in() {
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
      <div className="flex flex-col items-center h-[100vh]">
        <div className="bg-white px-10 w-[400px] rounded-lg">
          <div className="flex flex-col">
            <Sign_in_logo styles="mx-[auto] mt-[2rem] text-[1.6em] text-[#2c55d4] font-big" />
            <p className="mx-[auto] text-[1.3em] my-[1.5rem]">
              Sign in to PRDT
            </p>
          </div>
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
                      placeholder={"Enter password"}
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
          <div className="flex mt-[1.5em] text-[0.9em]">
            <p>
              New to PRDT?{"  "}
              <Link className="text-primary-100" to="/sign-up">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Sign_in;
