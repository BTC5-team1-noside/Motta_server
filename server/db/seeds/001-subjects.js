/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // インクリメントでidがズレるのを防ぐ。シーケンスのリセット（次に生成されるidの値を1に設定）
  await knex.raw("SELECT setval('subjects_id_seq', 1, false)").then(() => {
    console.log('subjectsのシーケンスをリセットしました');
  });

  // 参照先のテーブルを先に削除
  await knex('belongings').del();
  await knex('timetables').del();
  await knex('timetables_history').del();
  await knex('subjects').del();

  // seed挿入
  await knex('subjects').insert([
    { subject_name: 'こくご' },
    { subject_name: 'さんすう' },
    { subject_name: 'りか' },
    { subject_name: 'しゃかい' },
    { subject_name: 'えいご' },
    { subject_name: 'たいいく' },
    { subject_name: 'ずこう' },
    { subject_name: 'おんがく' },
    { subject_name: 'しょしゃ' },
    { subject_name: 'そうごう' },
    { subject_name: 'どうとく' },
  ]);
};
