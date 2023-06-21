import { useEffect, useState } from "react";
import { Ingredient, Meal } from "./Entities/Meal";
import { Header } from "./components/Header";


export const Home = () => {
  const [meal, setMeal] = useState<Meal>();

  useEffect(() => {
    // Get random recipe
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((resp) => resp.json())
      .then((res) => {
        res.meals.forEach((meal: any) => {
          console.log(res);
          // Get ingredients
          let ingredients: Ingredient[] = [];
          for (var prop in meal) {
            if (Object.prototype.hasOwnProperty.call(meal, prop)) {
              // Check if property is ingredient.
              if (prop.startsWith("strIngredient")) {
                if (!meal[`${prop}`]) continue;
                var ingredientNum = prop.replace("strIngredient", "");
                ingredients.push({
                  name: meal[`${prop}`],
                  measure: meal[`strMeasure${ingredientNum}`],
                });
              }
            }
          }
          setMeal({
            id: meal.idMeal,
            name: meal.strMeal,
            drinkAlternate: meal.strDrinkAlternate,
            category: meal.strCategory,
            area: meal.strArea,
            instructions: meal.strInstructions,
            mealThumb: meal.strMealThumb,
            tags: meal.strTags,
            youtube: meal.strYoutube,
            ingredients: ingredients,
            source: meal.strSource,
            imageSource: meal.strImageSource,
            creativeCommonsConfirmed: meal.strCreativeCommonsConfirmed,
            dateModified: meal.dateModified,
          });
        });
      });
  }, []);

  return (
    <>
      <Header />
      {/* Meal */}
      <h1 className="text-xl"> {meal?.name}</h1>
      {meal?.mealThumb && (
        <img
          className="w-[12rem] h-[12rem]"
          src={meal.mealThumb}
          alt="recipe photo"
        />
      )}
      <br />
      <ul>
        <>
          {meal?.ingredients?.map((ing) => (
            <li>
              {ing.name}: {ing.measure}
            </li>
          ))}
        </>
      </ul>
    </>
  );
};
