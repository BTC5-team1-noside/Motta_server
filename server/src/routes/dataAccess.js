const knex = require('./knex.js');

// 🕹️履歴があるかチェックする為にhistoryテーブルからデータ取得
const checkTimetablesHistory = async (date) =>
  await knex('timetables_history').where({ date: date });

// 🕹️dateを元に3つのテーブル(timetables_history,belongings,subjects)から時間割や持ち物データ取得
const getMergeSubjectId = async (dateOrDay, tableName) => {
  const mergeSubjectIdList = await knex(tableName)
    .where(dateOrDay)
    .join('belongings', `${tableName}.subject_id`, '=', 'belongings.subject_id')
    .join('subjects', `${tableName}.subject_id`, '=', 'subjects.id');

  return mergeSubjectIdList.sort((a, b) => a['period'] - b['period']); // 時間割順に並び替える
};

// 🕹️items_historyテーブルから日常的に使う持ち物の名前データを取得
const getItemNames = async (dateOrDay, tableName, dataCheck) => {
  console.log('dateOrDay', dateOrDay, tableName);
  let itemList = [];
  let additionalItemList = [];

  if (dataCheck) {
    itemList = await knex(tableName)
      .where({
        everyday_items: true,
      })
      .where(dateOrDay);
    additionalItemList = await knex(tableName)
      .where({
        everyday_items: false,
      })
      .where(dateOrDay);
  } else {
    itemList = await knex(tableName);
  }

  const itemNames = itemList.map((el) => el['item_name']);
  const additionalItemNames = additionalItemList.map((el) => el['item_name']);

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

// const

module.exports = {
  checkTimetablesHistory,
  getMergeSubjectId,
  getItemNames,
  getConfirmsHistory,
};
