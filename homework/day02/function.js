import {checkStar} from "./checkSter.js"
checkStar
export function getWelcomeTemplate({name, email, number, phoneNumber, homePage}){
  const mytemplate = `
  <html>
      <body>
         <h1>${name}님 가입을 환영합니다.</h1>
         <hr />
         <div>이메일: ${email}</div>
         <div>주민번호: ${checkStar(number)}</div>
         <div>휴대폰 번호: ${phoneNumber}</div>
         <div>내가 좋아하는 사이트: ${homePage}</div>
      </body>
  </html>
`
return mytemplate;
}

export function send(mytemplate){
  console.log(mytemplate);
}