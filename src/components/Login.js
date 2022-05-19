import React, { useState } from 'react'

const api = 'https://api-telly-tell.herokuapp.com/api/client/signin';

async function loginUser(credentials) {
	return fetch(api, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials)
	})
		.then(data => data.json())
}

const Login = ({ setToken }) => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: ''
	});
	const { email, password } = credentials;

	const handleSubmitForm = async (e) => {
		e.preventDefault();
		const result = await loginUser(credentials);
		setToken(result.token);
	}

	const handleChangeEmail = (e) => {
		setCredentials(prevState => ({ ...prevState, email: e.target.value }))
	}

	const handleChangePassword = (e) => {
		setCredentials(prevState => ({ ...prevState, password: e.target.value }))
	}

	return (
		<div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
			<div className="form-wrapper bg-light">
				<div className='d-flex flex-column'>
					<img src="https://res.cloudinary.com/duenuiiav/image/upload/v1651050786/Products/picture_1651050782648_uuankr.jpg" width='100px' height="100px" />
					<h4>Sign in</h4>
					<p>Sign in through following method</p>
				</div>
				<form className='d-flex flex-column'>
					<label className='my-1 py-1' htmlFor="email">Email</label>
					<input className='p-1' type="email" placeholder='Enter Your Email' name="email" id="email" value={email} onChange={handleChangeEmail} />
					<label className='my-1 py-1' htmlFor="password">Password</label>
					<input className='p-1' type="password" name="password" id="password" placeholder='Password' value={password} onChange={handleChangePassword} style={{ width: '300px' }} />
					<button className="btn mt-3" onClick={handleSubmitForm}>Submit</button>
				</form>
				<p className='mt-3'>Need an Account? <a href='#'>Sign Up</a></p>
			</div>
		</div>
	)
}

export default Login