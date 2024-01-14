

import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import Home from '../components/home';
import Footer from '../components/common/Footer';
const HomeIndex: React.FC = () => {
  return (
    <HomeStyles>
      <Home />
      <Footer />
      <div style={{ position: "fixed", height: "44px", background: "rgb(35,33, 45)", bottom: "0", left: "0", zIndex: "10000000" }} className="w-100">
        <iframe style={{ height: "100%", width: "100%" }} scrolling="no" allowTransparency frameBorder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22BTC%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22ETH%2FUSD%22%7D%5D%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A44%2C%22utm_source%22%3A%22metacorepoint.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22metacorepoint.com%2Fassets.html%22%7D" title="ticker tape TradingView widget" lang="en"></iframe>
      </div>
    </HomeStyles>
  )
}


const HomeStyles = styled.div`
  width: 100%;
  position: relative;
`

export default HomeIndex