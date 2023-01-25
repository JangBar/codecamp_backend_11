import {User} from "./models/userSchema.model.js"
import {Personal} from "./models/personalSchema.model.js"
import cheerio  from 'cheerio'
import axios from 'axios'

export async function checkpersonal(personal){
  const personalResult = await Personal.findOne({personal})  
  return personalResult
}

export async function getusers(users){
  const user =await User.find().select('name email personal prefer phone og')
  return user
}

export async function saveusers({name, email, personal, personal1, personal2, prefer, pwd, phone, myNum}){
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


