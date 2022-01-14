const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// input = input.map((item)=> item.split(' '));
// input = input.map((item)=> (item.map((v)=>+v)));


let arr = [];
for(let i=1; i<input.length;i++){
    arr.push(input[i].split(' ').map((v)=>+v));
}



for(let i=0; i<arr.length; i++){

    let prev=0;
    let avg=0;
    let highStudent=0;

    for(j=1; j<arr[i].length; j++){
        prev+=arr[i][j];
    }
    avg= prev/(arr[i][0]);
    

    for(j=1;j<arr[i].length;j++){
        if(arr[i][j]>avg) highStudent++;
    }
    
    let key = (highStudent/arr[i][0]*100).toFixed(3);
    console.log(key+'%');
    

}