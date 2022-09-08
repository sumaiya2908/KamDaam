import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../../store/user';
import { Loader, Logo } from '../../../public/images';

function Signup() {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const {loading, error, success} = useSelector((state) =>  state.user)

	const handleSignup = (e) => {
		e.preventDefault()
		if (password != confirmPassword) {
			return console.log("passwords do not match")
		}

		dispatch(signin({name, email, password}))
	}

	useEffect(() => {
		if (success) {
			history.pushState({}, '', '/login')
		}
		if (error) {
			console.error(error)
		}

	}, [loading, error, success])

	return (
		<div className="outer-container w-full h-screen bg-primary flex justify-center items-center rounded drop-shadow-md">
			<div className='login-form-container bg-white py-8 px-12 drop-shadow-md rounded-md'>
				<Logo className="form-logo text-center mb-8" />
				<form className='flex flex-col' onSubmit={handleSignup}>
					<label className='form-label'>Name</label>
					<input className='input-field' type='text' onChange={(e) => setName(e.target.value)} required />
					<label className="form-label">Email</label>
					<input className='input-field' type="email" onChange={(e) => setEmail(e.target.value)} required />
					<label className="form-label">Password</label>
					<input className='input-field' type="password" onChange={(e) => setPassword(e.target.value)} required />
					<label className="form-label"> Confirm Password</label>
					<input className='input-field' type="password" onChange={(e) => setConfirmPassword(e.target.value)} required />
					<button type='submit' className='bg-secondary text-white p-1 hover:bg-blue-600 rounded mt-2 mb-4'>{loading ? <Loader/> : 'Signup'}</button>
					<span className='text-sm sign-up-text w-full text-gray-600 text-center'>Already have an account? <a className='text-secondary' href='/login'>Login.</a></span>
				</form>
			</div>
		</div>
	)
}

export default Signup