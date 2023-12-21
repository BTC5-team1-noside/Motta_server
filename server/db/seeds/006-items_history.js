/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // インクリメントでidがズレるのを防ぐ。シーケンスのリセット（次に生成されるidの値を1に設定）
  await knex.raw("SELECT setval('items_history_id_seq', 1, false)").then(() => {
    console.log('items_historyのシーケンスをリセットしました');
  });

  // テーブル削除とseed挿入
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
};
