import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TokenContext } from '../App'

const NavBar = () => {
	const { setToken } = useContext(TokenContext)
	const handleLogOut = () => {
		localStorage.clear();
		// setToken('')
	}
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid">

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item px-1">
							<Link className="nav-link text-light " aria-current="page" to="/">Home</Link>
						</li>
						<li className="nav-item px-1">
							<Link className="nav-link text-light" to="/movies">Movies</Link>
						</li>
						<li className="nav-item px-1">
							<Link className="nav-link text-light" to="/">TV Shows</Link>
						</li>
					</ul>
					<button className="btn-light rounded navbar-toggler-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></button>
					<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
						<div className="offcanvas-header">
							<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>
						<div className="offcanvas-body d-flex flex-column align-items-center">
							<span className='my-1 py-1' role='button' data-bs-dismiss="offcanvas" onClick={handleLogOut}>Log Out</span>
							<span className='my-1 py-1' role='button'>Profile</span>
							<span className='my-1 py-1' role='button'>Address For Cart</span>
							<span className='my-1 py-1' role='button'>CheckOut</span>
							<span className='my-1 py-1' role='button'>About Us</span>
							<span className='my-1 py-1' role='button'>Terms and Conditions</span>
							<span className='my-1 py-1' role='button'>Contact Us</span>
							<span className='my-1 py-1' role='button'>Privacy Policy</span>
							<span className='my-1 py-1' role='button'>Change Password</span>
							<span className='my-1 py-1' role='button'>Subscription</span>
						</div>
					</div>
				</div>
			</div>
		</nav>

	)
}

export default NavBar