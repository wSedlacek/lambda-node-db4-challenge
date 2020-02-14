import { db } from '../../knexfile';

import { Ingredient } from '../models/Ingredient';
import { Recipe } from '../models/Recipe';
import { RecipeIngredient } from '../models/RecipesIngredient';

export const find = async () => await db<Ingredient>('ingredient');

export const findById = async (id: string | number) => {
  const [ingredient] = await db<Ingredient>('ingredients').where({ id });
  if (!ingredient) throw new Error('404');

  return ingredient;
};

export const findRecipes = async (ingredient_id: string | number) => {
  const recipes = await db<RecipeIngredient>('recipe-ingredients')
    .select<Recipe[]>('recipes.*')
    .from('recipe-ingredients')
    .join('recipes', { 'recipe-ingredients.recipe_id': 'recipes.id' })
    .where({ ingredient_id });

  return recipes;
};

export const add = async (body: Ingredient) => {
  const [id] = await db<Ingredient>('ingredients').insert(body);
  return await findById(id);
};

export const update = async (body: Ingredient, id: string | number) => {
  await findById(id);
  const count = await db<Ingredient>('ingredients')
    .where({ id })
    .update(body);
  if (!count) throw new Error('Did not update!');

  return await findById(body.id || id);
};

export const remove = async (id: string | number) => {
  const ingredient = await findById(id);
  const count = await db<Ingredient>('ingredients')
    .where({ id })
    .del();
  if (!count) throw new Error('Did not remove!');

  return ingredient;
};
