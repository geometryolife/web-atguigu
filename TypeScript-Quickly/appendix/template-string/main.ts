function currentAdjustment(stringParts, region, amount) {
  console.log(stringParts);
  console.log(region);
  console.log(amount);

  let sign;
  if (region === 1) {
    sign = "$"
  } else {
    sign = '\u20AC'; // 欧元符号
    amount = 0.9 * amount; // 兑换成欧元的汇率是 0.9
  }

  return `${stringParts[0]}${sign}${amount}${stringParts[2]}`;
}

const amount = 100;
const region = 2; // 欧洲：2，美国：1
const message = currentAdjustment`You've earned ${region} ${amount}!`

console.log(message);

// [ "You've earned ", ' ', '!' ]
// 2
// 100
// You've earned €90!