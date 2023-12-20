const router = require('express').Router();
const knex = require('./knex.js');

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

router.post('/b', async (req, res) => {
  try {
    console.log('thecherのPOST');
    res.status(200).send('thecherのPOST');
  } catch (error) {}
});

router.put('/c', async (req, res) => {
  try {
    console.log('thecherのPUT');
    res.status(200).send('thecherのPUT');
  } catch (error) {}
});

router.delete('/d', async (req, res) => {
  try {
    console.log('thecherのDELETE');
    res.status(200).send('thecherのDELETE');
  } catch (error) {}
});

module.exports = router;
