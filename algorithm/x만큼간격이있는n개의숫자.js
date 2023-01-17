function solution(x, n) {
  
  var answer = [];
  let num = x * n 
  let str =0

if(x<0){
    for(let b=x;b>=num;b+=x){
      answer[str]=b
      str+=1;
  }}else{ for(let b=x;b<=num;b+=x){
      answer[str]=b
      str+=1;
}};
  return answer;
}