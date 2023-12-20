/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('confirms_history').del();
  await knex('students').del();
  await knex('students').insert([
    { student_name: 'ごろう' },
    { student_name: 'りょーぞー' },
    { student_name: 'しょうご' },
    { student_name: 'ごん' },
    { student_name: 'ゆうすけ' },
  ]);

  // シーケンスのリセット（次に生成される値を1に設定）
  return knex.raw("SELECT setval('students_id_seq', 1, false)").then(() => {
    console.log('studentsのシーケンスをリセットしました');
  });
};
