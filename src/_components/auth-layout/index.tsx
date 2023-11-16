import { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center h-[100vh] bg-gray-700">
      <div>{children}</div>
    </div>
  );
}

export default AuthLayout;
