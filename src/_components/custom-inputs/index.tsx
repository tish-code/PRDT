import { useState } from "react";
import { input_style } from "./styles";
function CustomInputs({ error, touched, label, type, ...props }: any) {
  const [showPassword, setShowPassword] = useState(false);
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="mb-[1.3rem] relative">
      <label className="text-gray-800">{label}</label>
      <input
        className={`${input_style} ${
          error && touched ? "border-red-500" : ""
        } `}
        type={showPassword ? "text" : type}
        {...props}
      />
      {props.name == "password" || props.name === "comfirm_password" ? (
        <input
          className="absolute translate-x-[50%] translate-y-[50%] top-[31.5px] right-[17px] cursor-pointer outline-none"
          type="checkbox"
          onChange={() => {
            handleShowPassword();
          }}
        />
      ) : (
        <></>
      )}

      {error && touched ? (
        <p className="text-red-500 text-[0.85rem]">{error}</p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CustomInputs;
