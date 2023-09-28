import {UserType} from "./09";

const increaseAge = (user: UserType) => {
	user.age = user.age + 1
}
test("age should be changed", () => {
	let user: UserType = {
		name: "Roma",
		age: 28,
		address: {
			title: "Minsk"
		}
	}
	increaseAge(user)
	expect(user.age).toEqual(29)
	const superman = user;
	superman.age = 1000
	console.log(user)
	console.log(superman)
	expect(user.age).toEqual(1000)

})
test("array test", () => {
	let users: UserType[] = [
		{
			name: "Roma",
			age: 28,
			address: {
				title: "Minsk"
			}
		},
		{
			name: "Anton",
			age: 30,
			address: {
				title: "Minsk"
			}
		},
	]
	let admins = users

	admins.push({
		name: "Kid",
		age: 10,
		address: {
			title: "Minsk"
		}
	})

	expect(admins.length).toEqual(3)
	expect(users.length).toEqual(3)
})

test("array test 2", () => {
	let users: UserType[] = [
		{
			name: "Roma",
			age: 28,
			address: {
				title: "Minsk"
			}
		},
		{
			name: "Anton",
			age: 30,
			address: {
				title: "Minsk"
			}
		},
	]
	let admins = [users[0], users[1]]
	users[0].name = "Roman"
	expect(admins[0].name).toEqual("Roman")
})