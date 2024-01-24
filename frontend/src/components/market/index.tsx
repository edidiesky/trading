import React from 'react';
import styled from 'styled-components';
import Hero from './hero';
import Works from './Works';
import Banner from '../home/Banner';

const About: React.FC = () => {
  return (
    <HomeStyles>
      <Hero />
      <Banner/>
      
    </HomeStyles>
  )
}

const HomeStyles = styled.div`
  `

export default About