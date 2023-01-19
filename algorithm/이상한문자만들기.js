function solution(s) {
  var answer = '';

  let str = s.split(" ")

  for(let a=0;a<str.length;a++){
    for(let b=0;b<str[a].length;b++){
      if(str[a][b].indexOf(str[a][b])%2===0){
        answer+=str[a][b].toUpperCase()
        console.log(answer)
      }
    }
  }



  return answer;
}