import nodemailer, { createTransport } from "nodemailer";
import {getToday} from "./utils.js"

//--------------------------------------------------------------------------------
export function getMyemail({name, phone,prefer}){
  const mytemplate = `
  <html>
      <body>
         <h1>${name}님 가입을 환영합니다!!!</h1>
         <hr />
         <div>이름: ${name}</div>
         <div>전화번호: ${phone}</div>
         <div>좋아하는 사이트: ${prefer}</div>
         <div>가입일: ${getToday()}</div>
      </body>
  </html>
`
return mytemplate;
}

//--------------------------------------------------------------------------------
export async function sendMy(email,plate){

const appPass = process.env.EMAIL_PASS
const sender = process.env.EMAIL_SENDER
const user = process.env.EMAIL_USER

  const transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user:user,
        pass:appPass

      }
    })
    
      const res = await transporter.sendMail({
      from: sender,
      to: email,
      subject:"  가입축하합니다",
      html: plate
    }) 
}