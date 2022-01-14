const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let newinput =[];
for(let i=0; i<input.length-1;i++){
  newinput.push(input[i+1]);
}
input = newinput;
//첫번째 줄 제거


let target = [];

for(let i=0; i<input.length;i++){
  

  let targetElement =  input[i].split('');
  // console.log(targetElement);
  // 입력으로 들어온 단어를 하나씩 받아서 한 글자씩 추출한 배열
  
  for(let j=0; j<targetElement.length; j++){




    if(targetElement[j] !==targetElement[j-1] && targetElement[j] !== targetElement[j+1]){
      // 앞 뒤로 같은 문자가 없다면 if문 통과

    
      for(let k=0; k<targetElement.length; k++){
        if(targetElement[j] === targetElement[k] && j!==k){
          targetElement.push(0);
          //검색을 해서 같은 문자가 나온다면,, 그룹 문자가 아니어서 배열을 변경해줌
        }
      }

      
    }
    
    
  }
  target.push(targetElement.join(''));
  //한글자씩 추출했던 배열을 다시 문자열로 만들어줌
}

console.log(target);
console.log(input);



let sum=0;
for(let i=0; i<input.length; i++){
  if(target[i]===input[i]) sum++;
}
//문자열로 만들어준 배열과 원래의 입력이 같다면 그룹문자
console.log(sum);



