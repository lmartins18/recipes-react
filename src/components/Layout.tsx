import { ReactNode } from "react";
import { Header } from "./Header/Header";

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col flex-1 h-full w-full">
    <Header />
    {children}
  </div>
);
