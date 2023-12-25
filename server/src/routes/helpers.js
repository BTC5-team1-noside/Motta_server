// ✨subjectsの作成用
const createSubjects = (subjectList) => {
  const subjects = [];

  subjectList.forEach((el) => {
    const obj = {
      period: el['period'],
      subject_name: el['subject_name'],
      belongings: [el['belonging_name']],
    };

    const periodArr = subjects.map((e) => e['period']);
    const index = periodArr.indexOf(el['period']);
    // データが無ければ、objごとpushして、データが有ればobjの中のbelongingsに持ち物を追加
    if (index === -1) {
      subjects.push(obj);
    } else {
      subjects[index]['belongings'].push(el['belonging_name']);
    }
  });

  return subjects;
};

// ✨timetables_historyテーブルに保存するデータ
const createInsertTimeTablesHistory = (bodySubjects, subjectNames, date) => {
  return bodySubjects.map((el) => ({
    subject_id: subjectNames.indexOf(el['subject_name']) + 1,
    period: el['period'],
    date: date,
  }));
};

// ✨items_historyテーブルに保存するデータ
const createInsertItemsHistory = (bodyItems, everydayItems, date) => {
  return bodyItems.map((el) => ({
    item_name: el,
    everyday_items: everydayItems,
    date: date,
  }));
};

module.exports = {
  createSubjects,
  createInsertTimeTablesHistory,
  createInsertItemsHistory,
};
