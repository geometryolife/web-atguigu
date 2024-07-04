function getFinalPrice(price: number, discount: number) {
  return price - price / discount;
}

console.log(getFinalPrice(100, 10));
console.log(100, "10%");
