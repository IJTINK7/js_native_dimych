import {StudentType} from "../02-objects/02";

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
})

test("Check the correct object values",()=>{
	let{name, age, isMarried} = student
	let{name: myName, age: newAge} = student // pseudonyms for variables (not typification !!! - not recommended)
	console.log(myName)
	console.log(newAge)

	let technologies = student.technologies


	expect(age).toBe(28)
	expect(technologies.length).toBe(3)
	expect(name).toBe("Roma")
	expect(isMarried).toBe(false)
})
test("Check the correct array values",()=>{
	const t1 = student.technologies[0]
	const t2 = student.technologies[1]
	const t3 = student.technologies[2]

	const [th1, th2, th3] = student.technologies

	const [thg1, ...restProps] = student.technologies;

	const [ , thn2, ...restProps2] = student.technologies;

	expect(t1).toStrictEqual({id: 1, title: "HTML"})
	expect(t2).toStrictEqual({id: 2, title: "CSS"})
	expect(t3).toStrictEqual({id: 3, title: "JS"})

	expect(th1).toStrictEqual({id: 1, title: "HTML"})
	expect(th2).toStrictEqual({id: 2, title: "CSS"})
	expect(th3).toStrictEqual({id: 3, title: "JS"})

	expect(thg1.title).toStrictEqual("HTML")
	expect(restProps).toStrictEqual([{id: 2, title: "CSS"}, {id: 3, title: "JS"}])

	expect(thn2.title).toStrictEqual("CSS")
	expect(restProps2).toStrictEqual([{id: 3, title: "JS"}])
	expect(restProps2.length).toBe(1)
	expect(restProps2[0].title).toBe("JS")
})