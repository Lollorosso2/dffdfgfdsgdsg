export interface Recipe {
  id: number;
  title: string;
  summary: string;
  image: string;
  instructions: string;
  readyInMinutes: number;
  servings: number;
}