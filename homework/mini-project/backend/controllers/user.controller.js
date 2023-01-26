import {Token} from "../models/tokenSchema.model.js"
import {User} from "../models/userSchema.model.js"
import {getMyemail,saveusers,checkpersonal,getusers} from "./services/user.service.js"
import {sendMy} from "../myEmail.js"

export class UserController{

  user1 =  async (req, res) =>{

    const users=req.body.personal                              // 회원 정보를 반환합니다.
    let usersResult = await getusers(users)
    res.send(usersResult)
  }

  user2 = async (req, res) =>{

    const personal=req.body.personal                         // 만약 가입이 가능하면 true, 
    let isValid = await checkpersonal(personal);             // 가입이 불가능하면 false가 반환됩니다.
    if(isValid === null){
      return res.send(true) 

    }else{
      res.send(false)
    }
  }

  user3 = async(req, res)=>{
console.log(req.body)
    const { name, email,personal1, personal2, 
      prefer,pwd,phone} = req.body
    
    const personal = personal1+"-"+"*******"
    
  
    const myNum = await Token.findOne({ phone })    
        
    let result = await saveusers({name, email, personal, personal1, personal2, prefer, pwd, phone, myNum})        
    let mytemplate = getMyemail({name, phone, prefer})         // 축하 메시지를 가지고온다.
                
    sendMy(email,mytemplate)                                   // 축하 메시지를 보낸다 . 
   console.log(result)
    if(result === true){
      return res.status(422).send("에러!! 핸드폰 번호가 인증되지 않았습니다😱")
    
    }
    const myId = await User.findOne({ phone })
    res.send(myId._id);
  }
}