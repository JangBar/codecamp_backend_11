import {Token} from "./models/tokenSchema.model.js"
import coolsms from 'coolsms-node-sdk'
const mysms = coolsms.default
//------------------------------------------------------------------------------------------
export async function tokenCheck({myToken,token,phone}){
  if(token === null || myToken === null || myToken.phone !==phone || token !== myToken.token ){
    return false
  }else if(token=== myToken.token){
  await Token.updateOne({phone} , {isAuth : true})
    return true
  }
}
//------------------------------------------------------------------------------------------
export async function tokenUpdate({myNum,myToken,phone}){

  if(myNum === null){
  await new Token({ phone , token : myToken , isAuth : false }).save();
    return false
  }else if(myNum !== null){
     await Token.updateOne({phone},{token:myToken})
     return true
  }
}
//------------------------------------------------------------------------------------------
export function typeCheck(myphone){
  
    let str;
    for(let a=0;a<myphone.length;a++){

      let num = Number(myphone[a])

      switch(num){
        case 0: case 1: case 2: case 3:  
        case 4: case 5: case 6: case 7: 
        case 8: case 9: str =1; break; 
        default:  str=0; break; 
      }

      if(str===0){
        console.log("빈칸이나 문자가 포함되어있습니다")
        return false;
      }
    }
  }
//------------------------------------------------------------------------------------------

export function checkPhone(myPhone){
    if(myPhone.length < 10 || myPhone.length > 11) {
        console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!")
        return false
    } else {
        return true
    }
}
//------------------------------------------------------------------------------------------

export function getToken(){
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    return result
}
//------------------------------------------------------------------------------------------

export async function sendTokenToSMS(myPhone, result){
    const apiKey = process.env.SMS_KEY;
    const apiSecret = process.env.SMS_SECRET;
    const sender = process.env.SMS_SENDER;

    const messageService = new mysms(apiKey, apiSecret)
    const res = await messageService.sendOne({
        to: myPhone,
        from: sender,
        text: `[코드캠프] 안녕하세요? 요청하신 인증번호는 ${result} 입니다.`
    })
    console.log(res)
}
