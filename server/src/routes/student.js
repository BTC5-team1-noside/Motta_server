const router = require('express').Router();
const knex = require('./knex.js');

router.get('/timetable-history/:date', async (req, res) => {
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
      '1.GET:翌日の各教科の持ち物の名前を受け取って音声で読み上げる、画面にもテキスト表示する為。'
    );
    console.log('dateは:', date);
    res.status(200).send(obj);
  } catch (error) {}
});

router.get('/confirm-history/:date', async (req, res) => {
  const date = req.params.date || '2023-12-13';
  const arr = [
    ['2023-12-1', '2023-12-2', '2023-12-3', '2023-12-4', '2023-12-5'],
  ];
  // arrを使って、フロントで該当する日付にスタンプを表示してください
  try {
    console.log('2.GET:カレンダーにスタンプを一覧表示したい');
    console.log('dateは:', date);
    res.status(200).send(arr);
  } catch (error) {}
});

router.post('/confirm-history/:date', async (req, res) => {
  const dateObj = req.body; // 想定body: {id: 1, date: "2023-12-18"}

  try {
    console.log('3.POST:カレンダーにスタンプを押す');
    console.log('dateObjは:', dateObj);
    res.status(200).send('POST成功〜');
  } catch (error) {}
});

// router.delete('d', async (req, res) => {
//   try {
//     console.log('接続を確認');
//     res.status(200).send('stundentのDELETE');
//   } catch (error) {}
// });

module.exports = router;