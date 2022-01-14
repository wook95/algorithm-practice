const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((item)=>+item);

// input = input.map((item)=> +item);
// input = input.split(' ').map((item)=> +item);

// console.log(input);




 solution(input[0],input[1]);

function solution(A,B) {

    if(B<45){
        A-=1;
        B+=60;
    }
    B-=45;

    if(A<0){
        A+=24;
    }

    console.log(A, B);
}