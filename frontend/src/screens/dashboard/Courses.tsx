import React, { useState } from 'react'
import styled from "styled-components";
import { RiLuggageDepositLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FaCoins } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { SlSupport } from "react-icons/sl";
import { FaHouse, FaGift } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";
import { useAppSelector } from '@/hooks/reduxtoolkit';
export const sidebarData = [
    {
        icon: <FaHouse />,
        title: "Account Balance",
        path: "",
        color: "#6861CE"
    },
    {
        icon: <FaCoins />,
        title: "Invest",
        path: "Total Profit",
        color: "#F25961",
    },
    {
        icon: <FaGift />,
        title: "Total Bonus",
        color: "#31CE36",
        path: "overview",
    },
    {
        icon: <IoBriefcase />,
        title: "Total Referral Bonus",
        path: "messages",
        color: "#6861CE",
    }, {
        icon: <AiOutlineMail />,
        title: "Total Investment Plans",
        path: "reviews",
        color: "#48ABF7",
    },
    {
        icon: <HiOutlineMailOpen />,
        title: "Total Active Investment Plans ",
        path: "students",
        color: "#31CE36",

    },
    {
        icon: <RiLuggageDepositLine />,
        title: "Deposit",
        path: "students",
        color: "rgb(255,173,70)",

    },
    {
        icon: <SlSupport />,
        title: "Help/Support ",
        path: "students",
        color: "rgb(242,89,97)",

    },
];
const Courses = () => {
    const { userInfo } = useAppSelector(store => store.auth)

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    const Widget = () => {
        return <WidgetStyles className="w-100">
            <div className="widget_wrapper w-100">
                {sidebarData.map((x) => {
                    return (
                        <div
                            className='widget_card w-100 flex item-center gap-2'
                        >
                            <span style={{ background: `${x?.color}` }} className="icon_widget flex item-center justify-center">
                                {x.icon}
                            </span>

                            <span className='text-dark family1 fs-24 text-bold'>
                                $200
                                <span className="block fs-12 text-light text-grey2">{x?.title}</span>
                            </span>
                        </div>
                    );
                })}
            </div>
        </WidgetStyles>
    }

    const TradingChart = () => {
        return <TradingChartStyles className="w-100 flex column gap-2">
            <div className="flex column gap-1">
                <h3 className="fs-20 family1 text-grey2">
                    Personal Trading Chart
                </h3>
            </div>
            <div className="trading_wrapper w-100">
                <div className="trading_card"></div>
            </div>
        </TradingChartStyles>
    }

    const ForexChart = () => {
        return <TradingChartStyles className="w-100 flex column gap-2">
            <div className="flex column gap-1">
                <h3 className="fs-20 family1 text-grey2">
                    Forex Trading Chart
                </h3>
            </div>
            <div className="trading_wrapper w-100">
                <div className="trading_card"></div>
            </div>
        </TradingChartStyles>
    }

    return (
        <div style={{ minHeight: "100vh" }} className="w-100">
            <div style={{ width: "95%" }} className="auto py-4 flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="fs-45 text-dark">
                        Welcome, {userInfo?.username}!
                    </h2>
                    <span className="fs-16 w-50 text-light text-grey2">
                        Welcome to MetaCore Point
                    </span>
                </div>
                <div className="w-100 flex column gap-4">
                    <Widget />
                    <TradingChart/>
                    <ForexChart />
                </div>
            </div>
        </div>
    )
}

const WidgetStyles = styled.div`
  width: 100%;
  margin: 2rem auto;
  .widget_wrapper {
    width:100%;
    display:grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    .widget_card {
        padding:3rem 2rem;
        background-color: #fff;
         border:1px solid rgba(0,0,0,.1);

        .icon_widget{
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


const TradingChartStyles = styled.div`
  width: 100%;
  margin: 2rem auto;
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