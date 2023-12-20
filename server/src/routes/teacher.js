const router = require('express').Router();
const knex = require('./knex.js');

// 1.GET:持ち物登録画面で各曜日に設定された教科を呼び出して表示したい
router.get('/subjects/:date', async (req, res) => {
  const date = req.params.date;
  const obj = {
    selectedDate: '2023-12-20(サンプルです。)',
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
      '1.GET:持ち物登録画面で各曜日に設定された教科を呼び出して表示したい'
    );
    console.log('dateは:', date);
    res.status(200).send(obj);
  } catch (error) {}
});

// 2.POST:持ち物登録画面で、その日の科目を新規登録したい。
router.post('/timetable-history/:date', async (req, res) => {
  const date = req.params.date;

  try {
    console.log('2.POST:持ち物登録画面で、その日の科目を新規登録したい。');
    console.log('dateは:', date);
    console.log('bodyは？', req.body);
    res.status(200).send('TeacherのPOST受け取りました');
  } catch (error) {}
});

// 3.PATCH:持ち物登録画面で、その日の科目と日常品を追加したい。
router.patch('/timetable-history/:date', async (req, res) => {
  const date = req.params.date;

  try {
    console.log('3.PATCH:持ち物登録画面で、その日の科目と日常品を追加したい。');
    console.log('dateは:', date);
    console.log('bodyは？', req.body);
    res.status(200).send('TeacherのPATCH受け取りました');
  } catch (error) {}
});

module.exports = router;
