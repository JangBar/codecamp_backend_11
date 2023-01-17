function solution(n)
{
    var answer = 0;
    let num = n+"";
    for(let a=0;a<num.length;a++){
      
      answer+=Number(num[a])
    }
    
    console.log('Hello Javascript')

    return answer;
}