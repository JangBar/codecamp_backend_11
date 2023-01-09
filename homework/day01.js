function checkNumber(number){

  let arr=number.split("-")
  let start_6=number.substr(0,5)
  let end_7=number.slice(-7,13)

  if(arr[0].length === 6 && arr[1].length === 7  && number[6]=== "-" ){
    return "a"
  }else if(start_6.length !== 6 && end_7.length !== 7){
    return "b"
  }else if(number[6] !== "-"){
    return "c"
  }
}

function checkStar(number){
  let result = number.substr(0,8).padEnd(14,"*");
  return result;
}

function checkResult(isValid1,isValid2){
  switch(isValid1){
    case "a": console.log(isValid2);   
              break;
    case "b": console.log("에러발생!!! 개수를 제대로 입력해주세요!!!");   
              break;
    case "c": console.log("에러발생!!! 형식이 올바르지 않습니다!!!");    
              break;
  }
}

function customRegistrationNumber(number){

  const isValid1 = checkNumber(number)

  const isValid2 = checkStar(number)

  checkResult(isValid1,isValid2)

}
  customRegistrationNumber("2105101010101")