const organizeInstructors = function (instructors) {
  const results = {};

  for (const instuctor of instructors) {
    const { course, name } = instuctor;
    if (!results[course]) {
      results[course] = [];
    } 
      results[course].push(name);
  }
  return results;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);