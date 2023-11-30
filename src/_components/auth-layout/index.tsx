import { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center min-h-[100vh]">
      <div>{children}</div>
    </div>
  );
}

export default AuthLayout;
