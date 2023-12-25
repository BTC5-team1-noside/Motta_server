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
    { subject_id: 1, belonging_name: 'こくごのきょうかしょ' },
    { subject_id: 1, belonging_name: 'こくごのノート' },
    { subject_id: 1, belonging_name: 'かんじドリル' },
    { subject_id: 2, belonging_name: 'さんすうのきょうかしょ' },
    { subject_id: 2, belonging_name: 'さんすうセット' },
    { subject_id: 2, belonging_name: 'さんすうのノート' },
    { subject_id: 3, belonging_name: 'たいそうふく' },
    { subject_id: 4, belonging_name: 'せいかつのきょうかしょ' },
    { subject_id: 4, belonging_name: 'せいかつのノート' },
    { subject_id: 5, belonging_name: 'おんがくのきょうかしょ' },
    { subject_id: 6, belonging_name: 'がっかつのきょうかしょ' },
    { subject_id: 6, belonging_name: 'がっかつのノート' },
    { subject_id: 7, belonging_name: 'どうとくのきょうかしょ' },
    { subject_id: 7, belonging_name: 'どうとくのノート' },
    { subject_id: 8, belonging_name: 'どくしょのほん' },
    { subject_id: 9, belonging_name: 'ずこうのきょうかしょ' },
    { subject_id: 9, belonging_name: 'ずこうのノート' },
    { subject_id: 9, belonging_name: 'ずこうセット' },
  ]);
};
