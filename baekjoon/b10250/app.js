const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

//console.log(input);


let solution = function(input){

  for(let i=0; i<input[0];i++){
    let arr = input[i+1].split(' ').map((v)=>+v);
    

    if(arr[2]<=arr[0]){
      console.log((arr[2]+""+0+1));
    }
    else{

      const quotient = Math.ceil(arr[2]/arr[0]);

      if(quotient<10){

      console.log((arr[2]%arr[0]===0?arr[0]:arr[2]%arr[0])+""+0+(quotient));

      }else{
        console.log((arr[2]%arr[0]===0?arr[0]:arr[2]%arr[0])+""+(quotient));
      }


    }


  }

}

solution(input);

