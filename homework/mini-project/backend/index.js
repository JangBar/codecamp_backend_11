import express from 'express' 
import cors from 'cors'
import mongoose from 'mongoose'
import {checkPhone, sendTokenToSMS, getToken, typeCheck, tokenUpdate, tokenCheck} from './phone.js'
import {getMyemail, sendMy} from './myEmail.js'
import {checkpersonal, getusers, saveusers} from "./user.js"
import {User} from "./models/userSchema.model.js"
import {Token} from "./models/tokenSchema.model.js"
import { options } from './swagger/config.js'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import 'dotenv/config'

const app = express()
app.use(express.json()) 
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

// 주민등록 번호 가입여부 ---------------------------------------------------------------------
app.post('/personal', async (req, res) =>{

    const personal=req.body.personal                         // 만약 가입이 가능하면 true, 
    let isValid = await checkpersonal(personal);             // 가입이 불가능하면 false가 반환됩니다.
    if(isValid === null){
      res.send(true) 
    }else{
      res.send(false)
    }
  })

// 회원 목록 조회 ----------------------------------------------------------------------------
app.get('/users', async (req, res) =>{

  const users=req.body.personal                              // 회원 정보를 반환합니다.
  let usersResult = await getusers(users)
  res.send(usersResult)
})

// 회원 가입 ---------------------------------------------------------------------------------
app.post("/users", async(req, res)=>{

  const { name, email,personal1, personal2, 
    prefer,pwd,number01, number02, number03} = req.body
  
  const phone = number01+number02+number03
  const personal = personal1+"-"+"*******"
  

  const myNum = await Token.findOne({ phone })               
  let result = await saveusers({name, email, personal,       // 회원 가입을 진행한다.
    personal1, personal2, prefer, pwd, phone, myNum})        
  let mytemplate = getMyemail({name, phone, prefer})         // 축하 메시지를 가지고온다.
              
  sendMy(email,mytemplate)                                   // 축하 메시지를 보낸다 . 
 
  if(result === true){
   res.status(422).send("에러!! 핸드폰 번호가 인증되지 않았습니다😱")
   return
  }
  const myId = await User.findOne({ phone })
  res.send(myId._id);
})

// 휴대폰 인증번호 전송--------------------------------------------------------------------------
app.post("/tokens/phone", async (req, res)=>{
  
  const {phone} =  req.body

  
  const isValid0 = typeCheck(phone)                          // 휴대폰번호가 문자나 빈칸이 없는지 체크한다.
  if(isValid0 === false) return

  const isValid1 = checkPhone(phone);                        // 휴대폰 번호 자릿수 맞는지 확인한다.(10~11자리)

  if(isValid1 === false) return;

  const myToken = getToken();                                // 휴대폰 토큰(인증번호)을 6자리 만든다.
  
  sendTokenToSMS(phone,myToken);                             // 받은 휴대폰 번호로 인증번호를 전송한다.

  let myNum = await Token.findOne( {phone} )                 
  tokenUpdate({myNum,myToken,phone})                         // 토큰을 업데이트한다.

    res.send('핸드폰으로 인증 문자가 전송되었습니다~📨')
})

// 인증번호 검사---------------------------------------------------------------------------------
app.patch("/tokens/phone", async(req, res)=>{

  const {token,phone} = req.body
  const myToken = await Token.findOne({ phone })

  let isValid = await tokenCheck({myToken,token,phone})     // 인증번호를 검사합니다.
  
  if(isValid === false){
    res.send("fales😡");
  }else if(isValid === true){
    res.send("true😎");
  }
})
app.listen(3000, () => {
  console.log("백엔드 API 서버가 켜졌어요!!!")
})

mongoose.connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."))