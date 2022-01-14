// const fs = require('fs'); l
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// input = input.map((item)=> item.split(' '));
// input = input.map((item)=> (item.map((v)=>+v)));

// var _ = require('lodash');



let makeNum = function(num){
    stringNum = num.toString().split('').map((item)=> +item);
    let sum = stringNum.reduce((prev,curv)=>(prev+=curv)) +num;
    return sum;
}

let makeSelfNum = function(num){

    let arr=[];
    for(let i=1;i<=num;i++){
        arr.push(makeNum(i));
    }
    return arr;
}

let makeNotSelfNum = function(arr){
    
    let answer = [];
    for(let i =1; i<=10000; i++){
        if(arr.indexOf(i)===-1) answer.push(i);
    }

    return answer;

}



let myArr=[];
myArr = makeSelfNum(10000);
myArr = makeNotSelfNum(myArr);
myArr = myArr.join('\n');

console.log(myArr);