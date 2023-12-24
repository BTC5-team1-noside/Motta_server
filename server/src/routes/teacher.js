const router = require('express').Router();
const moment = require('moment-timezone');
const {
  createSubjects,
  createInsertTimeTablesHistory,
  createInsertItemsHistory,
} = require('./helpers.js');
const {
  checkTimetablesHistory,
  getMergeSubjectId,
  getItemNames,
} = require('./dataAccess.js');
const knex = require('./knex.js');

// 1.GET:持ち物登録画面で各曜日に設定された教科を呼び出して表示したい
router.get('/subjects/:date', async (req, res) => {
  let date = req.params.date;
  let tableName = 'timetables_history';
  let dateOrDay = { date: date };
  let itemsTableName = 'items_history';

  const timeTablesHistory = await checkTimetablesHistory(date); // 'timetables_history'にデータあるかチェック

  // 履歴がない時の設定変更
  if (!timeTablesHistory.length) {
    tableName = 'timetables';
    dateOrDay = { day: moment(date).locale('ja').format('dd') };
    itemsTableName = 'items';
    date = '';
  }

  const subjectList = await getMergeSubjectId(dateOrDay, tableName);
  const subjects = createSubjects(subjectList);
  const [itemNames, additionalItemNames] = await getItemNames(
    date,
    itemsTableName
  );

  // 最後に日付と時間割の持ち物と日常品をまとめたresultを作成
  const result = {
    selectedDate: date,
    subjects: subjects,
    itemNames: itemNames,
    additionalItemNames: additionalItemNames,
  };

  try {
    console.log(
      '1.GET:持ち物登録画面で各曜日に設定された教科を呼び出して表示したい'
    );
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('サーバーエラーです');
  }
});

// 2.POST:持ち物登録画面で、その日の科目を新規登録したい。
router.post('/timetable-history/:date', async (req, res) => {
  const date = req.params.date;
  const bodySubjects = req.body.subjects;
  const bodyItems = req.body.itemNames;
  const bodyAdditionalItemNames = req.body.additionalItemNames;

  // データがあるかチェック
  const timeTablesHistory = await checkTimetablesHistory(date);

  // bodyのsubject_nameをsubject_idに変換するために、subjectsのsubject_nameだけの配列を準備
  const subjectsData = await knex('subjects');
  const subjectNames = subjectsData.map((el) => el['subject_name']);

  const insertTimeTablesHistory = await createInsertTimeTablesHistory(
    bodySubjects,
    subjectNames,
    date
  );

  // items_historyテーブルに保存する日常品のデータ
  const insertItems = createInsertItemsHistory(bodyItems, true, date);
  // items_historyテーブルに保存する追加の持ち物データ
  const insertAdditionalItems = createInsertItemsHistory(
    bodyAdditionalItemNames,
    false,
    date
  );

  const insertItemsHistory = [...insertItems, ...insertAdditionalItems];

  // 同じ日付のデータがtimetable-historyテーブルに存在しない時だけ新規登録する
  if (timeTablesHistory.length === 0) {
    await knex('timetables_history').insert(insertTimeTablesHistory);
    await knex('items_history').insert(insertItemsHistory);

    try {
      console.log('2.POST:持ち物登録画面で、その日の科目を新規登録したい。');
      res.status(200).send('TeacherのPOST受け取りました');
    } catch (error) {
      console.error(error);
      res.status(500).send('サーバーエラーです');
    }
  } else {
    res.status(409).send('データが既に存在するので保存しません');
  }
});

// 3.PATCH:持ち物登録画面で、その日の科目と日常品を追加したい。
router.patch('/timetable-history/:date', async (req, res) => {
  const date = req.params.date;

  try {
    console.log('3.PATCH:持ち物登録画面で、その日の科目と日常品を追加したい。');
    console.log('bodyは？', req.body);
    res.status(200).send('TeacherのPATCH受け取りました');
  } catch (error) {
    console.error(error);
    res.status(500).send('サーバーエラーです');
  }
});

module.exports = router;
