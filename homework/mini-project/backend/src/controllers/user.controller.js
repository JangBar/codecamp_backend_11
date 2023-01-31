export class UserController{

    constructor(userService){
      this.userServiceser=userService;
    }

join_check =  async (req, res) =>{

    const users=req.body.personal                              // 회원 정보를 반환합니다.
    let usersResult = await this.userServiceser.getusers(users)
    res.send(usersResult)
  }

//-----------------------------------------------------------------------------------------------
Lookup = async (req, res) =>{

    const personal=req.body.personal                         // 만약 가입이 가능하면 true, 
    let isValid = await this.userServiceser.checkpersonal(personal);             // 가입이 불가능하면 false가 반환됩니다.
    if(isValid === null){
      return res.send(true) 

    }else{
      res.send(false)
    }
  }
  
//-----------------------------------------------------------------------------------------------
join = async(req, res)=>{

    const { name, email,personal1, personal2, 
      prefer, pwd, number01, number02, number03,  } = req.body
    
    const personal = personal1+"-"+"*******"
    const phone = number01+number02+number03

    const myNum =  this.userServiceser.myNum(phone)  
    
    let result = await this.userServiceser.saveusers({name, email, personal, personal1, personal2, prefer, pwd, phone, myNum})        
    let mytemplate = this.userServiceser.getMyemail({name, phone, prefer})         // 축하 메시지를 가지고온다.
                
    this.userServiceser.sendMy(email,mytemplate)   
                                    // 축하 메시지를 보낸다 . 
    if(result === true){
      return res.status(422).send("에러!! 핸드폰 번호가 인증되지 않았습니다😱")
    
    }
     const resultd = await this.userServiceser.myId(phone)
    res.send(resultd);
  }
}