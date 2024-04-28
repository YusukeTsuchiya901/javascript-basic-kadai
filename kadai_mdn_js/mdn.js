const today = new Date();

const [month, day, year] = [
  today.getMonth() + 1, //monthは0から始まるため「+1」
  today.getDate(),
  today.getFullYear(),
];

console.log(year + '年' + month + '月' + day + '日');