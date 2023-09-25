export type UsersType = {
	[key: string]: {id: number, name: string}
}
let users = { // associative array
	"101": {id: 101, name: "Dimych"},
	"14302": {id: 14302, name: "Kate"},
	"1052": {id: 1052, name: "Anton"},
	"12": {id: 12, name: "Valera"},
}
console.log(users["12"]) // Сложность алгоритма - O(1)- Буква О большое от одного, то есть мгновенно ищет нужные данные!

const usersArray = [
	{id: 101, name: "Dimych"},
	{id: 14302, name: "Kate"},
	{id: 1052, name: "Anton"},
	{id: 12, name: "Valera"},
]
console.log( usersArray.find(el=>el.id === 1052)) // Сложность алгоритма - O(n)- n это колво элементов в массиве - долго