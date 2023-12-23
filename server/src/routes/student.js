const router = require('express').Router();
const knex = require('./knex.js');
const moment = require('moment-timezone');

const {
  checkHistory,
  getSubjectList,
  createSubjectsList,
  createItems,
} = require('./helpers.js');

// 🚀1.GET:翌日の各教科の持ち物の名前を受け取って音声で読み上げる、画面にもテキスト表示する
router.get('/timetables-history/:date', async (req, res) => {
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
  let dayList = [];

  if (date) {
    // 2023-12-18の日付を2023-12に変換
    const splitDate = date.split('-');
    const formatDate = splitDate[0] + '-' + splitDate[1] + '%';

    // 年と月の部分一致で日付データを複数取得
    const confirmsHistory = await knex('confirms_history')
      .select('date')
      .where({
        student_id: studentId,
      })
      .whereRaw("to_char(date, 'YYYY-MM') like ?", [formatDate]);

    // 日付データを日本時間に変換して配列に格納
    dayList = confirmsHistory.map((el) =>
      moment.utc(el.date).tz('Asia/Tokyo').format('YYYY-MM-DD')
    );
  }

  try {
    console.log('2.GET:カレンダーにスタンプを一覧表示したい');
    res.status(200).send(dayList);
  } catch (error) {}
});

// 🚀3.POST:カレンダーにスタンプを押す
router.post('/confirms-history', async (req, res) => {
  const studentId = req.body.student_id;
  const checkDate = req.body.date;

  // confirms_historyから生徒idに一致するdateを取得
  const existingData = await knex('confirms_history')
    .where({
      student_id: studentId,
      date: checkDate,
    })
    .select();

  // データベースに存在しない場合のみ挿入する
  if (existingData.length === 0) {
    await knex('confirms_history').insert({
      student_id: studentId,
      date: checkDate,
    });

    try {
      console.log('3.POST:カレンダーにスタンプを押す');
      res.status(200).send('POSTリクエストを受け取りました');
    } catch (error) {
      console.error(error);
      res.status(500).send('サーバーエラーです');
    }
  } else {
    res.status(409).send('データが既に存在します');
  }
});

module.exports = router;
