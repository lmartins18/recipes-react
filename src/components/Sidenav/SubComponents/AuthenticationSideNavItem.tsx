import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../Authentication/LoginButton.tsx";
import { CiLogout } from "react-icons/ci";
import { Spinner } from "../../Spinner";

export const AuthenticationSideNavItem = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuth0();

  const LogoutButton = () => (
    <button
      className="text-slate-600"
      onClick={() => logout({ openUrl: false })}
    >
      <CiLogout className="text-xl font-bold"/>
    </button>
  );

  if (isLoading)
    return <Spinner />;

  if (!isAuthenticated) return <LoginButton />;
  else
    return (
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 w-full">

          <p className="flex items-center gap-2 p-5 bg-white hover:bg-gray-50 dark:bg-slate-800 dark:hover:bg-slate-700">
            <img
              className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-400"
              alt="Man"
              src={
                user?.picture ??
                "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
            />
            <div>
              <p className="text-xs">
                <strong className="block font-medium">{user?.name}</strong>
                <span>{user?.email}</span>
              </p>
            </div>
            <LogoutButton />
          </p>
      </div>
    );
};
