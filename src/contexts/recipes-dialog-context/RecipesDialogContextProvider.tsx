import { useState, FC, ReactNode, createContext } from "react";
import { RecipesDialog } from "../../components/RecipesDialog";
import { apiParams } from "../apiParams";

interface RecipesDialogContextProps {
  changeApiParams: (param: apiParams) => void;
  isOpen: boolean;
  // TODO: maybe change the nemae of that to toggleModal.
  toggleIsOpen: () => void;
}

export const RecipesDialogContext = createContext<RecipesDialogContextProps>({
  changeApiParams: (param: apiParams) => {
    param;
  },
  isOpen: false,
  toggleIsOpen: () => {},
});

export const RecipesDialogContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiParams, setApiParams] = useState<apiParams>({
    type: "filter",
    argument: "",
  });

  const toggleIsOpen = () => setIsOpen(!isOpen);
  // TODO: instead of just assigning a new value, accept 2 arguments, on for type "cusine | ingredient | category" and another for the value.
  const changeApiParams = (param: apiParams) => setApiParams(param);

  return (
    <RecipesDialogContext.Provider
      value={{ toggleIsOpen, isOpen, changeApiParams: changeApiParams }}
    >
      {children}
      {isOpen && (
        <RecipesDialog
          apiParams={apiParams}
          toggleIsOpen={toggleIsOpen}
          isOpen={isOpen}
        />
      )}
    </RecipesDialogContext.Provider>
  );
};
