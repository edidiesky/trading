import React from 'react';
import styled from 'styled-components';
import Hero from './hero';
import NewsLetter from './NewsLetter';
import Packages from './Packages';
import Works from './Works';
import Banner from './Banner'

const Home: React.FC = () => {
  return (
    <HomeStyles>
      <Hero />
      <Works />
      <Packages /> 
      <Banner />
      <NewsLetter />
     
    </HomeStyles>
  )
}

const HomeStyles = styled.div`
  `

export default Home