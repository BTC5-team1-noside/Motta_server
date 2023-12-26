const knex = require('./knex.js');

// 🕹️履歴があるかチェックする為にhistoryテーブルからデータ取得
const checkTimetablesHistory = async (date) =>
  await knex('timetables_history').where({ date: date });

// 🕹️dateを元に3つのテーブル(timetables_history,belongings,subjects)から時間割や持ち物データ取得
const getMergeSubjectId = async (dateOrDay, tableName) => {
  return await knex(tableName)
    .where(dateOrDay)
    .join('belongings', `${tableName}.subject_id`, '=', 'belongings.subject_id')
    .join('subjects', `${tableName}.subject_id`, '=', 'subjects.id')
    .orderBy('period', 'asc');
};

// 🕹️items_historyテーブルから日常的に使う持ち物の名前データを取得
const getItemNames = async (dateOrDay, tableName, isHistoryData) => {
  let itemNames = [];
  let additionalItemNames = [];

  if (isHistoryData) {
    itemNames = await knex(tableName)
      .where({
        everyday_items: true,
      })
      .where(dateOrDay)
      .pluck('item_name');
    additionalItemNames = await knex(tableName)
      .where({
        everyday_items: false,
      })
      .where(dateOrDay)
      .pluck('item_name');
  } else {
    itemNames = await knex(tableName)
      .where({ day: '全' })
      .orWhere(dateOrDay)
      .pluck('item_name');
    console.log(dateOrDay);
  }

  return [itemNames, additionalItemNames];
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

const getMergeTimetables = async () => {
  return await knex('timetables').join(
    'subjects',
    'timetables.subject_id',
    '=',
    'subjects.id'
  );
};

const getMergeBelongings = async () => {
  return await knex('belongings').join(
    'subjects',
    'belongings.subject_id',
    '=',
    'subjects.id'
  );
};

module.exports = {
  checkTimetablesHistory,
  getMergeSubjectId,
  getItemNames,
  getConfirmsHistory,
  getMergeTimetables,
  getMergeBelongings,
};
