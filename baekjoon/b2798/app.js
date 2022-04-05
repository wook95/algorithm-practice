const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const targetNumber = input[0].split(' ')[1];
const numberArray = input[1].split(' ').map(number => +number);

const addAllKindsOfNumbers = array => {
  const resultArray = [];

  for (let i = 0; i < array.length - 2; i++) {
    let sum = 0;
    for (let j = i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        let sum = array[i] + array[j] + array[k];
        resultArray.push(sum);
      }
    }
  }
  return resultArray;
};

const searchClosestNumber = (targetNumber, array) => {
  const sortedArray = array.sort((a, b) => b - a);
  const closestNumber = sortedArray.find(number => number <= targetNumber);
  return closestNumber;
};

console.log(
  searchClosestNumber(targetNumber, addAllKindsOfNumbers(numberArray))
);
