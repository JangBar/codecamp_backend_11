
import express from 'express' 
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import{Token} from "./models/token.model.js"
import { typeCheck, checkPhone, getToken, sendTokenToSMS } from "./phone.js";


const app = express()
app.use(express.json()) 
app.use(cors()) 

app.post("/tokens/phone", async(req, res)=>{

  const { phone } = req.body

  // 0. 휴대폰번호가 문자나 빈칸이 없는지 체크
  const isValid1 = typeCheck(phone)
  if(isValid1 === false) return

  // 1. 휴대폰 번호 자릿수 맞는지 확인하기(10~11자리)
   const isValid2 = checkPhone(phone)
   if(isValid2 === false) return

  // 2. 휴대폰 토큰(인증번호) 6자리 만들기
   const myToken = getToken();  

  
  const myNum = await Token.findOne({ phone })
  
  myNum === null ? new Token({ phone : phone , token : myToken , isAuth : false }).save() :  
                   await Token.updateOne({phone : phone} , {token : myToken , isAuth : true}) ;
  
  // 3. 핸드폰 번호에 토큰 전송하기
  sendTokenToSMS(phone, myToken)


  res.send(`${phone.slice(0,3)}-${phone.slice(3,7)}-${phone.slice(-4)}으로 인증 문자가 전송되었습니다😎`);
   
})

app.patch("/tokens/phone", async(req, res)=>{

  const { phone, token } = req.body
  console.log(phone)
  console.log(token)
  const myToken = await Token.findOne({ phone })

  token === myToken.token ? await Token.updateOne({phone : phone} , {isAuth : true})  : res.send("fales");

  res.send("true");
   
})

app.listen(4000, () => {
  console.log("백엔드 API 서버가 켜졌어요!!!")
})


mongoose.connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."))
