import React, { useState } from 'react'
import styled from "styled-components";
export const sidebarData = [
    {
        icon: 'https://img.icons8.com/color/48/000000/bitcoin--v1.png',
        path: "BTC",
        color: "#6861CE"
    },
    {
        icon: "https://img.icons8.com/fluency/48/000000/ethereum.png",
        path: "ETH",
    },
    {
        icon: "https://img.icons8.com/fluency/48/000000/litecoin.png",
        path: "LTH",
    },
    {
        icon: "https://img.icons8.com/cotton/64/000000/chainlink.png",
        path: "lINK",
    }, {
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
        path: "BNB",
    },
    {
        icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
        path: "ADA",

    },
    {
        icon:"https://dynamic-assets.coinbase.com/6ad513d3c9108b163cf0a4c9fd3441cadcb9cf656ea7b9fb333eb7e4a94cd503528e0a94188285d31aedfc392f0793fd4161f7ad4e04d5f6b82e4d70a314d295/asset_icons/80f3d2256652f5ccd680fc48702d130dd01f1bd7c9737fac560a02949efac3b9.png",
        path: "AAVE",

    },
    {
        icon: "https://img.icons8.com/color/48/000000/tether--v2.png",
        path: "USDT",

    },
];
const Reviews = () => {
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    const Widget = () => {
        return <WidgetStyles className="w-100">
            <div className="widget_wrapper w-100">
                {sidebarData.map((x) => {
                    return (
                        <div
                            className='widget_card flex item-center gap-2'
                        >
                            <span  className="icon_widget flex item-center justify-center">
                               <img src={x.icon} alt="" />
                            </span>

                            <span className='text-dark family1 fs-20 text-bold'>
                                {/* $200 */} 0 {x?.path}
                                {/* <span className="block fs-12 text-light text-grey2">{x?.path}</span> */}
                            </span>
                        </div>
                    );
                })}
            </div>
        </WidgetStyles>
    }

    return (
        <div style={{ minHeight: "100vh" }} className="w-100">
            <div style={{width:"95%"}} className="auto py-4 flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="fs-45 text-dark">
                        Crypto Exchange
                    </h2>
                    <span className="fs-16 w-50 text-light text-grey2">
                        Your detailed description of all your crypto exchange
                    </span>
                </div>
                <Widget/>
                <div className="w-100 grid bottom grid-cols-1 lg:grid-cols-2">
                    <div className="w-100">
                        <div className="w-100" style={{ margin: "30px 0px 10px 0px" }}>
                            <div id="tradingview_f933e"><div id="tradingview_be3e5-wrapper w-100 relative h-[600px]">
                                <iframe
                                    style={{ width: "100%", height: "600px" }}
                                    title="advanced chart TradingView widget" lang="en" id="tradingview_be3e5" frameBorder="0"
                                    allowTransparency scrolling="no" allowFullScreen
                                    src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22COINBASE%3ABTCUSD%22%2C%22frameElementId%22%3A%22tradingview_be3e5%22%2C%22interval%22%3A%221%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22BB%40tv-basicstudies%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%229%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22metacorepoint.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22COINBASE%3ABTCUSD%22%2C%22page-uri%22%3A%22metacorepoint.com%2Faccount%2Fdashboard%22%7D"></iframe></div></div>

                        </div>
                    </div>
                    <div className="w-100 flex column gap-4"></div>
                </div>
            </div>
        </div>
    )
}

const WidgetStyles = styled.div`
  width: 100%;
  margin: 2rem auto;
  .widget_wrapper {
    display:grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width:780px) {
        grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
    }
    .widget_card {
        padding:3rem 2rem;
        background-color: #fff;
        box-shadow: var(--shadow);
        .icon_widget{
            height: 5rem;
            width:5rem;
        svg {
            font-size: 20px;
            color:#fff;
        }
        }
    }
  }
`


export default Reviews