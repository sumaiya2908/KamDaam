import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Logo, Loader } from '../../../public/images';
import { login } from '../../../store/user'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { userInfo, error, loading } = useSelector((state) => state.user)

	const dispatch = useDispatch();

	const handleLogin = (e) => {
		e.preventDefault();
		setEmail(email.toLowerCase())
		dispatch(login({ email, password }))
	}

	useEffect(() => {
		if (error) {

		}
	}, [error, loading, userInfo])

	return (
		<div className="outer-container w-full h-screen bg-primary flex justify-center items-center rounded drop-shadow-md">
			<div className='login-form-container bg-white py-8 px-12 drop-shadow-md rounded-md'>
				<Logo className="form-logo text-center mb-8" />

				<form className="flex flex-col" onSubmit={handleLogin}>
					<label className="form-label">
						Email
					</label>
					<input className='input-field' type="email" onChange={(e) => setEmail(e.target.value)} required />
					<label className="form-label">Password</label>
					<input className='input-field' type="password" onChange={(e) => setPassword(e.target.value)} required />
					<button type='submit' className='bg-secondary text-center text-white p-1 hover:bg-blue-600 rounded mt-2 mb-4'><Loader/></button>
					<span className='text-sm sign-up-text w-full text-gray-600 text-center'>Don't have an account? <a className='text-secondary' href='/sign-up'>Create account.</a></span>
				</form>
			</div>
		</div>

	)
}

export default Login