import React from 'react';
import {StudentType} from "../02-objects/02";

type PropsType = {
	title: string
	student: StudentType
}
export const Student: React.FC<PropsType> = ({title, student:{name}}) => {
	return (
		<div>
			<h1>{title}</h1>
			<h2>{name}</h2>
		</div>
	);
};
