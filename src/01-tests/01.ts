export const value01_01 = ""

export const sum = (a: number, b: number)=>{
	return a + b;
}
export const multimply = (a: number, b: number)=>{
	return a * b;
}

// console.log("ABRAkADABRA".replace("k","K"))

export const splitIntoWords = (sentence: string) => {
	const words = sentence.toLowerCase().split(" ")
	return words.filter(el => el !== "" && el !== "-" && el !== "!")
		.map(m => m
			.replace("!", "")
			.replace(".", "")
			.replace(",", ""))
}

console.log(splitIntoWords("Hello my friend !"))

console.log(splitIntoWords("JS - is a programming language!"))

export const city = {
	houses: [
		{build: 2012, repaired: false, address:{number: 100, street:{title:"White street"}}},
		{build: 2008, repaired: false, address:{number: 100, street:{title:"Happy street"}}},
		{build: 2020, repaired: false, address:{number: 200, street:{title:"Hogwarts street"}}},
	]
}
