import { createContext } from "react";

const categories: string[] = await fetch(
  "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
).then((res) =>
  res.json().then((resp: { meals: { strCategory: string }[] }) => {
    return resp.meals.map((s) => s.strCategory);
  })
);
export const CategoriesContext = createContext(categories);
