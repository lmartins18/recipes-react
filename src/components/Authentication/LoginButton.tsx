import { useAuth0 } from "@auth0/auth0-react";
import { CiLogin } from "react-icons/ci";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="flex flex-1 gap-3 justify-between mr-auto w-full bg-white p-5 hover:bg-gray-50  dark:bg-slate-800 dark:hover:bg-slate-700"
      onClick={() => loginWithRedirect()}
    >
      <p>Log In</p>
      <CiLogin className="text-xl text-slate-600"/>
    </button>
  );
};

export default LoginButton;
