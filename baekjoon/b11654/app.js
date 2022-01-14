const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');





let arr = [];
for (let i=0; i<input.length; i++){

    if( input[i].split(' ').length>1){
        arr.push(input[i].split(' '));
    }

}



for(let i=0; i<arr.length;i++){

    let targetArr = [];
    let target =  arr[i][1];
    
    for(let k=0; k<target.length; k++){
        for(let j=0; j<(+arr[i][0]); j++){ 
            targetArr.push(target[k]);
        }
    }
    
    console.log(targetArr.join(''));
    

}