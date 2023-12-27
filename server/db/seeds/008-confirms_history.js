/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // インクリメントでidがズレるのを防ぐ。シーケンスのリセット（次に生成されるidの値を1に設定）
  await knex
    .raw("SELECT setval('confirms_history_id_seq', 1, false)")
    .then(() => {
      console.log('confirms_historyのシーケンスをリセットしました');
    });

  // seed挿入
  await knex('confirms_history').insert([
    // 生徒1
    { student_id: 1, date: '2023-12-04' },
    { student_id: 1, date: '2023-12-05' },
    { student_id: 1, date: '2023-12-06' },
    { student_id: 1, date: '2023-12-07' },
    { student_id: 1, date: '2023-12-10' },
    { student_id: 1, date: '2023-12-11' },
    { student_id: 1, date: '2023-12-12' },
    { student_id: 1, date: '2023-12-13' },
    { student_id: 1, date: '2023-12-14' },
    { student_id: 1, date: '2023-12-17' },
    { student_id: 1, date: '2023-12-18' },
    { student_id: 1, date: '2023-12-19' },
    { student_id: 1, date: '2023-12-20' },
    { student_id: 1, date: '2023-12-21' },
    { student_id: 1, date: '2024-01-09' },
    { student_id: 1, date: '2024-01-10' },
    { student_id: 1, date: '2024-01-11' },
    { student_id: 1, date: '2024-01-14' },
    { student_id: 1, date: '2024-01-15' },
    { student_id: 1, date: '2024-01-16' },
    { student_id: 1, date: '2024-01-17' },
    { student_id: 1, date: '2024-01-18' },

    // 生徒2
    { student_id: 2, date: '2023-12-04' },
    { student_id: 2, date: '2023-12-05' },
    { student_id: 2, date: '2023-12-06' },
    { student_id: 2, date: '2023-12-07' },
    { student_id: 2, date: '2023-12-10' },
    { student_id: 2, date: '2023-12-11' },
    { student_id: 2, date: '2023-12-12' },
    { student_id: 2, date: '2023-12-13' },
    { student_id: 2, date: '2023-12-14' },
    { student_id: 2, date: '2023-12-17' },
    { student_id: 2, date: '2023-12-18' },
    { student_id: 2, date: '2023-12-19' },
    { student_id: 2, date: '2023-12-20' },
    { student_id: 2, date: '2023-12-21' },
    { student_id: 2, date: '2024-01-09' },
    { student_id: 2, date: '2024-01-10' },
    { student_id: 2, date: '2024-01-11' },
    { student_id: 2, date: '2024-01-14' },
    { student_id: 2, date: '2024-01-15' },
    { student_id: 2, date: '2024-01-16' },
    { student_id: 2, date: '2024-01-17' },
    { student_id: 2, date: '2024-01-18' },

    // 生徒3
    { student_id: 3, date: '2023-12-04' },
    { student_id: 3, date: '2023-12-05' },
    { student_id: 3, date: '2023-12-06' },
    { student_id: 3, date: '2023-12-07' },
    { student_id: 3, date: '2023-12-10' },
    { student_id: 3, date: '2023-12-11' },
    { student_id: 3, date: '2023-12-12' },
    { student_id: 3, date: '2023-12-13' },
    { student_id: 3, date: '2023-12-14' },
    { student_id: 3, date: '2023-12-17' },
    { student_id: 3, date: '2023-12-18' },
    { student_id: 3, date: '2023-12-19' },
    { student_id: 3, date: '2023-12-20' },
    { student_id: 3, date: '2023-12-21' },
    { student_id: 3, date: '2024-01-09' },
    { student_id: 3, date: '2024-01-10' },
    { student_id: 3, date: '2024-01-11' },
    { student_id: 3, date: '2024-01-14' },
    { student_id: 3, date: '2024-01-15' },
    { student_id: 3, date: '2024-01-16' },
    { student_id: 3, date: '2024-01-17' },
    { student_id: 3, date: '2024-01-18' },

    // 生徒4
    { student_id: 4, date: '2023-12-04' },
    { student_id: 4, date: '2023-12-05' },
    { student_id: 4, date: '2023-12-06' },
    { student_id: 4, date: '2023-12-07' },
    { student_id: 4, date: '2023-12-10' },
    { student_id: 4, date: '2023-12-11' },
    { student_id: 4, date: '2023-12-12' },
    { student_id: 4, date: '2023-12-13' },
    { student_id: 4, date: '2023-12-14' },
    { student_id: 4, date: '2023-12-17' },
    { student_id: 4, date: '2023-12-18' },
    { student_id: 4, date: '2023-12-19' },
    { student_id: 4, date: '2023-12-20' },
    { student_id: 4, date: '2023-12-21' },
    { student_id: 4, date: '2024-01-09' },
    { student_id: 4, date: '2024-01-10' },
    { student_id: 4, date: '2024-01-11' },
    { student_id: 4, date: '2024-01-14' },
    { student_id: 4, date: '2024-01-15' },
    { student_id: 4, date: '2024-01-16' },
    { student_id: 4, date: '2024-01-17' },
    { student_id: 4, date: '2024-01-18' },
  ]);
};
