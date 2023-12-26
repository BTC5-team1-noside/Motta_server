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

// ✨scheduleの作成用
const createSchedule = (timetableList, subjectNames) => {
  const result = [];

  timetableList.forEach((el) => {
    const obj = {
      day: el['day'],
      subjects: [{ period: el['period'], subject_name: el['subject_name'] }],
    };

    const checkArr = result.map((e) => e['day']);
    const index = checkArr.indexOf(el['day']);

    if (index === -1) {
      result.push(obj);
    } else {
      result[index]['subjects'].push({
        period: el['period'],
        subject_name: el['subject_name'],
      });
    }
  });

  const schedule = {
    timetableList: result,
    subjectNames: subjectNames,
  };

  return schedule;
};

module.exports = {
  createSubjects,
  createInsertTimeTablesHistory,
  createInsertItemsHistory,
  createSchedule,
};
