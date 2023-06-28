import { useEffect, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { Dropdown } from "../Dropdown";
import { DropdownStringItem } from "../DropdownStringItem";
import { Ingredient } from "../../../../../Entities/Meal";

export const IngredientsDropdown = () => {
  const [ingredients, setingredients] = useState<JSX.Element[]>([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((res) => res.json())
      .then((resp: { meals: Ingredient[] }) => {
        const ingredients = resp.meals.map((ingredient: Ingredient) => (
          <DropdownStringItem item={ingredient.strIngredient} />
        ));
        setingredients(ingredients);
      });
  }, []);
  return (
    <Dropdown
      icon={BiCategoryAlt}
      title={"Ingredients"}
      items={ingredients}
    />
  );
};
