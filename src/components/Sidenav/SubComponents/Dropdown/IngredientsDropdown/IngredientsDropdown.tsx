import { useContext } from "react";
import { FaBowlFood } from "react-icons/fa6";
import { Dropdown } from "../Dropdown";
import { DropdownStringItem } from "../DropdownStringItem";
import { IngredientsContext } from "../../../../../contexts/ingredients-context";
import uniqid from "uniqid";

export const IngredientsDropdown = () => {
  const ingredients = useContext(IngredientsContext);
  const ingredientElements = ingredients.map((ingredient) => (
    <DropdownStringItem key={uniqid()} item={ingredient} type={"ingredient"} />
  ));
  return (
    <Dropdown
      icon={FaBowlFood}
      title={"Ingredients"}
      items={ingredientElements}
    />
  );
};
