import express from 'express' 
import cors from 'cors'
import mongoose from 'mongoose'
import { options } from './swagger/config.js'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import 'dotenv/config'
import{UserController} from "./controllers/user.controller.js"
import {TokensPhoneController} from "./controllers/tokens_phone.controller.js"
import { UserService } from './controllers/services/user.service.js'
import { Tokens_phoneService } from "./controllers/services/tokens_phone.service.js";

const app = express()
app.use(express.json()) 
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

const userService = new UserService();
const tokens_phoneService = new Tokens_phoneService();

const userController = new UserController(userService);
const tokenPhoneController = new TokensPhoneController(tokens_phoneService)

// 주민등록 번호 가입여부 ---------------------------------------------------------------------
app.post('/personal',userController.Lookup);

// 회원 목록 조회 ---------------------------------------------------------------------------
app.get('/users', userController.join_check);

// 회원 가입 -------------------------------------------------------------------------------
app.post("/users", userController.join);

// 휴대폰 인증번호 전송------------------------------------------------------------------------
app.post("/tokens/phone", tokenPhoneController.number_send )

// 인증번호 검사---------------------------------------------------------------------------------
app.patch("/tokens/phone",tokenPhoneController.number_check )

app.listen(3000, () => {
  console.log("백엔드 API 서버가 켜졌어요!!!")
})

mongoose.connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."))