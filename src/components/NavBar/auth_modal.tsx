const image = require("../../assets/google.png");

interface Props {
  handleClose: () => void;
  open: any;
}
function Auth_modal({ handleClose, open }: Props) {
  const line_style = "border border-gray-200 flex-1 h-0";
  const input_style =
    "w-full rounded-md py-1.5 px-1.5 text-gray-900 outline-indigo-900 border border-gray-400 focus:outline-none focus:border-2 focus:border-[#2c55d4]  mb-[1.3rem]";
  return (
    <>
      {open && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
          className="flex flex-col items-center justify-center fixed bg-[rgba(0,0,0,0.3)] top-0 left-0 h-[100%] w-[100%] "
        >
          <div className="bg-white px-10 w-[50%] max-w-[550px] max-md:w-[70%] max-sm:w-[80%] max-[400px]:w-full rounded-lg">
            <div className="flex flex-col">
              <p className="mx-[auto] mt-[2rem] text-[1.6em] text-[#2c55d4] font-big">
                PRDT
              </p>
              <p className="mx-[auto] font-big text-[1.3em] my-[1rem]">
                Sign into your account
              </p>
            </div>
            <div className="">
              <input className={input_style} type="text" placeholder="Email" />
              <input
                className={input_style}
                type="text"
                placeholder="Password"
              />
              <button className="w-full bg-[#2c55d4] text-[#fff]  font-big rounded-md text-[1rem] py-[0.55rem] hover:opacity-[0.8]">
                Sign in
              </button>
              <div className="flex items-center justify-center my-[1.5rem] ">
                <div className={line_style}></div>
                <p className="mx-[1.5rem] flex-2">or</p>{" "}
                <div className={line_style}></div>
              </div>
              <button className="flex w-full items-center justify-center mb-[1rem] border border-gray-800 text-[1rem] text-gray-800 font-big rounded-md py-1 hover:opacity-[0.8]">
                <img
                  src={image}
                  alt="google logo"
                  className="mr-[0.4rem] w-[2rem]"
                />
                Sign in with google
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Auth_modal;
