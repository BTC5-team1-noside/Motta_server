/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // インクリメントでidがズレるのを防ぐ。シーケンスのリセット（次に生成されるidの値を1に設定）
  await knex.raw("SELECT setval('timetables_id_seq', 1, false)").then(() => {
    console.log('timetablesのシーケンスをリセットしました');
  });

  // seed挿入
  await knex('timetables').insert([
    // 月曜日
    { subject_id: 1, period: 1, day: '月' },
    { subject_id: 2, period: 2, day: '月' },
    { subject_id: 3, period: 3, day: '月' },
    { subject_id: 1, period: 4, day: '月' },
    { subject_id: 10, period: 5, day: '月' },

    // 火曜日
    { subject_id: 1, period: 1, day: '火' },
    { subject_id: 2, period: 2, day: '火' },
    { subject_id: 4, period: 3, day: '火' },
    { subject_id: 1, period: 4, day: '火' },
    { subject_id: 5, period: 5, day: '火' },

    // 水曜日
    { subject_id: 4, period: 1, day: '水' },
    { subject_id: 3, period: 2, day: '水' },
    { subject_id: 1, period: 3, day: '水' },
    { subject_id: 2, period: 4, day: '水' },
    { subject_id: 6, period: 5, day: '水' },

    // 木曜日
    { subject_id: 7, period: 1, day: '木' },
    { subject_id: 4, period: 2, day: '木' },
    { subject_id: 1, period: 3, day: '木' },
    { subject_id: 8, period: 4, day: '木' },
    { subject_id: 5, period: 5, day: '木' },

    // 金曜日
    { subject_id: 9, period: 1, day: '金' },
    { subject_id: 9, period: 2, day: '金' },
    { subject_id: 3, period: 3, day: '金' },
    { subject_id: 1, period: 4, day: '金' },
    { subject_id: 2, period: 5, day: '金' },
  ]);
};
