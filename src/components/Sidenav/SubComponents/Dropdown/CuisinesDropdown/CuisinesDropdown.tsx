import { BiWorld } from "react-icons/bi";
import uniqid from "uniqid";
import { Dropdown } from "../Dropdown";
import { Cuisine } from "./Cuisine";
import { useContext } from "react";
import { CuisinesContext } from "../../../../../contexts/cuisines-context";

export const CuisinesDropDown = () => {
  const cuisines = useContext(CuisinesContext);
  const cuisineElements = cuisines.map(cuisine => (
    <Cuisine key={uniqid()} cuisine={cuisine} />
  ));
  return <Dropdown icon={BiWorld} title={"Cuisines"} items={cuisineElements} />;
};
