import { db } from '../../knexfile';
import { Recipe } from '../models/Recipe';
import { RecipeIngredient } from '../models/RecipesIngredient';
import { Ingredient } from '../models/Ingredient';

export const find = async () => {
  const recipes = await db<Recipe>('recipes');
  recipes.forEach((recipe) => delete recipe.instructions);
  return recipes;
};

export const findById = async (id: string | number) => {
  const [recipe] = await db<Recipe>('recipes').where({ id });
  if (!recipe) throw new Error('404');
  return recipe;
};

export const findIngredients = async (recipe_id: string | number) => {
  const ingredients = await db<RecipeIngredient>('recipe-ingredients')
    .select<Ingredient[]>(['ingredients.*', 'quantity'])
    .from('recipe-ingredients')
    .join('ingredients', { 'recipe-ingredients.ingredient_id': 'ingredients.id' })
    .where({ recipe_id });

  return ingredients;
};

export const add = async (body: Recipe) => {
  const [id] = await db<Recipe>('recipes').insert(body);
  return await findById(id);
};

export const update = async (body: Recipe, id: string | number) => {
  await findById(id);
  const count = await db<Recipe>('recipes')
    .where({ id })
    .update(body);
  if (!count) throw new Error('Did not update!');

  return await findById(body.id || id);
};

export const remove = async (id: string | number) => {
  const recipe = await findById(id);
  const count = await db<Recipe>('recipes')
    .where({ id })
    .del();
  if (!count) throw new Error('Did not remove!');

  return recipe;
};
