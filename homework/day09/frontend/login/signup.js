// 휴대폰 인증 토큰 전송하기
  const getValidationNumber = async () => {
  const myPhoneNumber01 = document.getElementById("PhoneNumber01").value
  const myPhoneNumber02 = document.getElementById("PhoneNumber02").value
  const myPhoneNumber03 = document.getElementById("PhoneNumber03").value
  const myphone =myPhoneNumber01+myPhoneNumber02+myPhoneNumber03

  
  // 2. 해당 휴대폰번호로 인증번호API 요청하기(fetch,axios 등 사용)
  axios.post("http://localhost:3000/tokens/phone", {
    qqq : myphone
  
  }).then((res)=>{
      console.log(res.data)
  })

  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  console.log('인증 번호 전송')
}


// 회원 가입 API 요청
const submitSignup = async () => {
const myPhoneNumber01 = document.getElementById("PhoneNumber01").value
  const myPhoneNumber02 = document.getElementById("PhoneNumber02").value
  const myPhoneNumber03 = document.getElementById("PhoneNumber03").value
  const mySignupName = document.getElementById("SignupName").value
  const mySignupPersonal = document.getElementById("SignupPersonal").value
  const mySignupPrefer = document.getElementById("SignupPrefer").value
  const mySignupEmail = document.getElementById("SignupEmail").value

    axios.post("http://localhost:3000/login", {
      SignupName : mySignupName,
      SignupPersonal : mySignupPersonal,
      PhoneNumber01 : myPhoneNumber01,
      PhoneNumber02 : myPhoneNumber02,
      PhoneNumber03 : myPhoneNumber03,
      SignupPrefer : mySignupPrefer,
      SignupEmail : mySignupEmail,
            }).then((res)=>{
                console.log(res.data)
            })

  console.log('회원 가입 이메일 전송')
}
