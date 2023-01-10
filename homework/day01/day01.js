// # 1. 주민번호 만들기

// 1. 주민번호 뒷자리를 가리는 함수(customRegistrationNumber)를 하나 만들고, 해당 함수에 “210510-1010101” 와 같이 
//    주민번호를 넣어서 실행하면 “210510-1******” 와 같은 형태로 콘솔에 출력되도록 만들어 주세요.
//     a. 주민번호 가운데가 ”-”로 구성되어야 합니다. 
//         - 그렇지 않을 경우 에러 메세지를 콘솔에 출력해 주세요.
            
//             ex) ”에러 발생!!! 형식이 올바르지 않습니다!!!”
            
//     b. 주민번호는 앞 6자리, 뒤 7자리로 구성되어야 합니다.
//         - 그렇지 않을 경우 에러 메세지를 콘솔에 출력해 주세요.
            
//             ex) ”에러 발생!!! 개수를 제대로 입력해 주세요!!!”
            
//     c. 뒤 7자리 중, 끝 6자리는 *로 변경해서 콘솔에 출력해 주세요.
//     d. 함수는 퍼사드 패턴이 적용되어야 합니다. 
//         - 필요시 새로운 파일도 생성 가능합니다. - 파일명 자유


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