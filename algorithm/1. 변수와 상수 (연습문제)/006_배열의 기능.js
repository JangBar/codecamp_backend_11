// **006. 배열의 기능**

// **`문제 설명`**
// 주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요.

// **`입력 인자`**
// - X

// **`주의 사항`**

// **`예상 결과`**
// console.log(fruits) // ["맛있는 사과", "맛있는 바나나"]

let fruits = ["사과", "바나나"]

let str1 = `맛있는 ${fruits[0]}`
let str2 = `맛있는 ${fruits[1]}`
fruits =[]
fruits.push(str1);
fruits.push(str2);

