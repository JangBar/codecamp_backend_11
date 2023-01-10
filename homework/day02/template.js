import {getWelcomeTemplate, send} from "./function.js"

function createUser({name, email, number, phoneNumber, homePage}){
  
  const mytemplate = getWelcomeTemplate({name, email, number, phoneNumber, homePage})

  send(mytemplate)
} 



const name= "코드캠프"
const email= "support@codebootcamp.co.kr"
const number = "210510-1829310"
const phoneNumber= "000-0000-0000"
const homePage= "codebootcamp.co.kr"

createUser({name, email, number, phoneNumber, homePage})