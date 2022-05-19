import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { TokenContext } from '../App'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from '../Settings';

const api = 'https://api-telly-tell.herokuapp.com/latest/rahul.verma'

const Latest = () => {
	const { token } = useContext(TokenContext)
	const [latest, setLatest] = useState([])
	useEffect(() => {
		async function fetchData() {
			const res = await fetch(api, {
				method: 'GET',
				headers: {
					"Access-Control-Allow-Origin": "*",
					Authorization: `Bearer ${token}`,
				}
			})
			const result = await res.json()
			setLatest(result.data)
		}
		fetchData()
	}, [])

	return (
		<div className="container-fluid">
			<h3 className='text-light mx-4'>Latest</h3>
			<Slider {...settings}>
				{latest.map((l, i) => {
					return (
						<Link key={i} to='/playMovie' className='text-light text-decoration-none d-flex flex-column align-items-center' state={{ videoId: l._id }}>
							<div className="card" >
								<img src={l.thumbnail} className="card-img-top" />
							</div>
							<p>{l.title}</p>
						</Link>
					)
				})}
			</Slider>

		</div>
	)
}

export default Latest