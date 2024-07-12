const myArray = [1, 2, 3, 4, 5];

console.log("The sum of myArray elemens is " + myArray.reduce((a, b) => a + b));

console.log("The even numbers in myArray are " + myArray.filter(value => value % 2 === 0));

// The sum of myArray elemens is 15
// The even numbers in myArray are 2,4

// this 指向不同的对象
function StockQuoteGenerator(symbol) {
  this.symbol = symbol;
  console.log(`this.symbol=${this.symbol}`);

  setInterval(function () {
    console.log(`The price of ${this.symbol} is ${Math.random()}`);
  }, 1000);
}
const stockQuoteGenerator = new StockQuoteGenerator("IBM");

// this.symbol=IBM
// The price of undefined is 0.7670705816405705
// The price of undefined is 0.11073022289924861
// The price of undefined is 0.9057232438853648
// The price of undefined is 0.4342640138606444
// The price of undefined is 0.03808420956409142