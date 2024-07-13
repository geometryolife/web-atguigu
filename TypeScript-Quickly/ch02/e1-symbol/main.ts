// 作为对象属性类型的 Symbol
const ord = Symbol('orderID');      // 创建一个新 Symbol

const myOrder = {
  ord: "123" // 将 Symbol 用作对象的属性
};

console.log(myOrder['ord']);