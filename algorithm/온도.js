function temperature(num){
	num>=24 ? console.log("조금 덥습니다") : 
  num<24 && num>=19 ? console.log("날씨가 좋네요") : console.log("조금 춥네요");
}

temperature(13)  // "조금 춥네요"
temperature(23)  // "날씨가 좋네요"
temperature(27)  // "조금 덥습니다"