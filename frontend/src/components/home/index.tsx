import React from 'react';
import styled from 'styled-components';
import Hero from './hero';
import Testimonial from './Testimonial';
import NewsLetter from './NewsLetter';
import Chart from './Chart';
import Packages from './Packages';
import Ratings from './Ratings';
import Works from './Works';
import { BsAlignCenter } from 'react-icons/bs';
import Banner from './Banner';

const Home: React.FC = () => {
  return (
    <HomeStyles>
      <Hero />
      <Works />
      <Ratings />
      <Packages />
      <div className="w-100 py-32 bg-[#D48574]">
        <div className="w-90 auto py-24 ">
          <iframe allowTransparency frameBorder="0"
            src="https://www.tradingview-widget.com/embed-widget/screener/#%7B%22width%22%3A1100%2C%22height%22%3A523%2C%22defaultColumn%22%3A%22overview%22%2C%22defaultScreen%22%3A%22general%22%2C%22market%22%3A%22forex%22%2C%22showToolbar%22%3Atrue%2C%22isTransparent%22%3Afalse%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22metacorepoint.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22forexscreener%22%2C%22page-uri%22%3A%22metacorepoint.com%2F%22%7D"
            title="screener TradingView widget" lang="en"
            style={{ boxSizing: "border-box", display: " block", height: "600px", width: "100%" }}>

          </iframe>
        </div>
      </div>
     
      {/* <Ratings />
      <Packages />
      <Chart />
     */}
      <Testimonial />
      <NewsLetter />
      <Banner/>
      
    </HomeStyles>
  )
}

const HomeStyles = styled.div`
  `

export default Home