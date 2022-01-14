const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

    const N = +input[0];
    const X = input[1].toString().split(' ').map((item)=> +item);



    let solution = function(num,subject){

        let max = Math.max(...subject);

        
        subject = subject.map( (item) => item/max*100);
        
        const result = subject.reduce((prev,curv,idx)=>prev+=curv);

        console.log(result/num);

    }

solution(N,X);
