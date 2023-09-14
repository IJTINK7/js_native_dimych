import React, {ChangeEvent, MouseEvent} from "react";
// const callback = ()=> {
// 	alert("Hi")
// }
// window.setTimeout(callback,2000)

export const User = () =>{
	const deleteUser = (event: MouseEvent<HTMLButtonElement>)=> {
		console.log(event.currentTarget.value)
	}
	const saveUser = (event: MouseEvent<HTMLButtonElement>)=> {
		console.log(event.currentTarget.value)
	}
	const onNameChanged = ()=>{
		console.log("Name was changed")
	}
	const focusHasBeenLostHandler = ()=>{
		console.log("Focus Has Been Lost")
	}
	const onAgeChangedHandler = (event: ChangeEvent<HTMLInputElement>)=>{
		console.log("Age was changed to: " + event.currentTarget.value)
	}
	return (
		<div>
			<div>
				<textarea value={""} onChange={onNameChanged} onBlur={focusHasBeenLostHandler}>Roma</textarea>
			</div>
			<input type="number" onChange={onAgeChangedHandler}/>
			<button value={"save"} onClick={saveUser}>Save</button>
			<button value={"delete"} onClick={deleteUser}>Delete</button>
		</div>
	)
}
