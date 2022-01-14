const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


input = input[0].toString().split(' ').map((item)=> +item);


// input = input.map((item)=> +item);
// input = input.split(' ').map((item)=> +item);

solution(input[0]);

function solution(num){

    let star ='*';
    for(let i=0; i<num-1; i++){
        star = ' ' + star;
    }




    star = Array.from(star);
    for(let i=0; i<num; i++){
        star.splice(num-i-1,1,'*');
        console.log(star.join(''));
    }
}
