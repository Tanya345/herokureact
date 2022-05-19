import React, { useState, useEffect } from 'react'

const api = 'https://api-telly-tell.herokuapp.com/banners/rahul.verma'
const token = process.env.REACT_APP_HEROKU_TOKEN
const Banner = () => {
	const [banners, setBanners] = useState([])
	const [currentIndex, setCurrentIndex] = useState(0);

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
			setBanners(result.data)
		}
		fetchData()
	}, [])
	const bannersLength = banners.length

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (currentIndex === bannersLength - 1) {
				setCurrentIndex(0);
			}
			else {
				setCurrentIndex(currentIndex + 1);
			}
		}, 3000)

		return () => clearInterval(intervalId);
	})

	return (
		<>
			<div className="bannersDiv">
				<img src={banners[currentIndex]?.bannerimage} />
			</div>
			<div className='dotsDiv'>
				{[...Array(bannersLength)].map((e, i) => {
					return (
						<p className='dot mx-2 my-0 px-2' key={i} style={{ color: `${currentIndex === i ? 'black' : '#00000087'}` }}>.</p>
					)
				})}
			</div>
		</>
	)
}

export default Banner