// const callback = ()=> {
// 	alert("Hi")
// }
// window.setTimeout(callback,2000)

export const User = () =>{
	const deleteUser = ()=> {
		alert("User has been deleted")
	}
	const saveUser = ()=> {
		alert("User has been saved")
	}
	const onNameChanged =()=>{
		console.log("Name was changed")
	}
	const focusHasBeenLostHandler =()=>{
		console.log("Focus Has Been Lost")
	}
	return (
		<div>
			<div>
				<textarea onChange={onNameChanged} onBlur={focusHasBeenLostHandler}>Roma</textarea>
			</div>
			<input type="text"/>
			<button onClick={saveUser}>Save</button>
			<button onClick={deleteUser}>Delete</button>
			<div onClick={saveUser}>Save</div>
			<div onClick={deleteUser}>Delete</div>
		</div>
	)
}
