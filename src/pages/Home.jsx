import React from 'react'
import Events from '../componets/Home/Events'
import Explore from '../componets/Home/Explore'
import Hero from '../componets/Home/Hero'
import Quote from '../componets/Home/Quote'

const Home = () => {
  return (
    <>
      <Hero />
      <Quote />
      <Events />
      <Explore />
    </>
  )
}

export default Home