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
	return (
		<div>
			<div>Roma</div>
			<button onClick={saveUser}>Save</button>
			<button onClick={deleteUser}>Delete</button>
			<div onClick={saveUser}>Save</div>
			<div onClick={deleteUser}>Delete</div>
		</div>
	)
}
