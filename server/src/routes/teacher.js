const router = require('express').Router();
const knex = require('./knex.js');

// 1.GET:持ち物登録画面で各曜日に設定された教科を呼び出して表示したい
router.get('/subjects/:date', async (req, res) => {
  const date = req.params.date;

  // 履歴がない場合

  // 履歴がある場合

  // dateを元に3つのテーブル(timetables_history,belongings,subjects)から時間割や持ち物データ取得
  const subjectIdList = await knex('timetables_history')
    .where({
      date: date,
    })
    .join(
      'belongings',
      'timetables_history.subject_id',
      '=',
      'belongings.subject_id'
    )
    .join('subjects', 'timetables_history.subject_id', '=', 'subjects.id');

  console.log(subjectIdList);

  // 受け取ったデータを時間割順に並べる
  const periodSortList = subjectIdList.sort(
    (a, b) => a['period'] - b['period']
  );

  // subjectsを作成
  const subjects = [];
  periodSortList.forEach((el) => {
    // push用のobjを作る
    const obj = {
      period: el['period'],
      subject_name: el['subject_name'],
      belongings: [el['belonging_name']],
    };

    const periodArr = subjects.map((e) => e['period']); // periodだけの配列を作る
    const index = periodArr.indexOf(el['period']); // periodがあるかチェックするためのindexを用意

    if (index === -1) {
      subjects.push(obj);
    } else {
      subjects[index]['belongings'].push(el['belonging_name']);
    }
  });

  // items_historyテーブルから日常的に使う持ち物の名前を取得
  const itemList = await knex('items_history')
    .select('item_name')
    .where({ date: date });

  // itemsを作成
  const items = itemList.map((el) => el['item_name']);

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
