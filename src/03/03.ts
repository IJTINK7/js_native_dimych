import {StudentType} from "../02/02";

// const sum = (a: number, b: number) => {
// 	return a + b;
// }
// const result1 = sum(2,3)
// const result2 = sum(sum(1,2),sum(3,4))
// const result3 = sum(sum(3,7),10)
// console.log(result1) // 5
// console.log(result2) // 10
// console.log(result3) // 20

export const addSkill = (student:StudentType, skill: string) => {
	student.technologies.push(
		{
			id: new Date().getTime(),
			title: skill
		}
	)
}
export const makeStudentMarried = (student:StudentType) => {
	student.isMarried = true
}
export const checkTheCity = (student:StudentType, city: string) => {
	return student.address.city.name === city
}