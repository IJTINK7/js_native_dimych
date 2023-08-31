import {StudentType} from "../02/02";
import {addSkill, checkTheCity, makeStudentMarried} from "./03";

let student: StudentType;
beforeEach(()=>{
	student = {
		name: "Roma",
		age: 28,
		isMarried: false,
		address:{
			country:"Belarus",
			city: {
				name: "Minsk",
				street: "Surganova",
				building: 2
			}
		},
		technologies:[
			{id: 1, title: "HTML"},
			{id: 2, title: "CSS"},
			{id: 3, title: "JS"},
		]
	}
	}
)
test("Skill should be added to student", ()=>{
	addSkill(student, "React");
	expect(student.technologies.length).toBe(4)
	expect(student.technologies[3].title).toBe("React")
})

test("Student should be made married", ()=>{
	makeStudentMarried(student)
	expect(student.isMarried).toBe(true)
})

test("Does student live in Minsk?", ()=>{
	let result1 = checkTheCity(student, "Moscow")
	let result2 = checkTheCity(student, "Minsk")
	expect(result1).toBe(false)
	expect(result2).toBe(true)
})

