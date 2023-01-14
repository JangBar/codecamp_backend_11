import express from "express"         // 요즘방식 => module
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import {options} from "./swagger/config.js"


const app = express()
app.use(cors());
app.use(express.json()) // 옛날에는 bodyParser 사용
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));


app.get('/starbucks', function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
  const result = [
    { name: '아이스 카페 아메리카노', kcal: 10 },
    { name: '카페 아메리카노', kcal: 10 },
    { name: '아이스 카라멜 마키아또', kcal: 190 },
    { name: '카라멜 마키아또', kcal: 200 },
    { name: '아이스 카푸치노', kcal: 115 },
    { name: '카푸치노', kcal: 110 },
    { name: '스타벅스 돌체 라떼', kcal: 255 },
    { name: '아이스 카페 라떼', kcal: 110 },
    { name: '카페라떼', kcal: 180 },
    { name: '화이트 초콜릿 모카', kcal: 345 }
  ] 

  // 2. DB에서 꺼내온 결과를 브라우저에 응답으로(response) 주기
  res.send(result)

})    // 미들웨어 함수

app.get('/users', function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
  const result = [
    { email : "aaaaaa@naver.com" , name: "피카츄", phone: "010-1111-1111" , personal : "111111-1111111" , prefer : "https://codebootcamp.co.kr/"},
    { email : "bbbbbb@naver.com" , name: "라이츄", phone: "010-2222-2222" , personal : "222222-2222222" , prefer : "https://codebootcamp.co.kr/"},
    { email : "cccccc@naver.com" , name: "파이리", phone: "010-3333-3333" , personal : "333333-3333333" , prefer : "https://codebootcamp.co.kr/"},
    { email : "dddddd@naver.com" , name: "꼬부기", phone: "010-4444-4444" , personal : "444444-4444444" , prefer : "https://codebootcamp.co.kr/"},
    { email : "eeeeee@naver.com" , name: "버터플", phone: "010-5555-5555" , personal : "555555-5555555" , prefer : "https://codebootcamp.co.kr/"}
  ] 

  // 2. DB에서 꺼내온 결과를 브라우저에 응답으로(response) 주기
  res.send(result)

}) 
app.listen(3000)