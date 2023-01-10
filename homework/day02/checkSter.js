export function checkStar(number){
  let result = number.substr(0,8).padEnd(14,"*");
  return result;
}