import React from 'react';
import {StudentType} from "../02-objects/02";

type PropsType = {
	title: string
	student: StudentType
	food: string[]
	car: {model:string}
}

const customUseState =(message: string)=>{
	return [message, function (){}]
}
customUseState("hello")

//4)
export const Student: React.FC<PropsType> = (props) => {
	const {title, student, ...restProps} = props; // use "title" and "student" variables from "props" object and send another keys to "restProps" object
	console.log(restProps)
	return (
		<div>
			<h1>{title}</h1>
			<h2>{props.car.model}</h2>
			<h2>{student.name}</h2>
			<h2>{props.food}</h2>
		</div>
	);
};

//3)
// export const Student: React.FC<PropsType> = ({title, student, ...props}) => { // rest operator (use all another keys and send them to props object)
//
// // 	return (
// // 		<div>
// // 			<h1>{title}</h1>
// // 			<h2>{props.car.model}</h2>
// // 			<h2>{student.name}</h2>
// // 			<h2>{props.food}</h2>
// // 		</div>
// // 	);
// // };

//2)
// export const Student: React.FC<PropsType> = ({title, student:{name}}) => {

// 	return (
// 		<div>
// 			<h1>{title}</h1>
// 			<h2>{name}</h2>
// 		</div>
// 	);
// };

//1)

// export const Student: React.FC<PropsType> = (props) => {


// 	const {title, student} = props
// 	return (
// 		<div>
// 			<h1>{title}</h1>
// 			<h2>{student.name}</h2>
// 		</div>
// 	);
// };

