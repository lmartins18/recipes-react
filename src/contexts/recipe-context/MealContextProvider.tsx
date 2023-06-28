import { useState, FC, ReactNode } from "react";
import { MealContext } from ".";
import { Meal } from "../../Entities/Meal";

export const MealContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [meal, setMeal] = useState<Meal>();
  const changeCurrentMeal = (meal: Meal | undefined) => {
    setMeal(meal);
  };
  return (
    <MealContext.Provider value={{ currentMeal: meal, changeCurrentMeal }}>
      {children}
    </MealContext.Provider>
  );
};
