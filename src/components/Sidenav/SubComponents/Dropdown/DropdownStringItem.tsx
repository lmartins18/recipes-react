import { useContext } from "react";
import { RecipesDialogContext } from "../../../../contexts/recipes-dialog-context/RecipesDialogContextProvider";

interface DropdownStringItemProps {
  item: string;
  type: "ingredient" | "category";
}

export const DropdownStringItem = ({ item, type }: DropdownStringItemProps) => {
  const { toggleIsOpen, changeApiParams: changeFilter } =
    useContext(RecipesDialogContext);
  const fetchRecipes = () => {
    const filter = type === "ingredient" ? "i" : "c";
    // Open modal.
    toggleIsOpen();
    // Fetch recipes.
    changeFilter({ type: "filter", argument: `${filter}=${item}` });
  };
  return (
    <a
      className={`flex gap-3 [&>*]:my-auto hover:bg-slate-200 hover:dark:bg-slate-600 p-2 cursor-pointer`}
      onClick={fetchRecipes}
    >
      <p>{item}</p>
    </a>
  );
};
