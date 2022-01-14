const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// input = input.map((item)=> +item);


for(let i=1; i<input.length;i++){
    //X가 나올땐 0으로 초기화, O일땐 curv+1 , x일땐 curv=0

    let curv=0;
    let prev=0;
    for(let j=0; j<input[i].length;j++){
        if(input[i][j]==='O') {
            curv+=1;
            prev+=curv;
    }else{
        curv=0;
        prev+=curv;
    }
    
}
console.log(prev);
}