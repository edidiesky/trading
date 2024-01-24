import React from 'react';
import styled from 'styled-components';
import Hero from './hero';
import NewsLetter from './NewsLetter';
import Packages from './Packages';
import Works from './Works';

const Home: React.FC = () => {
  return (
    <HomeStyles>
      <Hero />
      <Works />
      <Packages /> 
      <NewsLetter />
      
    </HomeStyles>
  )
}

const HomeStyles = styled.div`
  `

export default Home