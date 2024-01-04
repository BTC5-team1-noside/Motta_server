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
    { student_name: 'あきら' },
    { student_name: 'はるき' },
    { student_name: 'ななみ' },
    { student_name: 'ゆうと' },
    { student_name: 'ゆりこ' },
    { student_name: 'けんじ' },
    { student_name: 'あいり' },
    { student_name: 'こうすけ' },
    { student_name: 'はるか' },
    { student_name: 'ゆうな' },
    { student_name: 'こうじ' },
    { student_name: 'みお' },
    { student_name: 'さとし' },
    { student_name: 'あおい' },
    { student_name: 'ゆうま' },
    { student_name: 'れな' },
    { student_name: 'こはる' },
    { student_name: 'ひかる' },
    { student_name: 'かな' },
  ]);
};
