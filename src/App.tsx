import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./Home";
import { Layout } from "./components/Layout";
import { MealContextProvider } from "./contexts/recipe-context/MealContextProvider";
import { RecipesDialogContextProvider } from "./contexts/recipes-dialog-context";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeContextProvider } from "./contexts/theme-context";

function App() {
  return (
    <Auth0Provider
      domain="dev-mimozhlmeughfxfr.us.auth0.com"
      clientId="lerAjha7c5c173Ht7HRDpNOmbE5vjqt6"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ThemeContextProvider>
        <MealContextProvider>
          <RecipesDialogContextProvider>
            <QueryClientProvider client={new QueryClient()}>
              <Layout>
                <Home />
              </Layout>
            </QueryClientProvider>
          </RecipesDialogContextProvider>
        </MealContextProvider>
      </ThemeContextProvider>
    </Auth0Provider>
  );
}

export default App;
