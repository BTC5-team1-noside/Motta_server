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
    // 12月
    // 1週目
    // 金曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-01' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-01' },

    // 2週目
    // 月曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-04' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-04' },
    { item_name: 'うわばき', everyday_items: true, date: '2023-12-04' },
    { item_name: 'エプロン', everyday_items: true, date: '2023-12-04' },
    // 火曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-05' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-05' },
    // 水曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-06' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-06' },
    // 木曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-07' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-07' },
    // 金曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-08' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-08' },

    // 3週目
    // 月曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-11' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-11' },
    { item_name: 'うわばき', everyday_items: true, date: '2023-12-11' },
    { item_name: 'エプロン', everyday_items: true, date: '2023-12-11' },
    // 火曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-12' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-12' },
    // 水曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-13' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-13' },
    // 木曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-14' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-14' },
    // 金曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-15' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-15' },

    // 4週目
    // 月曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-18' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-18' },
    { item_name: 'うわばき', everyday_items: true, date: '2023-12-18' },
    { item_name: 'エプロン', everyday_items: true, date: '2023-12-18' },
    // 火曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-19' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-19' },
    // 水曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-20' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-20' },
    // 木曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-21' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-21' },
    // 金曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2023-12-22' },
    { item_name: 'はしセット', everyday_items: true, date: '2023-12-22' },

    // 1月
    // 2週目は追加の持ち物あり
    // 火曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2024-01-09' },
    { item_name: 'はしセット', everyday_items: true, date: '2024-01-09' },
    {
      item_name: 'さんかくじょうぎ',
      everyday_items: false,
      date: '2024-01-09',
    },
    // 水曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2024-01-10' },
    { item_name: 'はしセット', everyday_items: true, date: '2024-01-10' },
    { item_name: 'なわとび', everyday_items: false, date: '2024-01-10' },
    // 木曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2024-01-11' },
    { item_name: 'はしセット', everyday_items: true, date: '2024-01-11' },
    { item_name: 'リコーダー', everyday_items: false, date: '2024-01-11' },
    // 金曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2024-01-12' },
    { item_name: 'はしセット', everyday_items: true, date: '2024-01-12' },
    { item_name: 'いろえんぴつ', everyday_items: false, date: '2024-01-12' },
    { item_name: 'はさみ', everyday_items: false, date: '2024-01-12' },
    { item_name: 'のり', everyday_items: false, date: '2024-01-12' },

    // 3週目
    // 月曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2024-01-15' },
    { item_name: 'はしセット', everyday_items: true, date: '2024-01-15' },
    { item_name: 'うわばき', everyday_items: true, date: '2024-01-15' },
    { item_name: 'エプロン', everyday_items: true, date: '2024-01-15' },
    // 火曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2024-01-16' },
    { item_name: 'はしセット', everyday_items: true, date: '2024-01-16' },
    // 水曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2024-01-17' },
    { item_name: 'はしセット', everyday_items: true, date: '2024-01-17' },
    // 木曜日
    { item_name: 'ふでばこ', everyday_items: true, date: '2024-01-18' },
    { item_name: 'はしセット', everyday_items: true, date: '2024-01-18' },
    // 金曜日はDemoDay
  ]);
};
