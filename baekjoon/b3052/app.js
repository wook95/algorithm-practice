const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item)=> +item);



let solution = function(nums){

    let arr = [];

    for (num of nums){
        arr[arr.length]=(num%42);
    }

    arr = arr.filter( (item,idx) => arr.indexOf(item) === idx);
    
    

    console.log(arr.length);
}


solution(input);