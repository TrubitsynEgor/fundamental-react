import React, { useContext } from 'react'
import MyButton from '../components/UI/buttons/MyButton'
import MyInput from '../components/UI/inputs/MyInput'
import { AuthContext } from '../context'

const Login = () => {
	const { setIsAuth } = useContext(AuthContext);
	const submit = (e) => {
		e.preventDefault()
		setIsAuth(true)
		localStorage.setItem('auth', 'true')
	}
	return (
		<div className='login'>
			<h1>Login page:</h1>
			<form onSubmit={submit} className='login-form' action="">
				<MyInput type='text' placeholder='Enter login' />
				<MyInput type='password' placeholder='Enter password' />
				<MyButton>Login</MyButton>
			</form>
		</div>
	)
}

export default Login