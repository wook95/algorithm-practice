const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map((item)=> +item);



let solution = function(nums){

    let calculated = (nums[0]*nums[1]*nums[2]).toString();

    for(let i=0; i<10;i++){
        
        let sum=0;
        for(char of calculated){
            
            if(char == i){
                sum++;
                // console.log('char ' + char);
                // console.log('i ' + i);

            }
        }
        console.log(sum);

    }



}

solution(input);