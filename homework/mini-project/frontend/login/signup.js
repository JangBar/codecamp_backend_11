// 주민등록인증 전송API를 요청해주세요. ------------------------------------------------------
  const getValidationpersonal = () =>{
  const personal1 = document.getElementById("SignupPersonal1").value
  const personal2 = document.getElementById("SignupPersonal2").value
  const personal = personal1+personal2

  axios.post("http://localhost:3000/personal", {

        personal

        }).then((res)=>{
          if(res.data === true){
            alert("가입가능한 주민등록 번호입니다 ⭕️")
          }else{
            alert("존재하는 주민등록 번호입니다 ❌")
          }
        }).catch(e => {
          console.log(e);
      });
        console.log("주민등록번호 확인");
};

// 휴대폰 인증 토큰 전송API를 요청해주세요. ------------------------------------------------------
const getValidationNumber = () => {

  const number01 = document.getElementById("PhoneNumber01").value
  const number02 = document.getElementById("PhoneNumber02").value
  const number03 = document.getElementById("PhoneNumber03").value
  const phone = number01+number02+number03

  axios.post("http://localhost:3000/tokens/phone", {

    phone

  }).then((res)=>{
      console.log(res.data)
  })
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  console.log("인증 번호 전송");
};

// 핸드폰 인증 완료 API를 요청해주세요.-------------------------------------------------------------
const submitToken = () => {
  const number01 = document.getElementById("PhoneNumber01").value
  const number02 = document.getElementById("PhoneNumber02").value
  const number03 = document.getElementById("PhoneNumber03").value
  const phone = number01+number02+number03
  const token = document.getElementById("TokenInput").value
  
  axios.patch("http://localhost:3000/tokens/phone", {

    token ,phone
    
  }).then((res)=>{
    if(res.data.startsWith('f')){
      console.log(`${res.data} 인증 실패`);
    }else{
      console.log(`${res.data} 인증 성공`);
    }
  })
};

// 회원 가입 API를 요청해주세요.------------------------------------------------------------------
const submitSignup = () => {

    const name = document.getElementById("SignupName").value
    const personal1 = document.getElementById("SignupPersonal1").value
    const personal2 = document.getElementById("SignupPersonal2").value
    const number01 = document.getElementById("PhoneNumber01").value
    const number02 = document.getElementById("PhoneNumber02").value
    const number03 = document.getElementById("PhoneNumber03").value
    const prefer = document.getElementById("SignupPrefer").value
    const email = document.getElementById("SignupEmail").value
    const pwd = document.getElementById("SignupPwd").value

    axios.post("http://localhost:3000/users", {

      name, 
      email,
      personal1, 
      personal2, 
      prefer,
      pwd,
      number01, 
      number02, 
      number03, 

            }).then((res)=>{
              console.log(res.data)
            })
  console.log("회원 가입 완료");
};
