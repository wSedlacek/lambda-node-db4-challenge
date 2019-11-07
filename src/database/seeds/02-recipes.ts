import * as Knex from 'knex';
import { Recipe } from '../../models/Recipe';

export const seed = async (knex: Knex) => {
  await knex<Recipe>('recipes').insert([
    {
      name: 'Spaghetti',
      instructions: `1) Mix flour, eggs and salt in a mixer for 10 minutes.
      2) Put in a bowl and let rest for 30 minutes
      3) Cut into strings
      4) Boil until desired firmness
      5) Add Tomato Sauce`,
    },
    {
      name: 'Ravioli',
      instructions: `1) Mix flour, eggs and salt in a mixer for 10 minutes.
      2) Put in a bowl and let rest for 30 minutes
      3) Cut rectangles or squares
      4) Stuff with cheese and pinch the edges closed folding the cheese inside.
      5)  Boil until desired firmness
      6) Add Tomato Sauce`,
    },
    {
      name: 'Perogies',
      instructions: `1) Mix flour, eggs and salt in a mixer for 10 minutes.
      2) Put in a bowl and let rest for 30 minutes
      3) Cut rectangles or squares
      4) Stuff with cheese and pinch the edges closed folding the cheese inside.
      5) Fry in a pan on medium heat until golden brown`,
    },
  ]);
};
