/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex("belongings").del();
  await knex('belongings').insert([
    { subject_id: 1, belonging_name: '国語の教科書' },
    { subject_id: 1, belonging_name: '国語のノート' },
    { subject_id: 1, belonging_name: '国語辞典' },
    { subject_id: 1, belonging_name: '漢字ドリル' },
    { subject_id: 2, belonging_name: '算数の教科書' },
    { subject_id: 2, belonging_name: '三角定規' },
    { subject_id: 2, belonging_name: '算数セット' },
    { subject_id: 2, belonging_name: 'コンパス' },
    { subject_id: 3, belonging_name: '理科の教科書' },
    { subject_id: 3, belonging_name: '理科のノート' },
    { subject_id: 4, belonging_name: '社会の教科書' },
    { subject_id: 4, belonging_name: '社会のノート' },
    { subject_id: 5, belonging_name: '英語の教科書' },
    { subject_id: 5, belonging_name: '英語のノート' },
    { subject_id: 6, belonging_name: '体操服' },
    { subject_id: 7, belonging_name: '図工の教科書' },
    { subject_id: 7, belonging_name: '図工セット' },
    { subject_id: 8, belonging_name: '音楽の教科書' },
    { subject_id: 9, belonging_name: '書写の教科書' },
    { subject_id: 9, belonging_name: '習字セット' },
    { subject_id: 10, belonging_name: '総合の教科書' },
    { subject_id: 11, belonging_name: '道徳の教科書' },
    { subject_id: 11, belonging_name: '道徳のノート' },
  ]);

  // シーケンスのリセット（次に生成される値を1に設定）
  return knex.raw("SELECT setval('belongings_id_seq', 1, false)").then(() => {
    console.log('シーケンスがリセットされました');
  });
};
