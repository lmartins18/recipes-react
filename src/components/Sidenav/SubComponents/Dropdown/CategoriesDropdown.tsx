import { useEffect, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { Dropdown } from "./Dropdown";
import { DropdownStringItem } from "./DropdownStringItem";


export const CategoriesDropDown = () => {
  const [categories, setCategories] = useState<JSX.Element[]>([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((resp: { meals: { strCategory: string }[] }) => {
        const categoriesElements = resp.meals.map(
          (category: { strCategory: string }) => (
            <DropdownStringItem item={category.strCategory} type={"category"} />
          )
        );
        setCategories(categoriesElements);
      });
  }, []);
  return (
    <Dropdown icon={BiCategoryAlt} title={"Categories"} items={categories} />
  );
};
