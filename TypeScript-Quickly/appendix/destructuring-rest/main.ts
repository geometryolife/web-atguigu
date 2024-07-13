// 结合解构和 rest 运算符
const msft = {
  symbol: "MSFT",
  lastPrice: 50.00,
  exchange: {
    name: "NASDAQ",
    tradingHours: "9:30am-4pm"
  }
};

const { lastPrice, ...otherInfo } = msft;

console.log(`lastPrice = ${lastPrice}`);
console.log(`otherInfor = ${otherInfo}`);
console.log(`otherInfor = ${otherInfo.exchange.name}`);

// lastPrice = 50
// otherInfor = [object Object]
// otherInfor = NASDAQ