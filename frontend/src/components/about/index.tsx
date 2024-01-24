import React from 'react';
import styled from 'styled-components';
import Ratings from './Ratings';
import Works from './Works';
import Banner from '../home/Banner';
import Navbar from '../common/Navbar';

const About: React.FC = () => {
  return (
    <HomeStyles>
      <Navbar/>
      <Works />
      <Ratings />
      <Banner/>
      
    </HomeStyles>
  )
}

const HomeStyles = styled.div`
  `

export default About