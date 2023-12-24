/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // インクリメントでidがズレるのを防ぐ。シーケンスのリセット（次に生成されるidの値を1に設定）
  await knex
    .raw("SELECT setval('timetables_history_id_seq', 1, false)")
    .then(() => {
      console.log('timetables_historyのシーケンスをリセットしました');
    });

  // seed挿入
  await knex('timetables_history').insert([
    // 1週目
    { subject_id: 6, period: 1, date: '2023-12-01' },
    { subject_id: 5, period: 2, date: '2023-12-01' },
    { subject_id: 1, period: 3, date: '2023-12-01' },
    { subject_id: 2, period: 4, date: '2023-12-01' },
    { subject_id: 8, period: 5, date: '2023-12-01' },
    { subject_id: 4, period: 6, date: '2023-12-01' },

    // 2週目
    { subject_id: 1, period: 1, date: '2023-12-04' },
    { subject_id: 3, period: 2, date: '2023-12-04' },
    { subject_id: 2, period: 3, date: '2023-12-04' },
    { subject_id: 6, period: 4, date: '2023-12-04' },
    { subject_id: 10, period: 5, date: '2023-12-04' },
    { subject_id: 10, period: 6, date: '2023-12-04' },
    { subject_id: 1, period: 1, date: '2023-12-05' },
    { subject_id: 2, period: 2, date: '2023-12-05' },
    { subject_id: 7, period: 3, date: '2023-12-05' },
    { subject_id: 7, period: 4, date: '2023-12-05' },
    { subject_id: 6, period: 5, date: '2023-12-05' },
    { subject_id: 1, period: 1, date: '2023-12-06' },
    { subject_id: 11, period: 2, date: '2023-12-06' },
    { subject_id: 2, period: 3, date: '2023-12-06' },
    { subject_id: 4, period: 4, date: '2023-12-06' },
    { subject_id: 9, period: 5, date: '2023-12-06' },
    { subject_id: 3, period: 6, date: '2023-12-06' },
    { subject_id: 1, period: 1, date: '2023-12-07' },
    { subject_id: 2, period: 2, date: '2023-12-07' },
    { subject_id: 4, period: 3, date: '2023-12-07' },
    { subject_id: 1, period: 4, date: '2023-12-07' },
    { subject_id: 3, period: 5, date: '2023-12-07' },
    { subject_id: 6, period: 1, date: '2023-12-08' },
    { subject_id: 5, period: 2, date: '2023-12-08' },
    { subject_id: 1, period: 3, date: '2023-12-08' },
    { subject_id: 2, period: 4, date: '2023-12-08' },
    { subject_id: 8, period: 5, date: '2023-12-08' },
    { subject_id: 4, period: 6, date: '2023-12-08' },

    // 3週目
    { subject_id: 1, period: 1, date: '2023-12-11' },
    { subject_id: 3, period: 2, date: '2023-12-11' },
    { subject_id: 2, period: 3, date: '2023-12-11' },
    { subject_id: 6, period: 4, date: '2023-12-11' },
    { subject_id: 10, period: 5, date: '2023-12-11' },
    { subject_id: 10, period: 6, date: '2023-12-11' },
    { subject_id: 1, period: 1, date: '2023-12-12' },
    { subject_id: 2, period: 2, date: '2023-12-12' },
    { subject_id: 7, period: 3, date: '2023-12-12' },
    { subject_id: 7, period: 4, date: '2023-12-12' },
    { subject_id: 6, period: 5, date: '2023-12-12' },
    { subject_id: 1, period: 1, date: '2023-12-13' },
    { subject_id: 11, period: 2, date: '2023-12-13' },
    { subject_id: 2, period: 3, date: '2023-12-13' },
    { subject_id: 4, period: 4, date: '2023-12-13' },
    { subject_id: 9, period: 5, date: '2023-12-13' },
    { subject_id: 3, period: 6, date: '2023-12-13' },
    { subject_id: 1, period: 1, date: '2023-12-14' },
    { subject_id: 2, period: 2, date: '2023-12-14' },
    { subject_id: 4, period: 3, date: '2023-12-14' },
    { subject_id: 1, period: 4, date: '2023-12-14' },
    { subject_id: 3, period: 5, date: '2023-12-14' },
    { subject_id: 6, period: 1, date: '2023-12-15' },
    { subject_id: 5, period: 2, date: '2023-12-15' },
    { subject_id: 1, period: 3, date: '2023-12-15' },
    { subject_id: 2, period: 4, date: '2023-12-15' },
    { subject_id: 8, period: 5, date: '2023-12-15' },
    { subject_id: 4, period: 6, date: '2023-12-15' },
  ]);
};
