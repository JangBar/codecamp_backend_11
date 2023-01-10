function checkEmail(email){
  if((typeof email !== "undefined") && (email.length > 0) && email.includes("@")){
    return true;
  }else{
    return false;
  }
}

function getWelcomeTemplate({name, age, school, email, createdAt}){
  const mytemplate = `
  <html>
      <body>
         <h1>${name}님 가입을 환영합니다!!!</h1>
         <hr />
         <div>이름: ${name}</div>
         <div>나이: ${age}</div>
         <div>학교: ${school}</div>
         <div>가입일: ${createdAt}</div>
      </body>
  </html>
`
return mytemplate;
}
function sendEmail(mytemplate){
  console.log(mytemplate);
}


function createUser({name, age, school, email, createdAt}){
  // 1. 이메일이 정상인지 확인(1-존재여부,2-"@"포함여부)
  const isValid = checkEmail(email)
  if(isValid === false) return;
  // 2. 가입환영 템플릿 만들기
  const mytemplate = getWelcomeTemplate({name, age, school, email, createdAt})
  // 3. 이메일에 가입환영 템플릿 전송하기
  sendEmail(mytemplate)
} 



const name= "철수"
const age= 8
const school= "다람쥐초등학교"
const email= "atta369@naver.com"
const createdAt= "2021-10-05"

createUser({name, age, school, email, createdAt})