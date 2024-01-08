import React from 'react';
import styled from 'styled-components';
import Hero from './hero';
import Testimonial from './Testimonial';
import NewsLetter from './NewsLetter';
import Chart from './Chart';
import Packages from './Packages';
import Ratings from './Ratings';
import Works from './Works';

const Home: React.FC = () => {
  return (
    <HomeStyles>
      <Hero />
      <Works />
      <Ratings />
      {/* <Ratings />
      <Packages />
      <Chart />
      <Testimonial />
      <NewsLetter /> */}
    </HomeStyles>
  )
}

const HomeStyles = styled.div`
  `

export default Home