import * as Yup from "yup";
import GoogleLogin from "../../_components/google-login";
import AuthLayout from "../../_components/auth-layout";
import { line_style } from "./styles";
import { Form, Formik } from "formik";
import CustomInputs from "../../_components/custom-inputs";
import { Auth_Footer, Auth_Header } from "../sign-in/_fragments";
interface IFormValues {
  email: string;
  password: string;
}
function Sign_up() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("firstname is required"),
    email: Yup.string().email("Invalid email").required("email is required"),
    password: Yup.string().required("Password is required"),
    comfirm_password: Yup.string().oneOf(
      [Yup.ref("password"), ""],
      "Password must match"
    ),
  });
  const initialValues = {
    name: "",
    email: "",
    password: "",
    comfirm_password: "",
  };
  const handleSubmit = (values: IFormValues) => {
    console.log(values);
  };

  return (
    <AuthLayout>
      <div className="bg-white px-10 w-[400px] mt-[40px] pb-[30px]">
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
                    error={errors.name}
                    label={"Name"}
                    type={"text"}
                    name={"name"}
                    placeholder={"John Doe"}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.name}
                  />
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
                  <CustomInputs
                    error={errors.comfirm_password}
                    label={"Comfirm Password"}
                    type={"password"}
                    name={"comfirm_password"}
                    placeholder={"Comfirm password"}
                    value={values.comfirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.comfirm_password}
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#2c55d4] text-[#fff]  rounded-md text-[1rem] py-[0.4em] hover:opacity-[0.8]"
                  >
                    Sign up
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

export default Sign_up;
