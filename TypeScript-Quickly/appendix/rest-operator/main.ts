// ES5 标准和 arguments 对象
function calcTaxES5() {
  console.log("ES5. Calculating tax for customers with the income ", arguments[0]);

  // 从第二个元素开始提取数组元素
  var customers = [].slice.call(arguments, 1);
  customers.forEach(function (customer) {
    console.log("Processing ", customer);
  });
}

calcTaxES5(50000, "Smith", "Johnson", "McDonald");
calcTaxES5(750000, "Olson", "Clinton");

// ES6 标准和其他运算符
function calcTaxES6(income, ...customers) {
  console.log(`ES6. Calculating tax for customers with the income ${income}`);

  customers.forEach((customer) => console.log(`Processing ${customer}`));
}

calcTaxES6(50000, "Smith", "Johnson", "McDonald");
calcTaxES6(750000, "Olson", "Clinton");