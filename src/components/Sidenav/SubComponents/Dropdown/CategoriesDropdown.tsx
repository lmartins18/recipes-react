import { BiCategoryAlt } from "react-icons/bi";
import { Dropdown } from "./Dropdown";
import { useContext } from "react";

import { DropdownStringItem } from "./DropdownStringItem";
import uniqid from "uniqid";
import { CategoriesContext } from "../../../../contexts/categories-context";

export const CategoriesDropDown = () => {
  const categories = useContext(CategoriesContext);
  const categoriesElements = categories.map((category) => (
    <DropdownStringItem key={uniqid()} item={category} type={"category"} />
  ));
  return (
    <Dropdown
      icon={BiCategoryAlt}
      title={"Categories"}
      items={categoriesElements}
    />
  );
};