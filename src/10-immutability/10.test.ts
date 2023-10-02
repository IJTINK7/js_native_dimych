import {cutHair, UserWithLaptopType} from "./10";

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
