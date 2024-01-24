import React from 'react';
import styled from 'styled-components';
import Hero from './hero';
import Works from './Works';
import Banner from '../home/Banner';
import Navbar from '../common/Navbar';

const About: React.FC = () => {
  return (
    <HomeStyles>
      <Navbar/>
      <Hero />
      <Banner/>
      
    </HomeStyles>
  )
}

const HomeStyles = styled.div`
  `

export default About