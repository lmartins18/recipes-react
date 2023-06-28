import uniqid from "uniqid";
import { MealIngredient } from "../Entities/Meal";

export const IngredientsList = ({
  ingredients,
}: {
  ingredients: MealIngredient[];
}) => (
  <ul className="p-6 sm:p-0 sm:px-10 list-disc">
    <>
      {ingredients.map((ingredient) => (
        <li key={uniqid()}>
          {ingredient.name}: {ingredient.measure}
        </li>
      ))}
    </>
  </ul>
);
