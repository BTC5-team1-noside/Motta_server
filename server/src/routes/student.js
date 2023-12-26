const router = require('express').Router();
const knex = require('./knex.js');
const moment = require('moment-timezone');
const { createSubjects } = require('./helpers.js');
const {
  checkTimetablesHistory,
  getMergeSubjectId,
  getItemNames,
  getConfirmsHistory,
} = require('./dataAccess.js');

// 🚀1.GET:翌日の各教科の持ち物の名前を受け取って音声で読み上げる、画面にもテキスト表示する
router.get('/timetables-history/:date', async (req, res) => {
  let date = req.params.date;
  let tableName = 'timetables_history';
  let dateOrDay = { date: date };
  let itemsTableName = 'items_history';
  let isHistoryData = true;

  const timeTablesHistory = await checkTimetablesHistory(date); // 'timetables_history'にデータあるかチェック

  // 履歴がない時の設定変更
  if (!timeTablesHistory.length) {
    tableName = 'timetables';
    dateOrDay = { day: moment(date).locale('ja').format('dd') };
    itemsTableName = 'items';
    isHistoryData = false;
  }

  const subjectList = await getMergeSubjectId(dateOrDay, tableName);
  const subjects = createSubjects(subjectList);
  const [itemNames, additionalItemNames] = await getItemNames(
    dateOrDay,
    itemsTableName,
    isHistoryData
  );

  // 最後に日付と時間割の持ち物と日常品をまとめたresultを作成
  const result = {
    isHistoryData: isHistoryData,
    selectedDate: date,
    subjects: subjects,
    itemNames: itemNames,
    additionalItemNames: additionalItemNames,
  };

  try {
    console.log(
      '1.GET:翌日の各教科の持ち物の名前を受け取って音声で読み上げる、画面にもテキスト表示する'
    );
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('サーバーエラーです');
  }
});

// 🚀2.GET:カレンダーにスタンプを一覧表示したい
router.get('/confirms-history', async (req, res) => {
  const studentId = req.query.student_id;
  const date = req.query.date;
  let JSTdates = [];

  if (date) {
    // 2023-12-18の日付を2023-12に変換
    const splitDate = date.split('-');
    const formatDate = splitDate[0] + '-' + splitDate[1].padStart(2, '0') + '%';
    const tableName = 'confirms_history';
    const isExactMatch = false; // 部分一致

    const confirmsHistory = await getConfirmsHistory(
      studentId,
      formatDate,
      tableName,
      isExactMatch
    );

    // 日付データを日本時間に変換して配列に格納
    JSTdates = confirmsHistory.map((el) =>
      moment.utc(el.date).tz('Asia/Tokyo').format('YYYY-MM-DD')
    );
  }

  try {
    console.log('2.GET:カレンダーにスタンプを一覧表示したい');
    res.status(200).send(JSTdates);
  } catch (error) {
    console.error(error);
    res.status(500).send('サーバーエラーです');
  }
});

// 🚀3.POST:カレンダーにスタンプを押す
router.post('/confirms-history', async (req, res) => {
  const studentId = req.body.student_id;
  const checkDate = req.body.date;
  const tableName = 'confirms_history';
  const isExactMatch = true; // 完全一致

  const confirmsHistory = await getConfirmsHistory(
    studentId,
    checkDate,
    tableName,
    isExactMatch
  );

  // データベースに存在しない場合のみ挿入する
  if (confirmsHistory.length === 0) {
    await knex('confirms_history').insert({
      student_id: studentId,
      date: checkDate,
    });

    try {
      console.log('3.POST:カレンダーにスタンプを押す');
      res.status(200).send('正常にデータを登録しました');
    } catch (error) {
      console.error(error);
      res.status(500).send('サーバーエラーです');
    }
  } else {
    res.status(409).send('データが既に存在するので保存しません');
  }
});

module.exports = router;
