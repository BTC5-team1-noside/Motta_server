/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex("timetables").del();
  await knex('timetables').insert([
    { subject_id: 1, day: '月', period: 1 },
    { subject_id: 3, day: '月', period: 2 },
    { subject_id: 2, day: '月', period: 3 },
    { subject_id: 6, day: '月', period: 4 },
    { subject_id: 10, day: '月', period: 5 },
    { subject_id: 10, day: '月', period: 6 },
    { subject_id: 1, day: '火', period: 1 },
    { subject_id: 2, day: '火', period: 2 },
    { subject_id: 7, day: '火', period: 3 },
    { subject_id: 7, day: '火', period: 4 },
    { subject_id: 6, day: '火', period: 5 },
  ]);

  // シーケンスのリセット（次に生成される値を1に設定）
  return knex.raw("SELECT setval('timetables_id_seq', 1, false)").then(() => {
    console.log('timetablesのシーケンスをリセットしました');
  });
};
