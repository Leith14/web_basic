// Fun with numbers
/* 
1. Explore math algorithms
2. Get a better feeling for big O notation
3. How to solve problems
*/

// The Fibonacci Sequence
// [1,1,2,3,5,8,13,21,34,55,89,144,...]

function fib(n) {
  const numbers = [1, 1]; // 1
  for (let i = 2; i < n + 1; i++) { // 1
    console.log('Running')  // n - 1
    numbers.push(numbers[i - 2] + numbers[i - 1]); // n - 1
  }
//   console.log(numbers)
  return numbers[n]; // 1
}

// T = 1 + 1 + 1 + 2* (n - 1) = 3 + 2n - 2 = 1 + 2n
// => O(n) => Linera Timer Complexity
console.log(fib(4));
// console.log(fib(5));

