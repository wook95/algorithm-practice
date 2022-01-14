const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');



let num1 = +input[0].split('').reverse().join('');
let num2 = +input[1].split('').reverse().join('');



if(num1>num2) console.log(num1);
else console.log(num2);