export type UserType = {
	name: string
	age: number
}
let user: UserType = {
	name: "Roma",
	age: 28
}
const increaseAge = (user: UserType) => {
	return user.age++
}
console.log(increaseAge(user))
