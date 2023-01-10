// **`문제 설명`**
// student와 school 두 개의 객체가 있습니다.
// student 객체에 school이라는 객체를 할당해야 합니다.

// **`입력 인자`**
// - X

// **`주의 사항`**
// - 객체 안에 객체를 만들 수 있습니다.

// **`예상 결과`**
// console.log(student) // 
// 	{
//     name: '철수',
//     age: 8,
//     school: {
//       name: '다람쥐초등학교',
//       teacher: '다람이'
//     }
//   }

const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

// student 의 school 키 값에
// school 객체를 통째로 할당
student.school = school
// student["school"] = school