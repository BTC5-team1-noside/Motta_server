const router = require('express').Router();
const moment = require('moment-timezone');
const { createSubjectsList } = require('./helpers.js');
const { checkHistory, getSubjectList, createItems } = require('./api.js');

// 1.GET:持ち物登録画面で各曜日に設定された教科を呼び出して表示したい
router.get('/subjects/:date', async (req, res) => {
  let date = req.params.date;
  let tableName = 'timetables_history';
  let dateOrDay = { date: date };
  let itemsTableName = 'items_history';

  const historys = await checkHistory(date); // 'timetables_history'にデータあるかチェック

  // 履歴がない時
  if (!historys.length) {
    tableName = 'timetables';
    dateOrDay = { day: moment(date).locale('ja').format('dd') };
    itemsTableName = 'items';
    date = '';
  }

  const subjectList = await getSubjectList(dateOrDay, tableName);
  const subjects = createSubjectsList(subjectList);
  const items = await createItems(date, itemsTableName);

  // 最後に日付と時間割の持ち物と日常品をまとめたresultを作成
  const result = {
    selectedDate: date,
    subjects: subjects,
    items: items,
  };

  try {
    console.log(
      '1.GET:持ち物登録画面で各曜日に設定された教科を呼び出して表示したい'
    );
    res.status(200).send(result);
  } catch (error) {}
});

// 2.POST:持ち物登録画面で、その日の科目を新規登録したい。
router.post('/timetable-history/:date', async (req, res) => {
  const date = req.params.date;

  try {
    console.log('2.POST:持ち物登録画面で、その日の科目を新規登録したい。');
    console.log('bodyは？', req.body);
    res.status(200).send('TeacherのPOST受け取りました');
  } catch (error) {}
});

// 3.PATCH:持ち物登録画面で、その日の科目と日常品を追加したい。
router.patch('/timetable-history/:date', async (req, res) => {
  const date = req.params.date;

  try {
    console.log('3.PATCH:持ち物登録画面で、その日の科目と日常品を追加したい。');
    console.log('bodyは？', req.body);
    res.status(200).send('TeacherのPATCH受け取りました');
  } catch (error) {}
});

module.exports = router;
