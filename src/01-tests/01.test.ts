import {city, multimply, splitIntoWords, sum} from "./01";

// let a: number;
// let b: number;
// let c: number;

// beforeEach(()=>{
// 	a = 1;
// 	b = 2;
// 	c = 3;
// })

const a: number = 1;
const b: number = 2;
const c: number = 3;


test("sum should be corrected", ()=>{
	const result1 = sum(a,b);
	const result2 = sum(b,c);
	const result3 = sum(c,a);
	expect(result1).toBe(3)
	expect(result2).toBe(5)
	expect(result3).toBe(4)
})

test("multiply should be corrected", ()=>{
	const result1 = multimply(a,b);
	const result2 = multimply(b,c);
	const result3 = multimply(c,a);
	expect(result1).toBe(2)
	expect(result2).toBe(6)
	expect(result3).toBe(3)
})

test("splitting into words should be corrected", ()=>{
	const sent1 = "Hello my friend !";
	const sent2 = "JS - is a programming language!";

	const result1 = splitIntoWords(sent1)
	const result2 = splitIntoWords(sent2)

	expect(result1.length).toBe(3)
	expect(result1[0]).toBe("hello")
	expect(result1[1]).toBe("my")
	expect(result1[2]).toBe("friend")
	expect(result2.length).toBe(5)
	expect(result2[0]).toBe("js")
	expect(result2[4]).toBe("language")

})

test("city should contains 3 houses", () => {
	expect(city.houses.length).toBe(3);

	expect(city.houses[0].build).toBe(2012);
	expect(city.houses[0].repaired).toBe(false);
	expect(city.houses[0].address.number).toBe(100);
	expect(city.houses[0].address.street.title).toBe("White street");

	expect(city.houses[1].build).toBe(2008);
	expect(city.houses[1].repaired).toBe(false);
	expect(city.houses[1].address.number).toBe(100);
	expect(city.houses[1].address.street.title).toBe("Happy street");

	expect(city.houses[2].build).toBe(2020);
	expect(city.houses[2].repaired).toBe(false);
	expect(city.houses[2].address.number).toBe(200);
	expect(city.houses[2].address.street.title).toBe("Hogwarts street");
})