const knex = require('./knex.js');

// 🕹️履歴があるかチェックする為にhistoryテーブルからデータ取得
const checkHistory = async (date) =>
  await knex('timetables_history').where({ date: date });

// 🕹️dateを元に3つのテーブル(timetables_history,belongings,subjects)から時間割や持ち物データ取得
const getSubjectList = async (dateOrDay, tableName) => {
  const subjectList = await knex(tableName)
    .where(dateOrDay)
    .join('belongings', `${tableName}.subject_id`, '=', 'belongings.subject_id')
    .join('subjects', `${tableName}.subject_id`, '=', 'subjects.id');

  return subjectList.sort((a, b) => a['period'] - b['period']);
};

// 🕹️items_historyテーブルから日常的に使う持ち物の名前データを取得
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

// 🕹️年と月の部分一致で日付データを複数取得
const getConfirmsHistory = async (studentId, date, tableName, isExactMatch) => {
  if (isExactMatch) {
    return await knex(tableName).where({
      student_id: studentId,
      date: date,
    });
  } else {
    return await knex(tableName)
      .select('date')
      .where({
        student_id: studentId,
      })
      .whereRaw("to_char(date, 'YYYY-MM') like ?", [date]);
  }
};

module.exports = {
  checkHistory,
  getSubjectList,
  createItems,
  getConfirmsHistory,
};
