import {GovernmentBuildingType, HousesType} from "../02-objects/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: GovernmentBuildingType[]) => {
	return governmentBuildings.map(el => el.address.street.title)
}
export const getStreetsTitlesOfHouses = (houses: HousesType[]) => {
	return houses.map(el => el.address.street.title)
}
export const createMessages = (houses: HousesType[]) => {
	return houses.map(el => `Hello from ${el.address.street.title}`)
}