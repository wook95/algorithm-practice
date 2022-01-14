const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = +input[0];


function isHansu(num){

    arr = [];
    hansu=true;
    arr = num.toString().split('').map((val)=>+val);
    
    let standard = arr[1]-arr[0]
    for( let i=0; i<arr.length-1;i++){
        
        if ((arr[i+1] - arr[i]) !==standard) hansu =false;

    }

    return hansu
}



function calculateHansu(num){
    
    let sum=0;
    
    for( let i =1; i<=num; i++){
        
        if(isHansu(i)) sum++;
    }
    
    console.log(sum);
}


calculateHansu(input);