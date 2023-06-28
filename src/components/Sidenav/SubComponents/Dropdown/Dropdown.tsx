import { Menu } from "@headlessui/react";
import { IconType } from "react-icons";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import uniqid from "uniqid";

interface DropdownProps {
  icon: IconType;
  title: string;
  items: any[];
}

export const Dropdown = ({ icon: Icon, title, items }: DropdownProps) => {
  return (
    <>
      <Menu>
        <Menu.Button
          type="button"
          className="flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-controls="dropdown-example"
          data-collapse-toggle="dropdown-example"
        >
          {({ open }) => (
            <>
              <Icon />
              <span
                className="flex-1 ml-3 text-left whitespace-nowrap"
              >
                {title}
              </span>
              {open ? <FiChevronUp /> : <FiChevronDown />}
            </>
          )}
        </Menu.Button>
        <Menu.Items className="flex h-52 flex-col overflow-auto mx-1">
          {items.map((item) => (
            <Menu.Item key={uniqid()}>{item}</Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </>
  );
};
