/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // インクリメントでidがズレるのを防ぐ。シーケンスのリセット（次に生成されるidの値を1に設定）
  await knex.raw("SELECT setval('students_id_seq', 1, false)").then(() => {
    console.log('studentsのシーケンスをリセットしました');
  });

  // 先に参照先のテーブルデータを削除
  await knex('confirms_history').del();
  await knex('students').del();

  // seed挿入
  await knex('students').insert([
    { student_name: 'りょーぞー' },
    { student_name: 'しょうご' },
    { student_name: 'ごんちゃん' },
    { student_name: 'ゆうすけ' },
    { student_name: 'しゅん' },
    { student_name: 'たなちゅー' },
    { student_name: 'まあや' },
    { student_name: 'ぶっちー' },
    { student_name: 'くのくの' },
    { student_name: 'はっしー' },
    { student_name: 'たか' },
    { student_name: 'たつ' },
    { student_name: 'なお' },
    { student_name: 'じん' },
    { student_name: 'みゅう' },
    { student_name: 'おがちゃん' },
    { student_name: 'ごろう' },
  ]);
};
