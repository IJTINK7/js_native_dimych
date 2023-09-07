import {CityType, GovernmentBuildingType} from "../02-objects/02_02";

export const demolishHousesOnTheStreet = (city: CityType, streetName: string)=>{
	//В функции `demolishHousesOnTheStreet` не нужно использовать `return`, потому что она изменяет состояние объекта `city` напрямую.
	//
	// Функция `demolishHousesOnTheStreet` принимает объект `city` и название улицы `streetName`. Она использует метод `filter` для удаления всех домов на указанной улице из массива `city.houses`. После выполнения функции, массив `city.houses` будет изменен, и все дома с указанной улицы будут удалены.
	//
	// Поскольку изменение объекта `city` происходит непосредственно внутри функции, нет необходимости возвращать новое значение или присваивать его переменной. Изменения будут отражены на самом объекте `city`.

	city.houses = city.houses.filter(el=> el.address.street.title !== streetName)
}
export const getBuildingsWithStaffCountGreaterThen = (governmentBuilding: GovernmentBuildingType[], staffCount: number) => {
	return governmentBuilding.filter(el => el.staffCount > staffCount)
}