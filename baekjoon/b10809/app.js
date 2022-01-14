const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

const arr = [];

for(let i=97; i<123; i++){
  arr.push(String.fromCharCode(i));
}

console.log(input);
console.log(arr);


for(let i =0; i<arr.length; i++){


console.log(input.indexOf(arr[i]));


}