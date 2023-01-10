import { getToday } from "./utils.js"

export function checkEmail(email){
  if((typeof email !== "undefined") && (email.length > 0) && email.includes("@")){
    return true;
  }else{
    return false;
  }
}

export function getWelcomeTemplate({name, age, school, email, createdAt}){
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
export function sendEmail(mytemplate){
  console.log(mytemplate);
}