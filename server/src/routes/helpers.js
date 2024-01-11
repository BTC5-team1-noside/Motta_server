const moment = require('moment-timezone');

// ✨subjectsの作成用
const createSubjects = (subjectList, subjectItem) => {
  const subjects = [];

  subjectList.forEach((el) => {
    const obj = {
      [subjectItem]: el[subjectItem],
      subject_name: el['subject_name'],
      belongings: [el['belonging_name']],
    };

    const periodArr = subjects.map((e) => e[subjectItem]);
    const index = periodArr.indexOf(el[subjectItem]);
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

// ✨timetablesの作成用
const createTimetables = (timetableList, subjectNames) => {
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

  const timetables = {
    timetableList: result,
    subjectNames: subjectNames,
  };

  return timetables;
};

// ✨eventsの作成用
const createEvents = (eventList) => {
  const events = [];

  eventList.forEach((el) => {
    const obj = {
      event_name: el['event_name'],
      itemNames: [el['item_name']],
      date: moment(el['date']).local('ja').format('YYYY-MM-DD'),
    };

    const periodArr = events.map((e) => e['event_name']);
    const index = periodArr.indexOf(el['event_name']);
    // データが無ければ、objごとpushして、データが有ればobjの中のitemNamesに持ち物を追加
    if (index === -1) {
      events.push(obj);
    } else {
      events[index]['itemNames'].push(el['item_name']);
    }
  });

  return events;
};

// ✨studentsの作成用
const createStudents = (
  confirmsHistoryList,
  timeTablesHistoryDates,
  students,
  date
) => {
  const studentsHistory = [];

  students.forEach((el) => {
    const obj = {
      student_id: el['id'],
      student_name: el['student_name'],
      character_id: el['git ad'],
      checkedInventory: false,
    };

    const index = confirmsHistoryList.indexOf(el['id']);

    if (index !== -1) {
      obj['checkedInventory'] = true;
    }
    studentsHistory.push(obj);
  });

  return {
    selectedDate: date,
    timeTablesHistoryDates: timeTablesHistoryDates,
    studentsHistory: studentsHistory,
  };
};

module.exports = {
  createSubjects,
  createInsertTimeTablesHistory,
  createInsertItemsHistory,
  createTimetables,
  createEvents,
  createStudents,
};
