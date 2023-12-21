const router = require('express').Router();
const knex = require('./knex.js');
const moment = require('moment-timezone');

// 1.GET:翌日の各教科の持ち物の名前を受け取って音声で読み上げる、画面にもテキスト表示する
router.get('/timetables-history/:date', async (req, res) => {
  const date = req.params.date;
  const obj = {
    selectedDate: '2023-12-20',
    subjects: [
      {
        period: 1,
        subject: '国語',
        belongings: ['国語の教科書', '漢字ドリル', '国語のノート'],
      },
      {
        period: 2,
        subject: '算数',
        belongings: ['算数の教科書', '算数ドリル', '算数のノート', 'そろばん'],
      },
    ],
    items: ['体操着', 'エプロン', '箸入れ'],
  };

  try {
    console.log(
      '1.GET:翌日の各教科の持ち物の名前を受け取って音声で読み上げる、画面にもテキスト表示する'
    );
    console.log('dateは:', date);
    res.status(200).send(obj);
  } catch (error) {}
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

  // 確認したいデータがデータベースに存在しない場合のみ挿入
  const existingData = await knex('confirms_history')
    .where({
      student_id: studentId,
      date: checkDate,
    })
    .select();

  if (existingData.length === 0) {
    // データベースに存在しない場合のみ挿入
    await knex('confirms_history').insert({
      student_id: studentId,
      date: checkDate,
    });

    try {
      console.log('3.POST:カレンダーにスタンプを押す');
      console.log('dateObjは:', req.body);
      res.status(200).send('POST成功〜');
    } catch (error) {
      // エラーハンドリング
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    // データが既に存在する場合の処理
    res.status(409).send('データが既に存在します');
  }
});

module.exports = router;
