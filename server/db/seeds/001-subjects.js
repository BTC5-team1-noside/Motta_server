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
    { subject_name: '国語' },
    { subject_name: '算数' },
    { subject_name: '理科' },
    { subject_name: '社会' },
    { subject_name: '英語' },
    { subject_name: '体育' },
    { subject_name: '図工' },
    { subject_name: '音楽' },
    { subject_name: '書写' },
    { subject_name: '総合' },
    { subject_name: '道徳' },
  ]);
};
