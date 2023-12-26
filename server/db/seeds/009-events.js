/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // インクリメントでidがズレるのを防ぐ。シーケンスのリセット（次に生成されるidの値を1に設定）
  await knex.raw("SELECT setval('events_id_seq', 1, false)").then(() => {
    console.log('eventsのシーケンスをリセットしました');
  });

  await knex('events').del();
  await knex('events').insert([
    { event_name: '運動会', item_name: 'たいそうふく', date: '2023-05-12' },
    { event_name: '運動会', item_name: 'ぼうし', date: '2023-05-12' },
    { event_name: '運動会', item_name: 'のみもの', date: '2023-05-12' },
    { event_name: '運動会', item_name: 'タオル', date: '2023-05-12' },
    { event_name: '運動会', item_name: 'おべんとう', date: '2023-05-12' },
    { event_name: '遠足(春)', item_name: 'リュック', date: '2023-06-02' },
    { event_name: '遠足(春)', item_name: 'のみもの', date: '2023-06-02' },
    { event_name: '遠足(春)', item_name: 'ハンカチ', date: '2023-06-02' },
    { event_name: '遠足(春)', item_name: 'おべんとう', date: '2023-06-02' },
    { event_name: '遠足(春)', item_name: 'おやつ', date: '2023-06-02' },
    { event_name: '遠足(春)', item_name: 'しおり', date: '2023-06-02' },
    { event_name: '遠足(秋)', item_name: 'リュック', date: '2023-10-20' },
    { event_name: '遠足(秋)', item_name: 'のみもの', date: '2023-10-20' },
    { event_name: '遠足(秋)', item_name: 'ハンカチ', date: '2023-10-20' },
    { event_name: '遠足(秋)', item_name: 'おべんとう', date: '2023-10-20' },
    { event_name: '遠足(秋)', item_name: 'おやつ', date: '2023-10-20' },
    { event_name: '遠足(秋)', item_name: 'しおり', date: '2023-10-20' },
    { event_name: '修学旅行', item_name: 'おさいふ', date: '2023-11-17' },
    { event_name: '修学旅行', item_name: 'リュック', date: '2023-11-17' },
    { event_name: '修学旅行', item_name: 'のみもの', date: '2023-11-17' },
    { event_name: '修学旅行', item_name: 'ハンカチ', date: '2023-11-17' },
    { event_name: '修学旅行', item_name: 'しおり', date: '2023-11-17' },
    { event_name: '修学旅行', item_name: 'きがえ', date: '2023-11-17' },
    { event_name: '修学旅行', item_name: 'パジャマ', date: '2023-11-17' },
    { event_name: '修学旅行', item_name: 'おふろセット', date: '2023-11-17' },
    { event_name: '学芸会', item_name: 'たいそうふく', date: '2023-12-20' },
    { event_name: '学芸会', item_name: 'ぼうし', date: '2023-12-20' },
    { event_name: '学芸会', item_name: 'のみもの', date: '2023-12-20' },
    { event_name: '学芸会', item_name: 'ハンカチ', date: '2023-12-20' },
    { event_name: '学芸会', item_name: 'おべんとう', date: '2023-12-20' },
  ]);
};
