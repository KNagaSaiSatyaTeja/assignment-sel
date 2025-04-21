function createCalculator() {
  let currentValue = 0;
  return {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a;
    },
    divide: function (a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    },
  };
}

const calculator = createCalculator();
console.log(calculator.add(2, 3));
console.log(calculator.subtract(5, 2));
console.log(calculator.multiply(2, 3));
console.log(calculator.divide(6, 2));
