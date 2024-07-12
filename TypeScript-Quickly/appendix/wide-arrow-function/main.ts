// 使用宽箭头函数
function StockQuoteGenerator(symbol) {
  this.symbol = symbol; // this.symbol 在 getQuote() 方法中是未声明的
  console.log("this.symbol=" + this.symbol);
  setInterval(() => console.log(`The price of ${this.symbol} is ${Math.random()}`), 1000);
}

const stockQuoteGenerator = new StockQuoteGenerator("IBM");

// this.symbol=IBM
// The price of IBM is 0.04789323247919142
// The price of IBM is 0.6799589508262118
// The price of IBM is 0.14916449994147118
// The price of IBM is 0.6030113782633111
// The price of IBM is 0.21691555341891533