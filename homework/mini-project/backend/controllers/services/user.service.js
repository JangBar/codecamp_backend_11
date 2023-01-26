import axios from 'axios';
import cheerio from 'cheerio';
import {Personal} from "../../models/personalSchema.model.js"
import {User} from "../../models/userSchema.model.js"


export function getToday(){
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2,0) 
  const day = String(date.getDate()).padStart(2,0)       

  return `오늘은 ${year}년 ${month}월 ${day}일 입니다.`
}

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

  export const checkpersonal = async (personal)=>{
    const personalResult = await Personal.findOne({personal})  
    return personalResult
  }

  export const getusers = async (users) => {
    const user =await User.find().select('name email personal prefer phone og')
    return user
  }
  
  export const  saveusers = async ({name, email, personal, personal1, personal2, prefer, pwd, phone, myNum}) => {
    const url = prefer
    const result = await axios.get(url)
    let obj={}
    const $ = cheerio.load(result.data)
  
      $("meta").each((i, el) => {
          if($(el).attr("property") && $(el).attr("property").includes("og:")){
  
              const key = $(el).attr("property") // og:title, og:description, ...
              const value = $(el).attr("content") // 네이버, 네이버 메인에서 ~~~
  
               if(key.includes("title")){obj["title"]=value} else if
                 (key.includes("description")){obj["description"]=value} else if
                 (key.includes("image")){obj["image"]=value}
          }
      })
  
    await  new User({  name, email, personal,prefer, pwd, phone, og : obj}).save()
    await  new Personal({  name,  personal : personal1+personal2}).save()  
  
  
    if(myNum === null || myNum.isAuth === false){
      return true            
          }    
  }













