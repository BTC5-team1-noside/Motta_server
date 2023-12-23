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

module.exports = {
  createSubjects,
};
