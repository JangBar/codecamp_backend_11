// const express = require('express') // 옛날 방식 (commonjs)
import express from 'express' // 요즘 방식 (module)


import 'dotenv/config'
import { checkEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js';
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js"; // export 가져오기
//import express from 'express' // export default 가져오기
//import qqqqqqq, {checkPhone, getToken} from './phone.js' // export default와 export를 함께 쓰기
// { checkPhone as zzzz } 가지고 와서는 이름 변경 가능 (그 전에는 이름 변경 불가)
// import * as tttt from './phone.js' // export 한방에 다 가져오기 (단, *로 먼저 가지고 와서 이름 바꾼 뒤에 한방에 가져올 수 있음)
// ttt.checkPhone                     // export 한방에 다 가져오기
// ttt.getToken                       // export 한방에 다 가져오기


import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import {options} from './swagger/config.js'
import cors from 'cors'
import mongoose from 'mongoose'

// const swaggerSpec = swaggerJsdoc(options);

const app = express()
app.use(express.json()) // 옛날에는 bodyParser 사용
app.use(cors()) //허용s
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get('/boards', function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회  => 데이터를 조회했다고 가정
  const result = [
    { number: 1, writer: "철수", title: "제목입니다~~~", contents: "내용이에요!!!" },
    { number: 2, writer: "영희", title: "영희입니다~~~", contents: "영희이에요!!!" },
    { number: 3, writer: "훈이", title: "훈이입니다~~~", contents: "훈이이에요!!!" }
  ]

  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
  
  res.send(result)
})

app.post('/boards', function (req, res) {
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req)
  console.log("================")
  console.log(req.body)
  
  // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정


  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send('게시물 등록에 성공하였습니다.')
})

app.post("/tokens/phone", function(req, res){
  const myPhone = req.body.qqq
  console.log(myPhone)
   // 1. 휴대폰 번호 자릿수 맞는지 확인하기(10~11자리)
   const isValid = checkPhone(myPhone) // argument
   if(isValid === false) return
  
   // 2. 핸드폰 토큰(인증번호) 6자리 만들기
   const myToken = getToken()

   // 3. 핸드폰 번호에 토큰 전송하기
   sendTokenToSMS(myPhone, myToken)

   res.send("인증완료!!!")
})

app.post("/users", (req, res) => {
  // const name = req.body.name
  // const age = req.body.age
  // const school = req.body.school
  // const email = req.body.email

  const {name, age, school, email} = req.body // 구조분해할당 적용


      // 1. 이메일이 정상인지 확인 (1-존재여부, 2-'@'포함여부)
      const isValid = checkEmail(email)
      if(isValid === false) {
          return // 함수 종료
      }
      // 2. 가입환영 템플릿 만들기
      const myTemplate = getWelcomeTemplate({name, age, school, email})
  
      // 3. 이메일에 가입환영 템플릿 전송하기
      sendTemplateToEmail(email, myTemplate)

      res.send("가입완료!!!")
})

app.listen(4000, () => {
  console.log("백엔드 API 서버가 켜졌어요!!!")
})

mongoose.connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."))

// 실행 : node index.js
// 중단 : control + C
// Postman / GET type / http://localhost:3000/qqq