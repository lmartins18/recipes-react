import { MealIngredient } from ".";

export interface Meal {
  id: number;
  name: string | null;
  drinkAlternate?: string | null;
  category: string | null;
  area: string | null;
  instructions: string | null;
  mealThumb: string | null;
  tags: string | null;
  youtube: string | null;
  ingredients: MealIngredient[] | null;
  source: string | null;
  imageSource: string | null;
  creativeCommonsConfirmed: string | null;
  dateModified: string | null;
}
