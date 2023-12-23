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
    { item_name: 'エプロン', everyday_items: true, date: '2023-12-18' },
    { item_name: 'ランチョンマット', everyday_items: true, date: '2023-12-18' },
    { item_name: '箸入れ', everyday_items: true, date: '2023-12-18' },
    { item_name: '筆箱', everyday_items: true, date: '2023-12-18' },
    { item_name: '体操着', everyday_items: false, date: '2023-12-19' },
    {
      item_name: 'トイレットペーパー',
      everyday_items: false,
      date: '2023-12-19',
    },
    { item_name: 'エプロン', everyday_items: true, date: '2023-12-20' },
    { item_name: 'ランチョンマット', everyday_items: true, date: '2023-12-20' },
    { item_name: '箸入れ', everyday_items: true, date: '2023-12-20' },
    { item_name: '筆箱', everyday_items: true, date: '2023-12-20' },
    { item_name: '三角定規', everyday_items: false, date: '2023-12-20' },
    {
      item_name: '保護者会のプリント',
      everyday_items: false,
      date: '2023-12-20',
    },
    { item_name: '赤い羽根募金', everyday_items: false, date: '2023-12-21' },
    {
      item_name: '学芸会のプリント',
      everyday_items: false,
      date: '2023-12-22',
    },
  ]);
};
