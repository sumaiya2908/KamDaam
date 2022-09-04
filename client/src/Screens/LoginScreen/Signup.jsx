import React from 'react'

function Signup() {

	const handleSignup = () => {

	}
	return (
		<div className="outer-container w-full h-screen bg-primary flex justify-center items-center rounded drop-shadow-md">
			<div className='login-form-container bg-white py-8 px-12 drop-shadow-md rounded-md'>
				<Logo className="form-logo text-center mb-8" />
				<form onSubmit={handleSignup}>
					<label className='form-label'>Name</label>
					<input className='input-field' type='text' onChange={(e) => setName(e.target.value)} required />
					<label className="form-label">Email</label>
					<input className='input-field' type="email" onChange={(e) => setEmail(e.target.value)} required />
					<label className="form-label">Password</label>
					<input className='input-field' type="password" onChange={(e) => setPassword(e.target.value)} required />
					<label className="form-label"> Confirm Password</label>
					<input className='input-field' type="password" onChange={(e) => setConfirmPassword(e.target.value)} required />
					<button type='submit' className='bg-secondary text-white p-1 hover:bg-blue-600 rounded mt-2 mb-4'>{loading ? 'loading' : 'Signup'}</button>
					<span className='text-sm sign-up-text w-full text-gray-600 text-center'>Already have an account? <a className='text-secondary' href='/login'>Login.</a></span>
				</form>
			</div>
		</div>
	)
}

export default Signup