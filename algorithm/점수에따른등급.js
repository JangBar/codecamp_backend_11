// **`문제 설명`**
// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.

// 100~90 → "A"
// 89~80 → "B"
// 79~70 → "C"
// 69~60 → "D"
// 59점 이하는 "F"
// 100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.

// **`입력 인자`**
// - score - 숫자열

// **`주의 사항`**
// - 리스트

// **`예상 결과`**
// grade(105)  // "잘못된 점수입니다"
// grade(-10)  // "잘못된 점수입니다"
// grade(97)   // "A"
// grade(86)   // "B"
// grade(75)   // "C"
// grade(66)   // "D"
// grade(52)   // "F"

function grade(score) {
  score > 100 || score < 0 ? console.log("잘못된 점수입니다") : 
  score >=90 ? console.log("A") :
  score >=80 ? console.log("B") :
  score >=70 ? console.log("C") :
  score >=60 ? console.log("D") :
               console.log("F")
}

grade(105)  // "잘못된 점수입니다"
grade(-10)  // "잘못된 점수입니다"
grade(97)   // "A"
grade(86)   // "B"
grade(75)   // "C"
grade(66)   // "D"
grade(52)   // "F"