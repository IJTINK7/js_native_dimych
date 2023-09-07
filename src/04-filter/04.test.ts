import {CourseType} from "./04";

test("should select people over the age of 90",()=>{
	const ages = [12,55,87,4,27,37,69,100,97,23,5]

	const predicate = (el : number) =>{
		return el > 90
	}
	const oldAges = ages.filter(predicate);

	expect(oldAges.length).toBe(2)
	expect(oldAges[0]).toBe(100)
	expect(oldAges[1]).toBe(97)
});

test("should choose courses that are cheaper than 160",()=>{
	const courses = [
		{title: "CSS", price: 100},
		{title: "JS", price: 200},
		{title: "React", price: 150},
	]
	const getCheapCourses = (course: CourseType) => {
		return course.price < 160
	}
	const cheapCourses = courses.filter(getCheapCourses)


	expect(cheapCourses.length).toBe(2)
	expect(cheapCourses[0].title).toBe("CSS")
	expect(cheapCourses[1].title).toBe("React")
});

test("get only completed tasks",()=>{
	const tasks = [
		{id: 1,title: "Task 1",completed: false},
		{id: 2,title: "Task 2",completed: false},
		{id: 3,title: "Task 3",completed: true},
		{id: 4,title: "Task 4",completed: false},
		{id: 5,title: "Task 5",completed: true},
	];
	const completedTask = tasks.filter(el => el.completed)
	expect(completedTask.length).toBe(2)
	expect(completedTask[0].id).toBe(3)
	expect(completedTask[1].id).toBe(5)
 });

test("get only uncompleted tasks",()=>{
	const tasks = [
		{id: 1,title: "Task 1",completed: false},
		{id: 2,title: "Task 2",completed: false},
		{id: 3,title: "Task 3",completed: true},
		{id: 4,title: "Task 4",completed: false},
		{id: 5,title: "Task 5",completed: true},
	];
	const uncompletedTask = tasks.filter(el => !el.completed)
	expect(uncompletedTask.length).toBe(3)
	expect(uncompletedTask[0].id).toBe(1)
	expect(uncompletedTask[1].id).toBe(2)
	expect(uncompletedTask[2].id).toBe(4)
});