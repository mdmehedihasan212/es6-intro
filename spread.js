const numbers = [20, 56, 24, 75, 37];
// console.log(numbers);
// console.log(...numbers);

// const maxNum = Math.max(11, 32, 56, 25, 99);
// console.log(maxNum);

// const maxNum2 = Math.max(...numbers);
// console.log(maxNum2);

const numbers2 = [...numbers, 88];
numbers.push(99);
console.log(numbers2);