export type CityType = {
	title: string
	houses: HousesType[]
	governmentBuildings: GovernmentBuildingType[]
	citizensNumber: number
}
export type HousesType = {
	build: number
	repaired: boolean
	address: HousesAddressType
}
type HousesAddressType = {
	number: number
	street: HousesAddressStreetType
}
type HousesAddressStreetType = {
	title: string
}

export type GovernmentBuildingType = {
	type: "HOSPITAL" | "FIRE-STATION"
	budget: number
	staffCount: number
	address: GovernmentBuildingAddressType
}
type GovernmentBuildingAddressType = {
	street: GovernmentBuildingAddressStreetType
}
type GovernmentBuildingAddressStreetType = {
	title: "Central Str" | "South Str"
}