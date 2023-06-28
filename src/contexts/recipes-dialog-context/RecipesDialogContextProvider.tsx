import { useState, FC, ReactNode, createContext } from "react";
import { RecipesDialog } from "../../components/RecipesDialog";

interface RecipesDialogContextProps {
  changeFilter: (newFilter: string) => void;
  isOpen: boolean;
  // TODO: maybe change the nemae of that to toggleModal.
  toggleIsOpen: () => void;
}

export const RecipesDialogContext = createContext<RecipesDialogContextProps>({
  changeFilter: () => {},
  isOpen: false,
  toggleIsOpen: () => {},
});

export const RecipesDialogContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const toggleIsOpen = () => setIsOpen(!isOpen);
  // TODO: instead of just assigning a new value, accept 2 arguments, on for type "cusine | ingredient | category" and another for the value.
  const changeFilter = (newFilter: string) => setFilter(newFilter);

  return (
    <RecipesDialogContext.Provider
      value={{ toggleIsOpen, isOpen, changeFilter }}
    >
      {children}
      {isOpen && (
        <RecipesDialog
          filter={filter}
          toggleIsOpen={toggleIsOpen}
          isOpen={isOpen}
        />
      )}
    </RecipesDialogContext.Provider>
  );
};
