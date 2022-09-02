import React from 'react'
import { Logo } from '../../../public/images'

function Login() {
	return (
		<div className="outer-container w-full h-screen bg-primary flex justify-center items-center rounded drop-shadow-md">
			<div className='login-form-container bg-white py-8 px-12 drop-shadow-md rounded-md'>
				<Logo className="form-logo text-center mb-8" />

				<form className="flex flex-col" action='http://localhost:3000/user/login'>
					<label className="form-label">
						Email
					</label>
					<input className='input-field' type="email" />
					<label className="form-label">Password</label>
					<input className='input-field' type="password" />
					<button type='submit' className='bg-secondary text-white p-1 hover:bg-blue-600 rounded mt-2 mb-4'>Login</button>
					<span className='text-sm sign-up-text w-full text-gray-600 text-center'>Don't have an account? <a className='text-secondary' href='/sign-up'>Create account.</a></span>
				</form>
			</div>
		</div>

	)
}

export default Login