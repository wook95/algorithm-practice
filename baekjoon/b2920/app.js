const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((V)=> +V);



let asd = 0;
let dec= 0;
let mix= 0;


for(let i=0; i<input.length; i++){
    if (input.indexOf(i+1)===i){
        asd++;
    }
    else if(input.indexOf(i+1)===(7-i)){
        dec++;
    }else mix++;



}

if (asd===8){
    console.log('ascending');
}
else if(dec===8){
    console.log('descending');
}else{
    console.log('mixed');
}


