import {cutHair, UserWithBooksType, UserWithLaptopType} from "./10";

test("Hair length should be decreased", ()=>{
	const visitor: UserWithLaptopType = {
		name: "Roma",
		hairLength: 35,
		address:{
			city: "Minsk",
			house: 12
		},
		laptop: {
			title: "ZenBook"
		}
	}
	const cutUser = cutHair(visitor, 10)
	visitor.address.city = "Moscow"

	const changeCity = (visitor: UserWithLaptopType, newCity: string) => {
		return{...visitor, address: {...visitor.address, city: newCity}}
	}

	const movedUser = changeCity(visitor, "Kiev")

	const changeUserLaptop = (visitor: UserWithLaptopType, newLaptop: string) => {
		return{...visitor, laptop: {...visitor.laptop, title: newLaptop}}
	}
	const changeLaptop = changeUserLaptop(visitor, "MacBook")


	expect(visitor.hairLength).toBe(35)
	expect(cutUser.hairLength).toBe(25)
	expect(cutUser.address).toBe(visitor.address)
	expect(visitor).toEqual({
		name: "Roma",
		hairLength: 35,
		address:{
			city: "Moscow",
			house: 12
		},
		laptop: {
			title: "ZenBook"
		}
	})
	expect(cutUser).toEqual({
		name: "Roma",
		hairLength: 25,
		address:{
			city: "Moscow",
			house: 12
		},
		laptop: {
			title: "ZenBook"
		}
	})
	expect(visitor).not.toBe(cutUser)
	expect(visitor.address).toBe(cutUser.address)
	expect(visitor.address).not.toBe(movedUser.address)
	expect(visitor.laptop).toBe(movedUser.laptop)
	expect(movedUser.address.city).toBe("Kiev")
	expect(changeLaptop.laptop.title).toBe("MacBook")
	expect(visitor.laptop.title).toBe("ZenBook")
	expect(changeLaptop.address).toBe(visitor.address)
	expect(visitor).not.toEqual(changeLaptop)
})

test("User keys should be changed", ()=>{
	const user: UserWithLaptopType & UserWithBooksType = {
		name: "Roma",
		hairLength: 35,
		address:{
			city: "Minsk",
			house: 12
		},
		laptop: {
			title: "ZenBook"
		},
		books: ["HTML", "CSS", "JS", "React"]
	}
	const moveUserToAnotherHouse = (user: UserWithLaptopType & UserWithBooksType, houseNumber: number ) => {
		return{...user, address: {...user.address, house: houseNumber}}
	}
	const changeHouse = moveUserToAnotherHouse(user, 99)
	expect(user).not.toBe(changeHouse)
	expect(user.address).not.toBe(changeHouse.address)
	expect(user.address.house).toBe(12)
	expect(changeHouse.address.house).toBe(99)
	expect(user.laptop).toEqual(changeHouse.laptop)
	expect(user.books).toEqual(changeHouse.books)

})
test("Adding new books to user", ()=>{
	type booksType = string[]
	const user: UserWithLaptopType & UserWithBooksType = {
		name: "Roma",
		hairLength: 35,
		address:{
			city: "Minsk",
			house: 12
		},
		laptop: {
			title: "ZenBook"
		},
		books: ["HTML", "CSS", "JS", "React"]
	}

	const addNewBooksToUser = (user: UserWithLaptopType & UserWithBooksType, newBooks: booksType) => {
		return{...user, books: [...user.books.concat(newBooks)]}
	}
	const userCopy = addNewBooksToUser(user, ["TS", "REST API"])
	// console.log(userCopy)

	const updateBook = (user:UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
		return{...user, books: user.books.map(el=> el === oldBook ? newBook : el)}
	}

	const updatedBookCopy = updateBook(user, "JS", "Javascript")

	const removeBook = (user:UserWithLaptopType & UserWithBooksType, removingBook: string) => {
		return{...user, books: user.books.filter(el => el !== removingBook)}
	}
	const removedBookCopy = removeBook(user, "CSS")
	console.log(removedBookCopy)

	expect(user).not.toBe(userCopy)
	expect(user.address).toBe(userCopy.address)
	expect(userCopy.address.house).toBe(12)
	expect(user.books.length).toBe(4)
	expect(userCopy.books.length).toBe(6)
	expect(updatedBookCopy.books.length).toBe(4)
	expect(updatedBookCopy.books[2]).toBe("Javascript")
	expect(removedBookCopy.books.length).toBe(3)
	expect(removedBookCopy.books[2]).toBe("React")


})