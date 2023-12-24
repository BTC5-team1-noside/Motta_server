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
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-01' },
    {
      item_name: 'きゅうしょくセット',
      everyday_items: true,
      date: '2023-12-01',
    },
    { item_name: 'うわばき', everyday_items: true, date: '2023-12-01' },
    {
      item_name: 'ほごしゃかいのプリント',
      everyday_items: false,
      date: '2023-12-01',
    },
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-04' },
    {
      item_name: 'きゅうしょくセット',
      everyday_items: true,
      date: '2023-12-04',
    },
    { item_name: 'うわばき', everyday_items: true, date: '2023-12-04' },
    { item_name: 'たいそうふく', everyday_items: false, date: '2023-12-04' },
    {
      item_name: 'たいいくかんシューズ',
      everyday_items: false,
      date: '2023-12-04',
    },
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-05' },
    {
      item_name: 'きゅうしょくセット',
      everyday_items: true,
      date: '2023-12-05',
    },
    { item_name: 'うわばき', everyday_items: true, date: '2023-12-05' },
    {
      item_name: 'はさみ',
      everyday_items: false,
      date: '2023-12-05',
    },
    {
      item_name: 'のり',
      everyday_items: false,
      date: '2023-12-05',
    },
    {
      item_name: 'いろえんぴつ',
      everyday_items: false,
      date: '2023-12-05',
    },
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-06' },
    {
      item_name: 'きゅうしょくセット',
      everyday_items: true,
      date: '2023-12-06',
    },
    { item_name: 'うわばき', everyday_items: true, date: '2023-12-06' },
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-07' },
    {
      item_name: 'きゅうしょくセット',
      everyday_items: true,
      date: '2023-12-07',
    },
    { item_name: 'うわばき', everyday_items: true, date: '2023-12-07' },
    {
      item_name: 'ベルマーク',
      everyday_items: false,
      date: '2023-12-07',
    },
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-08' },
    {
      item_name: 'きゅうしょくセット',
      everyday_items: true,
      date: '2023-12-08',
    },
    { item_name: 'うわばき', everyday_items: true, date: '2023-12-08' },
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-11' },
    {
      item_name: 'きゅうしょくセット',
      everyday_items: true,
      date: '2023-12-11',
    },
    { item_name: 'うわばき', everyday_items: true, date: '2023-12-11' },
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-12' },
    {
      item_name: 'きゅうしょくセット',
      everyday_items: true,
      date: '2023-12-12',
    },
    { item_name: 'うわばき', everyday_items: true, date: '2023-12-12' },
    {
      item_name: 'さんかくじょうぎ',
      everyday_items: false,
      date: '2023-12-12',
    },
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-13' },
    {
      item_name: 'きゅうしょくセット',
      everyday_items: true,
      date: '2023-12-13',
    },
    { item_name: 'うわばき', everyday_items: true, date: '2023-12-13' },
    {
      item_name: 'あかいはねぼきん',
      everyday_items: false,
      date: '2023-12-13',
    },
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-14' },
    {
      item_name: 'きゅうしょくセット',
      everyday_items: true,
      date: '2023-12-14',
    },
    { item_name: 'うわばき', everyday_items: true, date: '2023-12-14' },
    {
      item_name: 'トイレットペーパー',
      everyday_items: false,
      date: '2023-12-14',
    },
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-15' },
    {
      item_name: 'きゅうしょくセット',
      everyday_items: true,
      date: '2023-12-15',
    },
    { item_name: 'うわばき', everyday_items: true, date: '2023-12-15' },
  ]);
};
