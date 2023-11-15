import { input_style } from "./styles";
function CustomInputs({ error, touched, label, ...props }: any) {
  return (
    <div className="mb-[1.3rem]">
      <label className="text-gray-800">
        {label}
        <span className="text-red-500">*</span>
      </label>
      <input
        className={`${input_style} ${
          error && touched ? "border-red-500" : ""
        } `}
        {...props}
      />
      {error && touched ? (
        <p className="text-red-500 text-[0.85rem]">{error}</p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CustomInputs;
