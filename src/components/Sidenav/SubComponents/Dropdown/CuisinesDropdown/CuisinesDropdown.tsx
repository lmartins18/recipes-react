import { useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";
import uniqid from "uniqid";
import { Dropdown } from "../Dropdown";
import { Cuisine } from "./Cuisine";

export const CuisinesDropDown = () => {
  const [cuisines, setCuisines] = useState<JSX.Element[]>([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((resp: { meals: { strArea: string }[] }) => {
        const cuisineElements = resp.meals.map(
          (cuisine: { strArea: string }) => (
            <Cuisine key={uniqid()} cuisine={cuisine.strArea} />
          )
        );
        setCuisines(cuisineElements);
      });
  }, []);
  return <Dropdown icon={BiWorld} title={"Cuisines"} items={cuisines} />;
};
