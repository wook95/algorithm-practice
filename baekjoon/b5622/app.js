const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');



function changeToNum(char){
  if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=67) return 2;
  else if(char.charCodeAt(0)<=70) return 3;
  else if(char.charCodeAt(0)<=73) return 4;
  else if(char.charCodeAt(0)<=76) return 5;
  else if(char.charCodeAt(0)<=79) return 6;
  else if(char.charCodeAt(0)<=83) return 7;
  else if(char.charCodeAt(0)<=86) return 8;
  else if(char.charCodeAt(0)<=90) return 9;
}



let result=0;
for(let i=0; i<input.length; i++){
  result += changeToNum(input[i]);
}
  result += (input.length);

  console.log(result);
