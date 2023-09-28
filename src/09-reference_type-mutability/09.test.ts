import {UserType} from "./09";

const increaseAge = (user: UserType) => {
	user.age = user.age + 1
}
test("age should be changed", ()=>{
	let user: UserType = {
		name: "Roma",
		age: 28
	}
	increaseAge(user)
	expect(user.age).toEqual(29)
	const superman = user;
	superman.age = 1000
	console.log(user)
	console.log(superman)
	expect(user.age).toEqual(1000)

})
test("array test", ()=>{
	let users: UserType[] = [
		{
			name: "Roma",
			age: 28
		},
		{
			name: "Anton",
			age: 30
		},
	]
	let admins = users

	admins.push({
		name: "Kid",
		age: 10
	})

	expect(users.length).toEqual(3)
})

