import {UsersType} from "./08";

let users: UsersType;

beforeEach(()=>{
	users = {
		"101": {id: 101, name: "Dimych"},
		"14302": {id: 14302, name: "Kate"},
		"1052": {id: 1052, name: "Anton"},
		"12": {id: 12, name: "Valera"},
	}
})

test("should update necessary object",()=>{
	users["101"].name = "Roma"
	expect(users["101"].name).toBe("Roma")
	expect(users["101"]).toEqual({id: 101, name: "Roma"})
})

test("should delete necessary object",()=>{
	delete users["101"]
	expect(users["101"]).toBeUndefined()
})