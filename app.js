// function sunNumbers(numbers){
//     // O(1)
//     return numbers[0]+numbers[1]+numbers[2]
// }

// numbers = [1, 3, 10];
function sumNumbers(numbers) {
    let result = 0; // 1
    for (const number of numbers) { // 1
      console.log('...') //3 => n
      result += number; //3 => n
    }
    return result;  // 1
//   return numbers.reduce((sum, curNum) => sum + curNum, 0);
}

// T = 1+1+1+n+n = 3 + 2n = 3 + 2*n
// T = 2*n
// T = n => O(n) => Linear Time Complexity

console.log(sumNumbers([1, 3, 10, 50]));
