export function getToday(){
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2,0) 
  const day = String(date.getDate()).padStart(2,0)       

  return `오늘은 ${year}년 ${month}월 ${day}일 입니다.`
}