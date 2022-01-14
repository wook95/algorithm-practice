const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().toUpperCase().split('');
let notDup = input.filter((val,idx)=> { return input.indexOf(val) ===idx;});


//단어공부 1157번
let sum = [];


for(let j=0; j<notDup.length; j++){   
    sum[j]=0;
    for(let i =0; i<input.length;i++){
        if(notDup[j]===input[i]) sum[j]++;
    }
}


// console.log(sum);
let max = sum[0];
let dup = false;

for(let i =0; i<sum.length;i++){

    if(sum[i] > max){
        max = sum[i];
    }
}



for(let i =0; i<sum.length;i++){


    for(let j=i+1; j<sum.length;j++){
        if(max === sum[j] && j!==sum.indexOf(max)) dup=true;
        break;
    }


}


if(!dup){
console.log(notDup[sum.indexOf(max)]);}
else{
    console.log('?');
}