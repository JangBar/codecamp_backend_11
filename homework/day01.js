function checkNumber(number){

  let arr=[...number]
  let arr1=number.split("-")

  let str1=number.substr(0,5)
  let str2=number.slice(-7,13)

  if(arr1[0].length === 6 && arr1[1].length === 7  && arr[6]==="-"){
    return "a"
  }else if(str1.length !== 6 && str2.length !== 7){
    return "b"
  }else if(arr[6] !=="-"){
    return "c"
  }
}

function checkStart(number){
let str = number.substr(0,8).padEnd(14,"*");
return str;
}

function checkEnd(isValid1,isValid2){
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

  const isValid2 = checkStart(number)

  checkEnd(isValid1,isValid2)

}
  customRegistrationNumber("210510-112010101")