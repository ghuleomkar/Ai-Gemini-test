function calculateTotal(price, quantity) {
  let total = price * quantity;

  if (total > 1000) {
    total = total - 100;
  }

  return total;
}

console.log(calculateTotal(500, 3));
