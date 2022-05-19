import React from 'react'
import Banner from './Banner'
import Latest from './Latest'
import Trending from './Trending'

const Movies = () => {
  return (
    <div className='home_movies'>
      <Banner />
      <Latest />
      <Trending/>
    </div>
  )
}

export default Movies