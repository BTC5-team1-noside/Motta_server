/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('confirms_history').del();
  await knex('confirms_history').insert([
    { student_id: 1, date: '2023-12-18' },
    { student_id: 2, date: '2023-12-18' },
    { student_id: 3, date: '2023-12-18' },
    { student_id: 4, date: '2023-12-18' },
    { student_id: 5, date: '2023-12-18' },
    { student_id: 1, date: '2023-12-19' },
    { student_id: 2, date: '2023-12-19' },
    { student_id: 3, date: '2023-12-19' },
  ]);

  // シーケンスのリセット（次に生成される値を1に設定）
  return knex
    .raw("SELECT setval('confirms_history_id_seq', 1, false)")
    .then(() => {
      console.log('confirms_historyのシーケンスをリセットしました');
    });
};
