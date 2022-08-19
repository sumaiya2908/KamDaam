import React from 'react'
import { Logo } from '../../../public/images'

function Login() {
	return (
		<div className="outer-container">
			<div className='login-form-container bg-white py-8 px-16 flex justofy-center align-center'>
				<Logo className="flex justify-center align-center" />
				<form className="flex flex-col">
					<label className="form-label">
						Email
					</label>
					<input className='input-field' type="email" />
					<label className="form-label">Password</label>
					<input className='input-field' type="password" />
				</form>
			</div>
		</div>

	)
}

export default Login