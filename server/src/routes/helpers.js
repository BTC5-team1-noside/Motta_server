const knex = require('./knex.js');

// 履歴があるかチェックする為にhistoryテーブルからデータ取得
const checkHistory = async (date) =>
  await knex('timetables_history').where({ date: date });

// dateを元に3つのテーブル(timetables_history,belongings,subjects)から時間割や持ち物データ取得
const getSubjectList = async (dateOrDay, tableName) => {
  const subjectList = await knex(tableName)
    .where(dateOrDay)
    .join('belongings', `${tableName}.subject_id`, '=', 'belongings.subject_id')
    .join('subjects', `${tableName}.subject_id`, '=', 'subjects.id');

  return subjectList.sort((a, b) => a['period'] - b['period']);
};

// subjectsを作成用のヘルパー関数
const createSubjectsList = (subjectList) => {
  const subjects = [];

  subjectList.forEach((el) => {
    const obj = {
      period: el['period'],
      subject_name: el['subject_name'],
      belongings: [el['belonging_name']],
    };

    const periodArr = subjects.map((e) => e['period']);
    const index = periodArr.indexOf(el['period']);

    if (index === -1) {
      subjects.push(obj);
    } else {
      subjects[index]['belongings'].push(el['belonging_name']);
    }
  });

  return subjects;
};

// items_historyテーブルから日常的に使う持ち物の名前データを取得
const createItems = async (date, tableName) => {
  let itemList;

  if (date) {
    itemList = await knex(tableName).select('item_name').where({ date: date });
  } else {
    itemList = await knex(tableName).select('item_name');
  }

  const items = itemList.map((el) => el['item_name']);
  return items;
};

module.exports = {
  checkHistory,
  getSubjectList,
  createSubjectsList,
  createItems,
};
