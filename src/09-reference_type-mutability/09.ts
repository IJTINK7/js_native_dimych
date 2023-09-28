export type UserType = {
	name: string
	age: number
	address: {title: string}
}
let user: UserType = {
	name: "Roma",
	age: 28,
	address: {
		title: "Minsk"
	}
}
const increaseAge = (user: UserType) => {
	return user.age++
}
console.log(increaseAge(user))
