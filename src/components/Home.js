import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../App'
import Banner from './Banner';
import Latest from './Latest';
import Trending from './Trending';

const Home = () => {
	return (
		<div className='home_movies'>
			<Banner />
			<Latest />
			<Trending/>
		</div>
	)
}

export default Home