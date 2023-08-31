type StudentType = {
	name: string
	age: number
	isMarried: boolean
	address: AddressType
	technologies: TechnologiesType[]
}

type AddressType = {
	country: string
	city: CityType
}

type CityType = {
	name: string
	street: string
	building: number
}

type TechnologiesType= {
	id: number
	title: string
}
const student: StudentType = {
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

console.log(student.age)
console.log(student.address.city.name)
console.log(student.technologies[1].title)