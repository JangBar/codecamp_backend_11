import nodemailer, { createTransport } from "nodemailer";
import {getToday} from "./utils.js"


export function getMyemail({SignupName,SignupPersonal,PhoneNumber01,PhoneNumber02,PhoneNumber03,SignupPrefer,SignupEmail}){
  const mytemplate = `
  <html>
      <body>
         <h1>${SignupName}님 가입을 환영합니다!!!</h1>
         <hr />
         <div>이름: ${SignupName}</div>
         <div>전화번호: ${PhoneNumber01}${PhoneNumber02}${PhoneNumber03}</div>
         <div>좋아하는 사이트: ${SignupPrefer}</div>
         <div>가입일: ${getToday()}</div>
      </body>
  </html>
`
return mytemplate;
}


export async function sendMy(SignupEmail,mytemplate){

const EMAIL_PASS = process.env.EMAIL_PASS
const EMAIL_SENDER = process.env.EMAIL_SENDER
const EMAIL_USER = process.env.EMAIL_USER

  console.log(mytemplate)
  const transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user:EMAIL_USER,
        pass:EMAIL_PASS

      }
    })
    console.log(mytemplate)
    
      const res = await transporter.sendMail({
      from: EMAIL_SENDER,
      to: SignupEmail,
      subject:"  가입축하합니다",
      html: mytemplate
    })
      
        console.log(res)    
  // console.log(mytemplate);
}