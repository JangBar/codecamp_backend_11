import coolsms from 'coolsms-node-sdk'
const mysms = coolsms.default

export function checkPhone(myPhone){
    if(myPhone.length < 10 || myPhone.length > 11) {
        console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!") // early-exit (일찍 종료시키는 것)
        return false
    } else {
        return true
    }
}

export function getToken(){
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(result)
    return result // 값 반환 역할의 리턴
}

export async function sendTokenToSMS(myPhone, result){
    const SMS_KEY = process.env.SMS_key;
    const SMS_SECRET = process.env.SMS_secret;
    const SMS_SENDER = process.env.SMS_sender;

    const messageService = new mysms(SMS_KEY, SMS_SECRET)
    const res = await messageService.sendOne({
        to: myPhone,
        from: SMS_SENDER,
        text: `[코드캠프] 안녕하세요? 요청하신 인증번호는 ${result} 입니다.`
    })
    console.log(res)
    // console.log(myPhone + "번호로 인증번호" + result + "를 전송합니다.")
}


//export default : 이 파일 전체에서 기본값으로 이 폴더를 가지고 오겠다.
// 디폴트는 1개밖에 사용 못함 (중복 사용 불가)
