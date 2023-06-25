import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Title } from "../Title";
import { IngredientsDropdown } from "./SubComponents/Dropdown/IngredientsDropdown/IngredientsDropdown";
import {
  SearchBar,
  CuisinesDropDown,
  CategoriesDropDown,
} from "./SubComponents";

export const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  return (
    <>
      <button
        className="inline-block rounded bg-primary text-xs font-medium uppercase shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg "
        onClick={toggleNav}
      >
        <span className="[&>svg]:h-5 [&>svg]:w-5 ">
          {nav ? <RxCross1 /> : <GiHamburgerMenu />}
        </span>
      </button>
      {nav && (
        <nav
          id="sidenav-1"
          className="fixed left-0 top-0 !z-[1035] h-full w-60 -translate-x-full bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-slate-800 text-slate-600 dark:text-slate-200"
          data-te-sidenav-init
          data-te-sidenav-hidden="false"
          data-te-sidenav-position="absolute"
        >
          <div className="flex flex-col justify-between">
            <ul
              className="relative m-0 list-none px-1 divide-y-2 divide-dashed divide-slate-600 [&>*]:py-2"
              data-te-sidenav-menu-ref
            >
              <li>
                <CuisinesDropDown />
              </li>
              <li>
                <CategoriesDropDown />
              </li>
              <li>
                <IngredientsDropdown />
              </li>
              <li>
                <SearchBar />
              </li>
            </ul>
            <div className="absolute bottom-5  left-5">
              <Title color="slate" />
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
