const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N,X] = input[0].split(' ').map((item)=> +item);
const arr = input[1].split(' ').map((item)=> +item);


solution(X,arr);

function solution(X,arr){

    let newArr = [];
    for(let i=0; i<arr.length;i++){

        if(arr[i]<X){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}

// input = input.map((item)=> +item);
// input = input.split(' ').map((item)=> +item);

