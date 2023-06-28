import { Home } from "./Home";
import { Layout } from "./components/Layout";
import { MealContextProvider } from "./contexts/recipe-context/MealContextProvider";
import { RecipesDialogContextProvider } from "./contexts/recipes-dialog-context";

function App() {
  return (
    <MealContextProvider>
      <RecipesDialogContextProvider>
        <Layout>
          <Home />
        </Layout>
      </RecipesDialogContextProvider>
    </MealContextProvider>
  );
}

export default App;
