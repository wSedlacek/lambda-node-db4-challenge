import * as Knex from 'knex';
import { Ingredient } from '../../models/Ingredient';

export const seed = async (knex: Knex) => {
  await knex<Ingredient>('ingredients').insert([
    {
      name: 'Flour',
    },
    {
      name: 'Salt',
    },
    {
      name: 'Eggs',
    },
    {
      name: 'Cheese',
    },
    {
      name: 'Tomato Sauce',
    },
  ]);
};
