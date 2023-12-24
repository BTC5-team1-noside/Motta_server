// ✨subjectsを作成用のヘルパー関数
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

    if (index === -1) {
      subjects.push(obj);
    } else {
      subjects[index]['belongings'].push(el['belonging_name']);
    }
  });

  return subjects;
};

// timetables-historyテーブルに保存するデータ
const createInsertTimeTablesHistory = (bodySubjects, subjectNames, date) => {
  //   console.log('subjectNames', subjectNames);
  //   console.log('bodySubjects', bodySubjects);
  return bodySubjects.reduce((a, b) => {
    a.push({
      subject_id: subjectNames.indexOf(b['subject_name']) + 1,
      period: b['period'],
      date: date,
    });
    return a;
  }, []);
};

const createInsertItemsHistory = (bodyItems, everydayItems, date) => {
  // items_historyテーブルに保存する日常品のデータ
  console.log(bodyItems, everydayItems, date);
  const insertItemsHistory = [];

  bodyItems.forEach((el) => {
    insertItemsHistory.push({
      item_name: el,
      everyday_items: everydayItems,
      date: date,
    });
  });

  return insertItemsHistory;
};

module.exports = {
  createSubjects,
  createInsertTimeTablesHistory,
  createInsertItemsHistory,
};
