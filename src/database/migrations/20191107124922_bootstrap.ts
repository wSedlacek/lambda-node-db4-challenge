import * as Knex from 'knex';

export const up = async (knex: Knex) => {
  await knex.schema.createTable('ingredients', (tbl) => {
    tbl.increments();
    tbl.string('name').notNullable();
  });

  await knex.schema.createTable('recipes', (tbl) => {
    tbl.increments();
    tbl.string('name').notNullable();
    tbl.string('instructions').notNullable();
  });

  await knex.schema.createTable('recipe-ingredients', (tbl) => {
    tbl
      .integer('quantity')
      .unsigned()
      .notNullable();

    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  });
};

export const down = async (knex: Knex) => {
  await knex.schema.dropTable('recipe-ingredients');
  await knex.schema.dropTable('recipes');
  await knex.schema.dropTable('ingredients');
};
