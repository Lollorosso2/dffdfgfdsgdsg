import { Recipe } from '../types/recipe';

const DEMO_RECIPES: Recipe[] = [
  {
    id: 1,
    title: 'Mediterraner Quinoa-Salat',
    summary: 'Ein leichter, gesunder Salat mit Quinoa, Tomaten, Gurken, Oliven und Feta-Käse.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    instructions: '1. Quinoa kochen\n2. Gemüse schneiden\n3. Alles vermischen\n4. Mit Olivenöl und Zitrone abschmecken',
    readyInMinutes: 25,
    servings: 4
  },
  {
    id: 2,
    title: 'Bunter Gemüse-Curry',
    summary: 'Cremiger Curry mit verschiedenem saisonalen Gemüse und Kokosmilch.',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
    instructions: '1. Gemüse anbraten\n2. Curry-Paste hinzufügen\n3. Mit Kokosmilch ablöschen\n4. 20 Minuten köcheln lassen',
    readyInMinutes: 35,
    servings: 4
  },
  {
    id: 3,
    title: 'Vollkorn-Spaghetti mit Pilzragout',
    summary: 'Herzhafte Vollkorn-Pasta mit einem cremigen Ragout aus verschiedenen Pilzsorten.',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
    instructions: '1. Pasta kochen\n2. Pilze putzen und schneiden\n3. Pilze anbraten\n4. Mit Sahne verfeinern',
    readyInMinutes: 30,
    servings: 2
  }
];

export function getRandomRecipe(): Recipe {
  const randomIndex = Math.floor(Math.random() * DEMO_RECIPES.length);
  return DEMO_RECIPES[randomIndex];
}