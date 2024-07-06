// 提升一个变量声明

console.log("例子一");

function foo() {
  console.log("i = " + i);

  for (var i = 0; i < 10; i++) { } // 将 i 提升到函数顶部

  console.log("i = " + i);
}
// console.log("i = " + i); // Cannot find name 'i'.

foo();

console.log("例子二");

var customer = "Joe";
(function () {
  console.log("The name of the customer inside the function is " + customer);
})();
console.log("The name of the customer inside the function is " + customer);

console.log("例子三");

var customer = "Joe";
(function () {
  console.log("The name of the customer inside the function is " + customer);
  // 函数内外声明同名变量，导致冲突
  if (true) {
    var customer = "Mary";
  }
})();
console.log("The name of the customer inside the function is " + customer);

// 例子一
// i = undefined
// i = 10
// 例子二
// The name of the customer inside the function is Joe
// The name of the customer inside the function is Joe
// 例子三
// The name of the customer inside the function is undefined
// The name of the customer inside the function is Joe

console.log("函数例子");

doSomething();

function doSomething() {
  console.log("I'm doing something");

}


// doSomething2();

// var doSomething2 = function () {
//   console.log("I'm doing something");

// }
