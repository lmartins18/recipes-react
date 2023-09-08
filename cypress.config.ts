import { defineConfig } from "cypress";

const devBaseUrl =
  process.env.DEV_BASE_URL ?? "http://localhost:5173/recipes-react/";
const ghPagesBaseUrl = process.env.GH_PAGES_BASE_URL ?? "https://lmartins18.github.io/recipes-react/";
// Check if running in GitHub Pages environment
const isGitHubPagesEnv = Boolean(process.env.GH_PAGES);

export default defineConfig({
  e2e: {
    baseUrl: isGitHubPagesEnv ? ghPagesBaseUrl : devBaseUrl,
  },
});
