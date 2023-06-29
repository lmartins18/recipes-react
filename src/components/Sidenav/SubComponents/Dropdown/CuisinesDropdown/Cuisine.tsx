import { useContext } from "react";
import { RecipesDialogContext } from "../../../../../contexts/recipes-dialog-context/RecipesDialogContextProvider";

export const Cuisine = ({ cuisine }: { cuisine: string }) => {
  const { toggleIsOpen, changeApiParams: changeFilter } =
    useContext(RecipesDialogContext);
  const imgUrl = new URL(
    `../../../../../assets/img/flags/${cuisine}.svg`,
    import.meta.url
  ).href;
  const fetchRecipes = () => {
    // Open modal.
    toggleIsOpen();
    // Fetch recipes.
    changeFilter({ type: "filter", argument: `a=${cuisine}` });
  };
  return (
    <a
      className={`flex gap-3 [&>*]:my-auto hover:bg-slate-200 hover:dark:bg-slate-600 hover:cursor-pointer px-2`}
      onClick={fetchRecipes}
    >
      <img
        src={imgUrl}
        alt={cuisine + " flag"}
        className="h-10 w-10"
        loading="lazy"
      />
      <p>{cuisine}</p>
    </a>
  );
};
