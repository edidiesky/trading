

import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import Home from '../components/about';
import Footer from '../components/common/Footer';
const AboutIndex: React.FC = () => {
  return (
    <HomeStyles>
      <Home />
      <Footer />
    </HomeStyles>
  )
}


const HomeStyles = styled.div`
  width: 100%;
  position: relative;
`

export default AboutIndex