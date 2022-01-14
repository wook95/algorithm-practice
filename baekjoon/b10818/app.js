const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map((item)=> +item);



let solution = function(nums){
    
    let max =nums[0];
    
    for(num of nums){
        if(num>= max) {
            max=num;
        }
    }

    

    console.log(max);
    console.log(nums.indexOf(max)+1);    
}

solution(input);