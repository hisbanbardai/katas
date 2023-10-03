const getMonthName = function (monthNum){
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return months[monthNum - 1];
}

const getDateWithSuffix = function(dateNum){
  const suffix_st = [1, 21, 31];
  const suffix_nd = [2, 22];
  const suffix_rd = [3, 23];

  const date = Number(dateNum);
  if (suffix_st.includes(date)) {
    return `${date}st`;
  }
  if (suffix_nd.includes(date)) {
    return `${date}nd`;
  }
  if (suffix_rd.includes(date)) {
    return `${date}rd`;
  }
  
  return `${date}th`;
}

const talkingCalendar = function (date) {
  //Spliting date, month and year
  const dateArray = date.split('/');

  const monthNum = dateArray[1];
  const month = getMonthName(monthNum);
  
  const dateNum = dateArray[2];
  const dateWithSuffix = getDateWithSuffix(dateNum);
  
  return `${month} ${dateWithSuffix}, ${dateArray[0]}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("2022/01/01"));
console.log(talkingCalendar("1994/09/26"));
console.log(talkingCalendar("1987/02/03"));