export class TokensPhoneController{

      constructor(tokens_phoneService){
        this.tokens_phoneService=tokens_phoneService
      }


  number_send = async (req, res)=>{
  
    const {phone} =  req.body
  
    const isValid0 = this.tokens_phoneService.typeCheck(phone)                          // 휴대폰번호가 문자나 빈칸이 없는지 체크한다.
    if(isValid0 === false) return
  
    const isValid1 = this.tokens_phoneService.checkPhone(phone);                        // 휴대폰 번호 자릿수 맞는지 확인한다.(10~11자리)
    if(isValid1 === false) return;
  
    const myToken = this.tokens_phoneService.getToken();                                // 휴대폰 토큰(인증번호)을 6자리 만든다.
    
    this.tokens_phoneService.sendTokenToSMS(phone,myToken);                            // 받은 휴대폰 번호로 인증번호를 전송한다.
  
    let myNum = await this.tokens_phoneService.myNum(phone)

    await this.tokens_phoneService.tokenUpdate({myNum,myToken,phone})                         // 토큰을 업데이트한다.
      res.send('핸드폰으로 인증 문자가 전송되었습니다~📨')
  }

  number_check =  async(req, res)=>{

    const {token,phone} = req.body
    const myToken = await this.tokens_phoneService.myToken(phone);
  
    let isValid = await this.tokens_phoneService.tokenCheck({myToken,token,phone})     // 인증번호를 검사합니다.
    
    if(isValid === false){
      res.send("fales😡");
    }else if(isValid === true){
      res.send("true😎");
    }
  }
}