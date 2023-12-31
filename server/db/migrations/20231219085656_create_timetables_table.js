/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('timetables', function (table) {
    table.increments('id').primary();
    table.integer('subject_id');
    table.foreign('subject_id').references('id').inTable('subjects');
    table.integer('period');
    table.string('day');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('timetables');
};
