const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((v)=>+v);

//console.log(input);



//   function f(n){
//       if(n===1) return 1;
//   return f(n-1)+(6*(n-1));
// }


let recur = 1,i=1;


while(recur<input[0]){

recur += (6*i);
++i;
}

console.log(i);