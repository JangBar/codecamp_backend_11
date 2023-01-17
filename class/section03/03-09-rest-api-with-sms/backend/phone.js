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
    console.log(result);
    return result;
}
export async function sendTokenToSMS(myphone,result){
  const messageService = new mysms("","")
  const res= await messageService.sendOne({
    to: myphone ,
    from: "01056344443",
    text: `[요청하신 번호] 안녕하세요 뚱보와 뚱뚱보씨`
  })
  console.log(res)

  // console.log(myphone + "번호로 인증번호" + result + "를 전송합니다.");
}

