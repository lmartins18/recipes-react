import { createContext } from "react";

const Ingredients: string[] = await fetch(
  "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
).then((res) =>
  res.json().then((resp: { meals: { strIngredient: string }[] }) => {
    return resp.meals.map((s) => s.strIngredient);
  })
);
export const IngredientsContext = createContext(Ingredients);
