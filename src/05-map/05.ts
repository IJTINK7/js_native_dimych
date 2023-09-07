export type ManType = {
	name: string;
	age: number;
};

const people: Array<ManType> = [
	{ name: 'Andrew Ivanov', age: 33 },
	{ name: 'Alexander Petrov', age: 24 },
	{ name: 'Dmitry Sidorov', age: 18 },
];

const transform = (man: ManType)=> {
	return {
		stack: ['css, html', 'js', 'tdd', 'react'],
		firstName: man.name.split(' ')[0],
		lastName: man.name.split(' ')[1],
	};
};

const devs1 = [
	{
		stack: ['css, html', 'js', 'tdd', 'react'],
		firstName: 'Andrew',
		lastName: 'Ivanov',
	},
	{
		stack: ['css, html', 'js', 'tdd', 'react'],
		firstName: 'Alexander',
		lastName: 'Petrov',
	},
	{
		stack: ['css, html', 'js', 'tdd', 'react'],
		firstName: 'Dmitry',
		lastName: 'Sidorov',
	},
];

const devs2 = [
	transform(people[0]),
	transform(people[1]),
	transform(people[2]),
];
const devs3 = people.map(transform)
const devs4 = people.map(man => {
	return {
		stack: ['css, html', 'js', 'tdd', 'react'],
		firstName: man.name.split(' ')[0],
		lastName: man.name.split(' ')[1],
	};
})

const message = people.map(el => `Hello ${el.name.split(' ')[0]}. Welcome to IT-IN`)
export const createGreetingMessage = (people: ManType[]) => {
	return people.map(el => `Hello ${el.name.split(' ')[0]}. Welcome to IT-IN` )
}

console.log(devs1)
console.log(devs2)
console.log(devs3)
console.log(devs4)
console.log(message)