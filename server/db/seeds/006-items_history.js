/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items_history').del();
  await knex('items_history').insert([
    { item_name: 'エプロン', date: '2023-12-18' },
    { item_name: 'ランチョンマット', date: '2023-12-18' },
    { item_name: '箸入れ', date: '2023-12-18' },
    { item_name: '筆箱', date: '2023-12-18' },
    { item_name: '体操着', date: '2023-12-19' },
    { item_name: 'トイレットペーパー', date: '2023-12-19' },
    { item_name: 'エプロン', date: '2023-12-20' },
    { item_name: 'ランチョンマット', date: '2023-12-20' },
    { item_name: '箸入れ', date: '2023-12-20' },
    { item_name: '筆箱', date: '2023-12-20' },
    { item_name: '三角定規', date: '2023-12-20' },
    { item_name: '保護者会のプリント', date: '2023-12-20' },
  ]);

  // シーケンスのリセット（次に生成される値を1に設定）
  return knex
    .raw("SELECT setval('items_history_id_seq', 1, false)")
    .then(() => {
      console.log('items_historyのシーケンスをリセットしました');
    });
};
