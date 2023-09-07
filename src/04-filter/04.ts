export const value04 = ""
const ages = [12,55,87,4,27,37,69,100,97,23,5]

const predicate = (age: number) => {
	return age > 90;
}
const oldAges = []

export type CourseType = {
	title: string
	price: number
}
const courses = [
	{title: "CSS", price: 100},
	{title: "JS", price: 200},
	{title: "React", price: 150},
]
const getCheapCourses = (courses: CourseType[]) => {
	return courses.filter(el=> el.price < 160)
}
console.log(getCheapCourses(courses))