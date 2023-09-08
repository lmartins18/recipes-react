import { createContext } from "react";

const cuisines: string[] = await fetch(
  "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
)
  .then((res) => res.json())
  .then((resp: { meals: { strArea: string }[] }) => {
    return resp.meals.map((s) => s.strArea);
  });
export const CuisinesContext = createContext(cuisines);
