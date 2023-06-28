import { createContext } from "react";
import { Meal } from "../../Entities/Meal";

interface MealContextType {
  currentMeal: Meal | undefined;
  changeCurrentMeal: (meal: Meal | undefined) => void;
}

const defaultValue: MealContextType = {
  currentMeal: undefined,
  changeCurrentMeal: (meal: Meal | undefined) => {
    meal;
  },
};

export const MealContext = createContext(defaultValue);
