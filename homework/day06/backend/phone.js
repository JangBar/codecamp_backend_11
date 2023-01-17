import coolsms from "coolsms-node-sdk"
const mysms = coolsms.default

export function checkPhone(myphone){
  if(myphone.length < 10 || myphone.length >11){
    console.log("에러발생 !!! 핸드폰 번호를 제대로 입력해 주세요 !!!"); 
    return false;
  }else{
    return true;
  }
}
export function getToken(){
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
    return result;
}
export async function sendTokenToSMS(myphone,result){
const SMS_KEY = process.env.SMS_KEY;
const SMS_SECRET = process.env.SMS_SECRET;
const SMS_SENDER = process.env.SMS_SENDER;

  const messageService = new mysms(SMS_KEY,SMS_SECRET)
  const res= await messageService.sendOne({
    to: myphone ,
    from: SMS_SENDER,
    text: `[요청하신 번호]: ${result}`
  })
  console.log(res)

}

