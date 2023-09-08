import { useContext, useEffect } from "react";
import { MealIngredient } from "./Entities/Meal";
import { Recipe } from "./components/Recipe";
import { MealContext } from "./contexts/recipe-context";
import { useQuery } from "react-query";

export const Home = () => {
  const { currentMeal, changeCurrentMeal } = useContext(MealContext);
  // Get data for dropdowns.
  const getData = async () => {
    const cuisines = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    ).then((res) => res.json());

    const ingredients = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    ).then((res) => res.json());

    return { cuisines, ingredients };
  }

  const {} = useQuery(
    "dropdownData",
    getData,
    { staleTime: Infinity }
  );

  useEffect(() => {
    if (!currentMeal) {
      // Get random recipe
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((resp) => resp.json())
        .then((res) => {
          // TODO dry this
          res.meals.forEach((meal: any) => {
            // Get ingredients
            let ingredients: MealIngredient[] = [];
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
            // TODO: dry this.
            changeCurrentMeal({
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
    }
  }, []);

  return <Recipe meal={currentMeal} />;
};
