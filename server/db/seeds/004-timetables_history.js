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
    // 12月
    // 1週目
    // 金曜日
    { subject_id: 9, period: 1, date: '2023-12-01' },
    { subject_id: 9, period: 2, date: '2023-12-01' },
    { subject_id: 3, period: 3, date: '2023-12-01' },
    { subject_id: 1, period: 4, date: '2023-12-01' },
    { subject_id: 2, period: 5, date: '2023-12-01' },

    // 2週目
    // 月曜日
    { subject_id: 1, period: 1, date: '2023-12-04' },
    { subject_id: 2, period: 2, date: '2023-12-04' },
    { subject_id: 3, period: 3, date: '2023-12-04' },
    { subject_id: 1, period: 4, date: '2023-12-04' },
    // 火曜日
    { subject_id: 1, period: 1, date: '2023-12-05' },
    { subject_id: 2, period: 2, date: '2023-12-05' },
    { subject_id: 4, period: 3, date: '2023-12-05' },
    { subject_id: 1, period: 4, date: '2023-12-05' },
    { subject_id: 5, period: 5, date: '2023-12-05' },
    // 水曜日
    { subject_id: 4, period: 1, date: '2023-12-06' },
    { subject_id: 3, period: 2, date: '2023-12-06' },
    { subject_id: 1, period: 3, date: '2023-12-06' },
    { subject_id: 2, period: 4, date: '2023-12-06' },
    { subject_id: 6, period: 5, date: '2023-12-06' },
    // 木曜日
    { subject_id: 7, period: 1, date: '2023-12-07' },
    { subject_id: 4, period: 2, date: '2023-12-07' },
    { subject_id: 1, period: 3, date: '2023-12-07' },
    { subject_id: 8, period: 4, date: '2023-12-07' },
    { subject_id: 5, period: 5, date: '2023-12-07' },
    // 金曜日
    { subject_id: 9, period: 1, date: '2023-12-08' },
    { subject_id: 9, period: 2, date: '2023-12-08' },
    { subject_id: 3, period: 3, date: '2023-12-08' },
    { subject_id: 1, period: 4, date: '2023-12-08' },
    { subject_id: 2, period: 5, date: '2023-12-08' },

    // 3週目
    // 月曜日
    { subject_id: 1, period: 1, date: '2023-12-11' },
    { subject_id: 2, period: 2, date: '2023-12-11' },
    { subject_id: 3, period: 3, date: '2023-12-11' },
    { subject_id: 1, period: 4, date: '2023-12-11' },
    // 火曜日
    { subject_id: 1, period: 1, date: '2023-12-12' },
    { subject_id: 2, period: 2, date: '2023-12-12' },
    { subject_id: 4, period: 3, date: '2023-12-12' },
    { subject_id: 1, period: 4, date: '2023-12-12' },
    { subject_id: 5, period: 5, date: '2023-12-12' },
    // 水曜日
    { subject_id: 4, period: 1, date: '2023-12-13' },
    { subject_id: 3, period: 2, date: '2023-12-13' },
    { subject_id: 1, period: 3, date: '2023-12-13' },
    { subject_id: 2, period: 4, date: '2023-12-13' },
    { subject_id: 6, period: 5, date: '2023-12-13' },
    // 木曜日
    { subject_id: 7, period: 1, date: '2023-12-14' },
    { subject_id: 4, period: 2, date: '2023-12-14' },
    { subject_id: 1, period: 3, date: '2023-12-14' },
    { subject_id: 8, period: 4, date: '2023-12-14' },
    { subject_id: 5, period: 5, date: '2023-12-14' },
    // 金曜日
    { subject_id: 9, period: 1, date: '2023-12-15' },
    { subject_id: 9, period: 2, date: '2023-12-15' },
    { subject_id: 3, period: 3, date: '2023-12-15' },
    { subject_id: 1, period: 4, date: '2023-12-15' },
    { subject_id: 2, period: 5, date: '2023-12-15' },

    // 4週目
    // 月曜日
    { subject_id: 1, period: 1, date: '2023-12-18' },
    { subject_id: 2, period: 2, date: '2023-12-18' },
    { subject_id: 3, period: 3, date: '2023-12-18' },
    { subject_id: 1, period: 4, date: '2023-12-18' },
    // 火曜日
    { subject_id: 1, period: 1, date: '2023-12-19' },
    { subject_id: 2, period: 2, date: '2023-12-19' },
    { subject_id: 4, period: 3, date: '2023-12-19' },
    { subject_id: 1, period: 4, date: '2023-12-19' },
    { subject_id: 5, period: 5, date: '2023-12-19' },
    // 水曜日
    { subject_id: 4, period: 1, date: '2023-12-20' },
    { subject_id: 3, period: 2, date: '2023-12-20' },
    { subject_id: 1, period: 3, date: '2023-12-20' },
    { subject_id: 2, period: 4, date: '2023-12-20' },
    { subject_id: 6, period: 5, date: '2023-12-20' },
    // 木曜日
    { subject_id: 7, period: 1, date: '2023-12-21' },
    { subject_id: 4, period: 2, date: '2023-12-21' },
    { subject_id: 1, period: 3, date: '2023-12-21' },
    { subject_id: 8, period: 4, date: '2023-12-21' },
    { subject_id: 5, period: 5, date: '2023-12-21' },
    // 金曜日
    { subject_id: 9, period: 1, date: '2023-12-22' },
    { subject_id: 9, period: 2, date: '2023-12-22' },
    { subject_id: 3, period: 3, date: '2023-12-22' },
    { subject_id: 1, period: 4, date: '2023-12-22' },
    { subject_id: 2, period: 5, date: '2023-12-22' },

    // 1月
    // 2週目
    // 火曜日
    { subject_id: 1, period: 1, date: '2024-01-09' },
    { subject_id: 2, period: 2, date: '2024-01-09' },
    { subject_id: 4, period: 3, date: '2024-01-09' },
    { subject_id: 1, period: 4, date: '2024-01-09' },
    { subject_id: 5, period: 5, date: '2024-01-09' },
    // 水曜日
    { subject_id: 4, period: 1, date: '2024-01-10' },
    { subject_id: 3, period: 2, date: '2024-01-10' },
    { subject_id: 1, period: 3, date: '2024-01-10' },
    { subject_id: 2, period: 4, date: '2024-01-10' },
    { subject_id: 6, period: 5, date: '2024-01-10' },
    // 木曜日
    { subject_id: 7, period: 1, date: '2024-01-11' },
    { subject_id: 4, period: 2, date: '2024-01-11' },
    { subject_id: 1, period: 3, date: '2024-01-11' },
    { subject_id: 8, period: 4, date: '2024-01-11' },
    { subject_id: 5, period: 5, date: '2024-01-11' },
    // 金曜日
    { subject_id: 9, period: 1, date: '2024-01-12' },
    { subject_id: 9, period: 2, date: '2024-01-12' },
    { subject_id: 3, period: 3, date: '2024-01-12' },
    { subject_id: 1, period: 4, date: '2024-01-12' },
    { subject_id: 2, period: 5, date: '2024-01-12' },

    // 3週目は全て2時間
    // 月曜日
    { subject_id: 1, period: 1, date: '2024-01-15' },
    { subject_id: 2, period: 2, date: '2024-01-15' },
    // { subject_id: 3, period: 3, date: '2024-01-15' },
    // { subject_id: 1, period: 4, date: '2024-01-15' },
    // 火曜日
    { subject_id: 1, period: 1, date: '2024-01-16' },
    { subject_id: 2, period: 2, date: '2024-01-16' },
    // { subject_id: 4, period: 3, date: '2024-01-16' },
    // { subject_id: 1, period: 4, date: '2024-01-16' },
    // { subject_id: 5, period: 5, date: '2024-01-16' },
    // 水曜日
    { subject_id: 4, period: 1, date: '2024-01-17' },
    { subject_id: 3, period: 2, date: '2024-01-17' },
    // { subject_id: 1, period: 3, date: '2024-01-17' },
    // { subject_id: 2, period: 4, date: '2024-01-17' },
    // { subject_id: 6, period: 5, date: '2024-01-17' },
    // 木曜日
    { subject_id: 7, period: 1, date: '2024-01-18' },
    { subject_id: 4, period: 2, date: '2024-01-18' },
    // { subject_id: 1, period: 3, date: '2024-01-18' },
    // { subject_id: 8, period: 4, date: '2024-01-18' },
    // { subject_id: 5, period: 5, date: '2024-01-18' },
    // 金曜日はDemoDay
  ]);
};
