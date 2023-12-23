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
const getItemNames = async (date, tableName) => {
  let itemList;

  if (date) {
    itemList = await knex(tableName).where({ date: date });
  } else {
    itemList = await knex(tableName);
  }

  const allItems = itemList.reduce(
    ([itemNames, additionalItemNames], b) => {
      // undefined回避でtrue,false等値比較してます
      if (b['everyday_items'] === true) {
        itemNames = [...itemNames, b['item_name']];
      } else if (b['everyday_items'] === false) {
        additionalItemNames = [...additionalItemNames, b['item_name']];
      }
      return [itemNames, additionalItemNames];
    },
    [[], []]
  );

  return allItems;
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
  checkTimetablesHistory,
  getMergeSubjectId,
  getItemNames,
  getConfirmsHistory,
};
