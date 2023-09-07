import {createGreetingMessage, ManType} from "./05";

let people: ManType[] = [];

beforeEach(()=>{
	 people = [
		{ name: 'Andrew Ivanov', age: 33 },
		{ name: 'Alexander Petrov', age: 24 },
		{ name: 'Dmitry Sidorov', age: 18 },
	];
})

test("should get array of greeting messages", ()=>{
	const message = people.map(el => `Hello ${el.name.split(' ')[0]}. Welcome to IT-IN`)
	expect(message.length).toBe(3)
	expect(message[0]).toBe("Hello Andrew. Welcome to IT-IN")
	expect(message[1]).toBe("Hello Alexander. Welcome to IT-IN")
	expect(message[2]).toBe("Hello Dmitry. Welcome to IT-IN")
})

test("should get array of greeting messages 2", ()=>{

	const messages = createGreetingMessage(people)
	expect(messages.length).toBe(3)
	expect(messages[0]).toBe("Hello Andrew. Welcome to IT-IN")
	expect(messages[1]).toBe("Hello Alexander. Welcome to IT-IN")
	expect(messages[2]).toBe("Hello Dmitry. Welcome to IT-IN")
})