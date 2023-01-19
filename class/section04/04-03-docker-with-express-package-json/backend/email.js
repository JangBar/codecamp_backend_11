import { getToday } from "./utils.js"
import nodemailer, { createTransport } from "nodemailer";

export function checkEmail(email){
  if((typeof email !== "undefined") && (email.length > 0) && email.includes("@")){
    return true;
  }else{
    return false;
  }
}

export function getWelcomeTemplate({name, age, school}){
  const mytemplate = `
  <html>
      <body>
         <h1>${name}님 가입을 환영합니다!!!</h1>
         <hr />
         <div>이름: ${name}</div>
         <div>나이: ${age}</div>
         <div>학교: ${school}</div>
         <div>가입일: ${getToday()}</div>
      </body>
  </html>
`
return mytemplate;
}
export async function sendEmail(myemail,mytemplate){
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;
  const EMAIL_SENDER = process.env.EMAIL_SENDER;
  const transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user:EMAIL_USER,
        pass:EMAIL_PASS

      }
    })
  
    
      const res = await transporter.sendMail({
      from: EMAIL_SENDER,
      to: myemail,
      subject:"  가입축하합니다",
      html: mytemplate
    })
      
        console.log(res)    
  // console.log(mytemplate);
}