import React, { useState } from 'react'
import styled from "styled-components";
import { RiLuggageDepositLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FaCoins } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { SlSupport } from "react-icons/sl";
import { FaHouse, FaGift } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from '@/hooks/reduxtoolkit';
import { GetSingleInvestmentOfAUser } from '@/features/investments/investmentReducer';
import { GetSingleRoiOfAUser } from '@/features/roi/roiReducer';

const Courses = () => {
    const { userInfo } = useAppSelector(store => store.auth)
    const dispatch = useAppDispatch()

    const { investments } = useAppSelector(store => store.investments)
    const { Roi } = useAppSelector(store => store.roi)
    const userData = JSON.parse(localStorage.getItem("User") || 'false');
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        dispatch(GetSingleInvestmentOfAUser({ Detailsdata: "" }))
        dispatch(GetSingleRoiOfAUser({ Detailsdata: "" }))
    }, []);

    const sidebarData = [
        {
            icon: <FaHouse />,
            title: "Account Balance",
            path: ``,
            value: `$ ${userData?.account_balance}`,
            color: "#3693FF"
        },
        {
            icon: <FaCoins />,
            title: "Investment",
            path: "Total Profit",
            value: `${investments?.length}`,
            color: "#5B5E81",
        },
        {
            icon: <FaGift />,
            title: "Total Bonus",
            color: "#FFAB2D",
            value: `$ ${userData?.total_bonus}`,
            path: "overview",
        },
        {
            icon: <IoBriefcase />,
            title: "Total Referral Bonus",
            value: `$ ${userData?.referralbonus}`,
            path: "messages",
            color: "#AC4CBC",
        }, {
            icon: <AiOutlineMail />,
            title: "Total Investment Plans",
            value: `${investments?.length}`,
            path: "reviews",
            color: "#48ABF7",
        },
        {
            icon: <HiOutlineMailOpen />,
            title: "Total Active Investment Plans ",
            value: `${Roi?.length}`,

            path: "students",
            color: "#31CE36",

        },
        {
            icon: <RiLuggageDepositLine />,
            title: "Deposit",
            path: "students",
            value: `$ ${userData?.deposit}`,
            color: "rgb(255,173,70)",

        },
        {
            icon: <SlSupport />,
            title: "Help/Support ",
            path: "students",
            value: `0`,
            color: "rgb(242,89,97)",

        },
    ];
    const Widget = () => {
        return <WidgetStyles className="w-100">
            <div className="widget_wrapper w-100">
                {sidebarData.map((x) => {
                    return (
                        <div
                            style={{ background: `${x?.color}` }}
                            className='widget_card w-100 flex item-center gap-2'
                        >
                            <span className="icon_widget flex item-center justify-center">
                                {x.icon}
                            </span>

                            <span className='text-dark fs-30 text-bold'>
                                {x?.value}
                                <span className="block fs-16 family1 font-medium text-white">{x?.title}</span>
                            </span>
                        </div>
                    );
                })}
            </div>
        </WidgetStyles>
    }

    const TradingChart = () => {
        return <TradingChartStyles className="w-100 flex column gap-1">
            <div className="flex column gap-1">
                <h3 className="fs-30 family1 font-bold text-grey2">
                    Crypto Statistics
                </h3>
            </div>
            <div className="trading_wrapper w-100">
                <div className="">
                    <div className="w-100" style={{ margin: "30px 0px 10px 0px" }}>
                        <div id="tradingview_f933e"><div id="tradingview_be3e5-wrapper w-100 relative h-[600px]">
                            <iframe
                                style={{ width: "100%", height: "600px" }}
                                title="advanced chart TradingView widget" lang="en" id="tradingview_be3e5" frameBorder="0"
                                allowTransparency scrolling="no" allowFullScreen
                                src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22COINBASE%3ABTCUSD%22%2C%22frameElementId%22%3A%22tradingview_be3e5%22%2C%22interval%22%3A%221%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22BB%40tv-basicstudies%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%229%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22metacorepoint.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22COINBASE%3ABTCUSD%22%2C%22page-uri%22%3A%22metacorepoint.com%2Faccount%2Fdashboard%22%7D"></iframe></div></div>

                    </div>
                </div>
            </div>
        </TradingChartStyles>
    }

    const ForexChart = () => {
        return <TradingChartStyles className="w-100 shadow flex column gap-1">
            <div className="flex column gap-1">
                <h3 className="fs-30 family1 font-bold text-grey2">
                    Forex Trading Chart
                </h3>
            </div>
            <div className="trading_wrapper w-100">
                <div className="">
                    <div className="w-100" style={{ margin: "30px 0px 10px 0px" }}>
                        <div id="tradingview_f933e"><div id="tradingview_be3e5-wrapper w-100 relative h-[600px]">
                            <iframe
                                style={{ width: "100%", height: "500px" }}
                                title="advanced chart TradingView widget" lang="en" id="tradingview_be3e5" frameBorder="0"
                                allowTransparency scrolling="no" allowFullScreen
                                src="https://www.tradingview-widget.com/embed-widget/forex-cross-rates/?locale=en#%7B%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22BTC%22%2C%22ETH%22%2C%22LTC%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22light%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22metacorepoint.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22metacorepoint.com%2Faccount%2Fdashboard%22%7D"
                            />
                            {/* <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/forex-cross-rates/?locale=en#%7B%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22BTC%22%2C%22ETH%22%2C%22LTC%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22light%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22metacorepoint.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22metacorepoint.com%2Faccount%2Fdashboard%22%7D" title="forex cross-rates TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: calc(100% - 32px); width: 100%;"></iframe> */}
                        </div>
                        </div >

                    </div >
                </div >
            </div >

        </TradingChartStyles>
    }

    return (
        <div style={{ minHeight: "100vh" }} className="w-100">
            <div style={{ width: "95%" }} className="auto flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="fs-45 text-dark">
                        Dashboard, <span className="text-2xl md:text-3xl family1 text-light text-grey">
                            Welcome {userInfo?.username}!
                        </span>
                    </h2>
                </div>
                <div className="w-100 flex column gap-4">
                    <Widget />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <TradingChart />
                        <ForexChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

const WidgetStyles = styled.div`
  width: 100%;
  margin: 1rem auto;
  .widget_wrapper {
    width:100%;
    display:grid;
    grid-gap: 2rem;
    /* grid-template-columns: repeat(auto-fit,minmax(200px,1fr)); */
     grid-template-columns: 1fr 1fr 1fr;
    @media (max-width:780px) {
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    }
    @media (max-width:480px) {
        grid-template-columns: 1fr;
    }
    .widget_card {
        padding:3rem 2rem;
        border-radius: 10px;
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



const TradingChartStyles = styled.div`
  width: 100%;
  margin: 2rem auto;
  background:#fff;
  padding:2rem 3rem;
  border-radius: 10px;

  .trading_wrapper {
    width:100%;
    .trading_card {
        padding:3rem 2rem;
        background-color: #fff;
                border:1px solid rgba(0,0,0,.1);
              
        .icon_trading{
            height: 5rem;
            width:5rem;
                border:1px solid rgba(0,0,0,.1);
        svg {
            font-size: 20px;
            color:#fff;
        }
        }
    }
  }
`


export default Courses