function solution(s){
  var answer = true;
  let s1 = s.toLowerCase()
  let arr = s1.split("")
  let p=0;
  let y=0;
  arr.forEach((str)=>{
      str.includes("p")? p+=1 : str.includes("y")? y+=1 : "";
  });
  
  if(p !== y){
      answer = false;
  }
  
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log('Hello Javascript')

  return answer;
}