const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const testCaseArray= [];
for(let i =0;i<input[0];i++){
  const tempValue =  input[i+1].split(' ').map((item)=>+item);
  testCaseArray.push({A : tempValue[0], B : tempValue[1]});
}
//input = input.split(' ').map((item)=>+item);
// input = input.map((item)=> +item);

solution(+input[0],testCaseArray);

function solution(num,testCaseArray){
    for(let i=0; i<num; i++){
        const A = testCaseArray[i].A;
        const B = testCaseArray[i].B;
        console.log(A+B);
    }
}