import { useEffect, useState } from "react";
import { MealIngredient, Meal } from "./Entities/Meal";
import { Header } from "./components/Header/Header";
import { GiChefToque } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import uniqid from "uniqid";

// TODO change the type
const Hr = ({ icon }: { icon: any }) => (
  <div className="flex items-center justify-center w-full py-6">
    <hr className="w-1/2 border-0 border-t-2 border-gray-300" />
    <div className="px-4">{icon}</div>
    <hr className="w-1/2 border-0 border-t-2 border-gray-300" />
  </div>
);

export const Home = () => {
  const [meal, setMeal] = useState<Meal>();

  useEffect(() => {
    // Get random recipe
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((resp) => resp.json())
      .then((res) => {
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

  const IngredientsList = () => (
    <ul className="p-0 sm:px-10 list-disc">
      <>
        {meal?.ingredients?.map((ingredient) => (
          <li key={uniqid()}>
            {ingredient.name}: {ingredient.measure}
          </li>
        ))}
      </>
    </ul>
  );

  return (
    <>
      <Header />
      {/* Meal */}
      <div className="p-6 bg-inherit dark:bg-inherit overflow-auto">
        <h1 className="text-xl text-inherit dark:text-inherit pb-6 underline underline-offset-8 text-center sm:text-start">
          {meal?.name}
        </h1>
        <div className="flex flex-col overflow-auto">
          <div className="flex flex-col sm:flex-row whitespace-pre-wrap break-words overflow-auto">
            <div id="container">
              {meal?.mealThumb && (
                <img
                  className="w-[24rem] h-[24rem] border-double border-8 border-slate-900 dark:border-slate-100 rounded object-fill"
                  src={meal.mealThumb}
                  alt={`${meal.name} picture`}
                />
              )}
              <div className="flex pt-6 px-4 justify-between">
                <span className="inline-flex gap-1">
                  <p className="font-bold">Category:</p>
                  <p>{meal?.category}</p>
                </span>
                <span className="inline-flex gap-1">
                  <p className="font-bold">Cuisine:</p>
                  <p>{meal?.area}</p>
                </span>
              </div>
            </div>
            <IngredientsList />
          </div>
          <Hr icon={<GiChefToque />} />
          <p>{meal?.instructions}</p>
        </div>
        {meal?.youtube && (
          <>
            <Hr icon={<BiCameraMovie />} />
            <div className="m-6 h-[85vh]">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${meal.youtube.slice(
                  -11
                )}?wmode=transparent`}
                title="Meal Video"
                allowFullScreen
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
