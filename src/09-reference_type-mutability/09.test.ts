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

})
