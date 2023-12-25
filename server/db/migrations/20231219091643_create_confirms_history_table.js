/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('confirms_history', function (table) {
    table.increments('id').primary();
    table.integer('student_id');
    table.foreign('student_id').references('id').inTable('students');
    table
      .date('date')
      .defaultTo(knex.fn.now())
      .index()
      .comment('Japan Standard Time');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('confirms_history');
};
