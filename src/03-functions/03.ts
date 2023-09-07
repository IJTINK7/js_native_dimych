import {StudentType} from "../02-objects/02";
import {CityType, GovernmentBuildingType, HousesType} from "../02-objects/02_02";

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
export const addMoneyToBudget = (building:GovernmentBuildingType, additionalBudget: number) => {
	building.budget += additionalBudget
}
export const repairHouse = (house: HousesType) => {
	house.repaired = true
}

export const toFireStaff = (building:GovernmentBuildingType, staffCount: number ) => {
	building.staffCount -= staffCount
}
export const toHireStaff = (building:GovernmentBuildingType, staffCount: number ) => {
	building.staffCount += staffCount
}
export const createMessage = (city: CityType ) => {
	return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} persons`
}
