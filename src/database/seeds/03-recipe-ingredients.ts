import * as Knex from 'knex';
import { RecipeIngredient } from '../../models/RecipesIngredient';

export const seed = async (knex: Knex) => {
  await knex<RecipeIngredient>('recipe-ingredients').insert([
    {
      quantity: 2,
      recipe_id: 1,
      ingredient_id: 1,
    },
    {
      quantity: 0.1,
      recipe_id: 1,
      ingredient_id: 2,
    },
    {
      quantity: 3,
      recipe_id: 1,
      ingredient_id: 3,
    },
    {
      quantity: 1,
      recipe_id: 1,
      ingredient_id: 4,
    },
    {
      quantity: 2,
      recipe_id: 1,
      ingredient_id: 5,
    },
    {
      quantity: 2,
      recipe_id: 2,
      ingredient_id: 1,
    },
    {
      quantity: 0.1,
      recipe_id: 2,
      ingredient_id: 2,
    },
    {
      quantity: 3,
      recipe_id: 2,
      ingredient_id: 3,
    },
    {
      quantity: 1,
      recipe_id: 2,
      ingredient_id: 4,
    },
    {
      quantity: 2,
      recipe_id: 2,
      ingredient_id: 5,
    },
    {
      quantity: 2,
      recipe_id: 3,
      ingredient_id: 1,
    },
    {
      quantity: 0.1,
      recipe_id: 3,
      ingredient_id: 2,
    },
    {
      quantity: 3,
      recipe_id: 3,
      ingredient_id: 3,
    },
    {
      quantity: 1,
      recipe_id: 3,
      ingredient_id: 4,
    },
  ]);
};
