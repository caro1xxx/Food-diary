export const current = new Date();
// 年缓存
export let yearCache = null;
const thirtyMonth = [2, 4, 6, 9, 11];
// 一周日期
function weeksDate(d) {
  let week = d.getDay();
  let current = week;
  let weeks = [];
  for (let i = week, j = 0; i < 7; i++, j++) {
    weeks[i] = current + j;
  }
  for (let i = week - 1, j = 1; i >= 0; i--, j++) {
    weeks[i] = current - j;
  }
  return [weeks, current];
}

export default weeksDate;

// 当前日期
export const getCurrentDate = () => {
  const d = new Date();
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()];
};

export const cacultionDate = (year, month, type) => {
  switch (type) {
    case "day":
      if (month === 2) {
        if ((year % 4 === 0 && year & (100 !== 0)) || year % 400 === 0) {
          return 29;
        } else {
          return 28;
        }
      }
      if (thirtyMonth.includes(month) < 1) {
        return 31;
      } else {
        return 30;
      }
    case "month":
      return 12;
    case "year":
      return 100;
  }
};

export const createYear = (currentYear) => {
  let year = [];
  for (let i = currentYear; i < currentYear + 20; i++) {
    year.push(i);
  }
  return year;
};

export const formatDate = (date) => {
  return `${date[0]}-${date[1]}-${date[2]}`;
};
