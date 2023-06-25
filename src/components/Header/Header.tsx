import { ThemeToggleButton } from "./SubComponents";
import { Sidenav } from "../Sidenav";
import { Title } from "../Title";

export const Header = () => (
  <>
    <nav className="sticky top-0 border-gray-200 bg-gray-900 text-slate-300">
      <div className="flex flex-wrap justify-between p-4">
        <Title />
        <div className="flex gap-6 items-center justify-between" id="navbar-search">
          <ThemeToggleButton />
          <Sidenav />
        </div>
      </div>
    </nav>
  </>
);
