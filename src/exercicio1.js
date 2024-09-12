const calculateFibonacciSequence = (n) => {
  if (n === 1 || n === 0) {
    return true;
  }

  let a = 0;
  let b = 1;
  let currentSum = 0;

  while (currentSum < n) {
    currentSum = a + b;
    a = b;
    b = currentSum;
  }
  
  return currentSum === n;
}

console.log(calculateFibonacciSequence(34));

module.exports = calculateFibonacciSequence;