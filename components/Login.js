import Image from "next/image";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center ">
      <Image
        src="/harbor.png"
        alt="harbor_icon"
        height="100"
        width="100"
        className="rounded-full"
      />
      <a
        onClick={signIn}
        className="px-20 py-4 z-10 text-xl cursor-pointer mt-16
      bg-blue-500 rounded-md text-white"
      >
        Login
      </a>
    </div>
  );
};
export default Login;
