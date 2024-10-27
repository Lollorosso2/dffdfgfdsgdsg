import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Clock, Users } from 'lucide-react';
import { getRandomRecipe } from '../services/recipes';
import type { Recipe } from '../types/recipe';

export const RecipeTile: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecipe = () => {
      setLoading(true);
      try {
        const newRecipe = getRandomRecipe();
        setRecipe(newRecipe);
      } catch (error) {
        console.error('Failed to load recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRecipe();
    // Refresh recipe every hour
    const interval = setInterval(loadRecipe, 3600000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !recipe) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-full h-32 bg-gray-200 rounded-lg mb-4"></div>
          <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
          <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="aspect-video rounded-lg overflow-hidden">
        <img 
          src={recipe.image}
          alt={recipe.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="text-orange-500" size={20} />
          <h3 className="font-semibold">{recipe.title}</h3>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">
          {recipe.summary}
        </p>
        <div className="flex gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{recipe.readyInMinutes} Min.</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{recipe.servings} Port.</span>
          </div>
        </div>
      </div>
    </div>
  );
};