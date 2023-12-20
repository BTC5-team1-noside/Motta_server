/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("timetables_history", function (table) {
    table.increments("id").primary();
    table.integer("subject_id");
    table.foreign("subject_id").references("id").inTable("subjects");
    table.integer("period");
    table.date("date");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("timetables_history");
};
