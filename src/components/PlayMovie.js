import React, { useContext, useState, useRef, useEffect } from 'react'
import { TokenContext } from '../App'
import { useLocation } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from '../Settings';


const PlayMovie = () => {
	const location = useLocation()
	let { videoId } = location.state;
	const { token } = useContext(TokenContext);
	const [movieInfo, setMovieInfo] = useState('');
	const api = `https://api-telly-tell.herokuapp.com/movie/rahul.verma/${videoId}`

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
			setMovieInfo(result.data);
		}
		fetchData()
	}, [])

	return (
		<div>
			<div className='movieBannerDiv'>
				<img className='movieBannerImg' src={movieInfo.banner} />
			</div>
			<div className="playMovieBtnDiv mx-2 px-2">
				<img src="https://png.pngtree.com/png-clipart/20210214/ourmid/pngtree-youtube-logo-transparent-png-png-image_5990834.png" width='43px' />
				<a href={movieInfo.video} className='text-decoration-none text-light fs-2'>PlayMovie</a>
			</div>

			<div className='container text-light mt-5 mb-4'>
				<div className='d-flex align-items-center justify-content-between flex-wrap'>
					<div><h1>{movieInfo.title}</h1><span>&nbsp;({movieInfo.Languages})</span></div>
					<button className='btn'>Add To WatchList</button>
				</div>
				<div className='d-flex flex-column flex-wrap mt-3'>
					<div className='d-flex align-items-center flex-wrap'>
						<img src="https://mpng.subpng.com/20180406/hhe/kisspng-imdb-film-director-computer-icons-television-u-5ac6f593dfa2f3.387615181522988435916.jpg" height='40px' />
						<span>&nbsp;&nbsp;{movieInfo.Ratings?.imDb}</span>
						<span className='text-secondary'>&nbsp;&nbsp;|</span>
						<span>&nbsp;&nbsp;{movieInfo.RuntimeStr}</span>
						<span className='text-secondary'>&nbsp;&nbsp;|</span>
						<span>&nbsp;&nbsp;{movieInfo.genres}</span>
						<span className='text-secondary'>&nbsp;&nbsp;|</span>
						<span>&nbsp;&nbsp;{movieInfo.year}</span>
					</div>
					<p className='mt-3'>{movieInfo.Plot}</p>
				</div>
				<div className="container-fluid mt-3">
					<h3>Crew</h3>
					<Slider {...settings}>
						{(movieInfo.Actors_list)?.map((actor, i) => {
							return (
								<React.Fragment key={i}>
									<div className="card" style={{ cursor: 'auto'}}>
										<img src={actor.image} className="card-img-top" style={{height:'233px'}}/>
									</div>
									<p>{actor.name} <span>{actor.asCharacter}</span></p>
								</React.Fragment>
							)
						})}
					</Slider>
				</div>
			</div>
		</div>
	)
}

export default PlayMovie