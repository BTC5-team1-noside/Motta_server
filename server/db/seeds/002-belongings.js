/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // インクリメントでidがズレるのを防ぐ。シーケンスのリセット（次に生成されるidの値を1に設定）
  await knex.raw("SELECT setval('belongings_id_seq', 1, false)").then(() => {
    console.log('belongingsのシーケンスをリセットしました');
  });

  // seed挿入
  await knex('belongings').insert([
    { subject_id: 1, belonging_name: 'こくごの教科書' },
    { subject_id: 1, belonging_name: 'こくごのノート' },
    { subject_id: 1, belonging_name: 'かんじドリル' },
    { subject_id: 2, belonging_name: 'さんすうの教科書' },
    { subject_id: 2, belonging_name: 'さんすうセット' },
    { subject_id: 3, belonging_name: 'りかの教科書' },
    { subject_id: 3, belonging_name: 'りかのノート' },
    { subject_id: 4, belonging_name: 'しゃかいの教科書' },
    { subject_id: 4, belonging_name: 'しゃかいのノート' },
    { subject_id: 5, belonging_name: 'えいごの教科書' },
    { subject_id: 5, belonging_name: 'えいごのノート' },
    { subject_id: 6, belonging_name: 'たいそうふく' },
    { subject_id: 7, belonging_name: 'ずこうの教科書' },
    { subject_id: 7, belonging_name: 'ずこうセット' },
    { subject_id: 8, belonging_name: 'おんがくの教科書' },
    { subject_id: 9, belonging_name: 'しょしゃの教科書' },
    { subject_id: 9, belonging_name: 'しゅうじセット' },
    { subject_id: 10, belonging_name: 'そうごうの教科書' },
    { subject_id: 11, belonging_name: 'どうとくの教科書' },
    { subject_id: 11, belonging_name: 'どうとくのノート' },
  ]);
};
