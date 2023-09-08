import { useEffect, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { RecipeModalItem } from "./RecipeDialogItem";
import { RxCross1 } from "react-icons/rx";
import uniqid from "uniqid";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Spinner } from "./Spinner";
import { apiParams } from "../contexts/apiParams";
import noData from "../assets/img/no-data.svg";
interface RecipesDialogParams {
  apiParams: apiParams;
  isOpen: boolean;
  toggleIsOpen: () => void;
}
interface recipe {
  mealName: string;
  mealImgSrc: string;
}
export const RecipesDialog = ({
  apiParams,
  isOpen,
  toggleIsOpen,
}: RecipesDialogParams) => {
  const [recipes, setRecipes] = useState<recipe[] | null>(null);
  const modalBody = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/${apiParams.type}.php?${apiParams.argument}`
    )
      .then((resp) => resp.json())
      // TODO this needs a type, same type as in Home component;
      .then((res: any) => {
        // Dry this
        let recipes: recipe[] = [];
        if (!res.meals) {
          setRecipes(null);
          return;
        }
        res.meals.forEach((meal: any) => {
          recipes.push({
            mealName: meal.strMeal.toString(),
            mealImgSrc: meal.strMealThumb.toString(),
          });
        });
        setRecipes(recipes);
        setLoading(false);
      });
  }, [apiParams]);
  const handleScroll = (e: any) => {
    setScroll(e.target.scrollTop > 500);
  };
  const returnToTop = () => {
    if (scroll && modalBody.current) modalBody.current.scrollTop = 0;
  };

  return (
    <Dialog open={isOpen} onClose={toggleIsOpen} className="relative z-50">
      <div
        tabIndex={-1}
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-slate-500/50"
      >
        <div className="z-10 relative w-full max-w-2xl h-full bg-slate-100 m-auto overflow-auto">
          {/* <!-- Modal content --> */}
          <div className="relative flex flex-1 flex-col bg-white rounded-lg shadow dark:bg-gray-700 h-full">
            {/* <!-- Modal header --> */}
            <div className="sticky top-0 flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600 bg-inherit">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Recipes
              </h3>
              <button
                type="button"
                className="text-slate-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={toggleIsOpen}
              >
                <RxCross1 />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            {recipes === null ? (
              <div className="flex flex-col gap-6 w-44 mx-auto mt-32 text-center text-2xl">
                <img src={noData} alt="no data available" />
                <p>No Recipes Found.</p>
              </div>
            ) : loading ? (
              <div className="m-auto">
                <Spinner />
              </div>
            ) : (
              <div
                id="modal-body"
                ref={modalBody}
                onScroll={handleScroll}
                className="grid grid-flow-row sm:grid-cols-3 p-6 overflow-auto flex-wrap h-full scroll-smooth mb-1"
              >
                {recipes.map((recipe) => (
                  <RecipeModalItem
                    mealName={recipe.mealName}
                    mealImgSrc={recipe.mealImgSrc}
                    key={uniqid()}
                  />
                ))}
              </div>
            )}

            <div
              id="scroll-to-top-button-container"
              className={`absolute bottom-2 right-4 text-3xl ${
                !scroll && " hidden"
              }`}
            >
              <button
                onClick={returnToTop}
                className="dark:text-slate-500 dark:hover:text-slate-200"
              >
                <FaArrowAltCircleUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
