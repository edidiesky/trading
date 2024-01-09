import React from 'react';
import styled from 'styled-components';
import Hero from './hero';
import NewsLetter from './NewsLetter';
import Ratings from './Ratings';
import Works from './Works';
import Banner from './Banner';

const About: React.FC = () => {
  return (
    <HomeStyles>
      <Hero />
      <Works />
      <Ratings />
      <NewsLetter />
      <Banner/>
      
    </HomeStyles>
  )
}

const HomeStyles = styled.div`
  `

export default About