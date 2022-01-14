const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


input = input[0].toString().split(' ').map((item)=> +item);



function solution(num){

    let sip = num/10 - (num%10)/10;
    let il = num%10;
    let newNum = sip+il;
    if(newNum>9) newNum-=10;
    newNum=il*10 +newNum;
    let count =1;

    
    while(num!==newNum){
        

        sip = newNum/10 - (newNum%10)/10;
        il = newNum%10;
        newNum=sip+il;
        if(newNum>9) newNum-=10;

        newNum=il*10 + newNum;
        
        count +=1;



    }

    return count;
}

console.log(solution(input[0]));