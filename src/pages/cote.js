const s = "MCMXCIV";
const rom = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToNum(s) {
  const strs = s.split("").map((item) => rom[item]);
  let item = 0;
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] > strs[i + 1]) {
      item += strs[i + 1] + strs[i];
    }
    return (item += strs[i + 1] - strs[i]);
  }
  console.log(item);
}
romanToNum(s);
