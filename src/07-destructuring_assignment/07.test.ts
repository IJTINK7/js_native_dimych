import {StudentType} from "../02-objects/02";

test("Check the correct object values",()=>{
	let student: StudentType = {
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
	let age = student.age
	let technologies = student.technologies
	expect(age).toBe(28)
	expect(technologies.length).toBe(3)
})