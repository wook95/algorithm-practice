const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((v)=> +v);

//console.log(input);

//고정비용 + 가변비용 *대수 < 가격 * 대수


let solution = function(input){

  let fixed = input[0];
  let va = input[1];
  let price = input[2];


  if(va>=price) {return -1};



  return (Math.ceil(fixed / (price - va)));

}

console.log(solution(input));

console.log((undefined) == true
);