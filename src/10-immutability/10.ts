export type VisitorType = {
	name: string
	hairLength: number
	address:{city:string, house: number}
}
export type LaptopType={
	title: string
}
export type UserWithLaptopType = VisitorType & {
	laptop: LaptopType
}
export type UserWithBooksType = UserWithLaptopType & {
	books: string[]
}
export type UserWithCompaniesType = UserWithBooksType & {
	companies: {id: number, title: string}[]
}
const visitor = {
	name: "Roma",
	hairLength: 35,
	address:{
		city: "Minsk",
		house: 12
	}
}
export const cutHair = (visitor: VisitorType, length: number) => {
	return {
		...visitor,
		hairLength: visitor.hairLength - length
	}
}
console.log(cutHair(visitor, 10)) //{
// name: "Roma",
// 	hairLength: 25,
// 	address:{
// 		city: "Minsk"
// 	}
// }