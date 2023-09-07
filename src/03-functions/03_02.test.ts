import {CityType} from "../02-objects/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;

beforeEach(() => {
	city = {
		title: "New York",
		houses: [
			{
				build: 2012,
				repaired: false,
				address:{
					number: 100,
					street:{
						title:"White street"
					}
				}
			},
			{
				build: 2008,
				repaired: false,
				address:{
					number: 100,
					street:{
						title:"Happy street"
					}
				}
			},
			{
				build: 2020,
				repaired: false,
				address:{
					number: 101,
					street:{
						title:"Hogwarts street"
					}
				}
			},
		],
		governmentBuildings: [
			{
				type: "HOSPITAL",
				budget: 200000,
				staffCount: 200,
				address:{
					street:{
						title: "Central Str"
					}
				}
			},
			{
				type: "FIRE-STATION",
				budget: 500000,
				staffCount: 1000,
				address:{
					street:{
						title: "South Str"
					}
				}
			},
		],
		citizensNumber: 1000000
	}
})

// 01. Создайте в отдельном файле функцию, чтобы тесты прошли
test('Budget should be for changed fot HOSPITAL', () => {
	addMoneyToBudget(city.governmentBuildings[0], 100000);
	addMoneyToBudget(city.governmentBuildings[0], 20000);
	expect(city.governmentBuildings[0].budget).toBe(320000);
});

// 02-objects. Тесты должны пройти
test('Budget should be changed for FIRE-STATION', () => {
	addMoneyToBudget(city.governmentBuildings[1], -150000);
	addMoneyToBudget(city.governmentBuildings[1], 60000);
	expect(city.governmentBuildings[1].budget).toBe(410000);
});

// // 03-functions. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be repaired', () => {
	repairHouse(city.houses[1]);
	repairHouse(city.houses[0]);
	expect(city.houses[1].repaired).toBeTruthy();
	expect(city.houses[0].repaired).toBeTruthy();
});

// // 04. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be reduced', () => {
	toFireStaff(city.governmentBuildings[0], 20);
	toFireStaff(city.governmentBuildings[0], 50);

	expect(city.governmentBuildings[0].staffCount).toBe(130);
});
// // 05. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be increased', () => {
	toHireStaff(city.governmentBuildings[0], 20);
	toHireStaff(city.governmentBuildings[0], 50);
	toHireStaff(city.governmentBuildings[0], 100);

	expect(city.governmentBuildings[0].staffCount).toBe(370);
});
test("greeting message should be corrected", ()=>{
	const message = createMessage(city);
	expect(message).toBe("Hello New York citizens. I want you be happy. All 1000000 persons")
})