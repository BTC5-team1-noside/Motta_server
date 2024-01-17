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
    { student_name: 'りょーぞー', character_id: 1 },
    { student_name: 'しょうご', character_id: 2 },
    { student_name: 'ごんちゃん', character_id: 3 },
    { student_name: 'よこちん', character_id: 4 },
    { student_name: 'しゅん', character_id: 5 },
    { student_name: 'たなちゅー', character_id: 1 },
    { student_name: 'まあや', character_id: 2 },
    { student_name: 'ぶっちー', character_id: 3 },
    { student_name: 'くのくの', character_id: 4 },
    { student_name: 'はっしー', character_id: 5 },
    { student_name: 'たか', character_id: 1 },
    { student_name: 'たつ', character_id: 2 },
    { student_name: 'なお', character_id: 3 },
    { student_name: 'じん', character_id: 4 },
    { student_name: 'みゅう', character_id: 5 },
    { student_name: 'おがちゃん', character_id: 1 },
    { student_name: 'かける', character_id: 2 },
    { student_name: 'あい', character_id: 3 },
    { student_name: 'あゆみ', character_id: 4 },
    { student_name: 'ゆうと', character_id: 5 },
    { student_name: 'ごろう', character_id: 1 },
    { student_name: 'ゆりこ', character_id: 2 },
    { student_name: 'けんじ', character_id: 3 },
    { student_name: 'あいり', character_id: 4 },
    { student_name: 'ゆうすけ', character_id: 5 },
    { student_name: 'はるか', character_id: 1 },
    { student_name: 'ゆうな', character_id: 2 },
    { student_name: 'こうじ', character_id: 3 },
    { student_name: 'みお', character_id: 4 },
    { student_name: 'さとし', character_id: 5 },
    { student_name: 'あおい', character_id: 1 },
    { student_name: 'ゆうま', character_id: 2 },
    { student_name: 'れな', character_id: 3 },
    { student_name: 'こはる', character_id: 4 },
    { student_name: 'あやの', character_id: 5 },
  ]);
};
