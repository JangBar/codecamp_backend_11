import express from "express"         // 요즘방식 => module

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import {options} from "./swagger/config.js"


const app = express()
app.use(express.json()) // 옛날에는 bodyParser 사용
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));


app.get('/starbucks', function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
  const result = [
    { name: '아메리카노1', kcal: 1 },
    { name: '아메리카노2', kcal: 2 },
    { name: '아메리카노3', kcal: 3 },
    { name: '아메리카노4', kcal: 4 },
    { name: '아메리카노5', kcal: 5 },
    { name: '아메리카노6', kcal: 6 },
    { name: '아메리카노7', kcal: 7 },
    { name: '아메리카노8', kcal: 8 },
    { name: '아메리카노9', kcal: 9 },
    { name: '아메리카노10', kcal: 10 }
  ] 

  // 2. DB에서 꺼내온 결과를 브라우저에 응답으로(response) 주기
  res.send(result)

})    // 미들웨어 함수

app.get('/users', function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
  const result = [
    { email : "1@1.com" , name: "1", phone:1 , personal : "1-1" , prefer : "1.com"},
    { email : "2@2.com" , name: "2", phone:2 , personal : "2-2" , prefer : "2.com"},
    { email : "3@3.com" , name: "3", phone:3 , personal : "3-3" , prefer : "3.com"},
    { email : "4@4.com" , name: "4", phone:4 , personal : "4-4" , prefer : "4.com"},
    { email : "5@5.com" , name: "5", phone:5 , personal : "5-5" , prefer : "5.com"}
  ] 

  // 2. DB에서 꺼내온 결과를 브라우저에 응답으로(response) 주기
  res.send(result)

}) 
app.listen(3000)