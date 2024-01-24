import React from "react"
import { FaMoneyBillWave } from "react-icons/fa6";

import { FaSeedling, FaChartBar, FaChartPie, FaChalkboardTeacher, FaFunnelDollar, FaHandshake } from "react-icons/fa";
import styled from "styled-components";
import { BiCheck } from "react-icons/bi";
const data = [
    {
        image: <FaSeedling color="#fff" />,
        text: "Investing",
        subtext: "A wide selection of investment product to help build diversified portfolio",
        maincolor: "#27BC9C",
        subColor: "#68D0BA"
    },
    {
        image: <FaChartBar color="#fff" />,
        text: "Trading",
        subtext: "Powerful trading tools, resources, insight and support",
        maincolor: "#4284DD",
        subColor: "#7BA9E8"
    }, {
        image: <FaChartPie color="#fff" />,
        text: "Wealth management",
        subtext: "Dedicated financial consultant to help reach your own specific goals",
        maincolor: "#9A5BB4",
        subColor: "#B98DCB"
    }, {
        image: <FaChalkboardTeacher color="#fff" />,
        text: "Investment advisory",
        subtext: "A wide selection of investing strategies from seasoned portfolio managers",
        maincolor: "#35495D",
        subColor: "#72808E"
    }, {
        image: <FaFunnelDollar color="#fff" />,
        text: "Smart portfolio",
        subtext: "A revolutionary, fully-automated investmend advisory services",
        maincolor: "#95A5A6",
        subColor: "#B5C0C1"
    }, {
        image: <FaHandshake color="#fff" />,
        text: "Mutual fund advisor",
        subtext: "Specialized guidance from independent local advisor for hight-net-worth investors",
        maincolor: "#FD6A4F",
        subColor: "#FE9784"
    },
]


const Hero = () => {
    return (
        <>
            <div className="w-100 py-8 flex flex-col gap-20">
                <div className="w-90 auto flex column gap-24">
                    <h2 className="text-[45px] font-extrabold">A relationship on your terms.
                        <span className="block fs-24 font-medium text-grey">Work with us the way you want.</span>
                        <span className="text-[18px] family1 font-medium text-grey2 leading-[1.5] pt-16 block">Some believe you must choose between an online broker and a wealth management firm. At Wave Capital, you don’t need to compromise. Whether you invest on your own, with an advisor, or a little of both — we can support you.</span>
                    </h2>
                    <div className="w-100 mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-20">
                        {
                            data?.map((x?: any, index?: any) => {
                                return <div style={{ backgroundColor: `${x?.maincolor}` }} className="p-16 rounded-2xl w-100 flex">
                                    <div  className="w-90 auto flex flex-col gap-2">
                                        <div style={{ backgroundColor: `${x?.subColor}` }} className="w-40 h-40 rounded-2xl flex items-center justify-center text-white fs-30">
                                            {x?.image}</div>
                                        <h2 className="fs-24 pb-12 border-b-2 border-[rgba(255,255,255,.2)] text-white font-bold">{x?.text}</h2>
                                        <span style={{color:"#eee"}} className="block fs-16 family1 font-medium">{x?.subtext}</span>

                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <TestimonialStyles className="w-100 py-12 flex column ">
                    <div className="w-90 auto wrapper">
                        <div className="flex lg:flex-row flex-col items-start gap-8">
                            <div className="w-40 h-40 rounded-full text-white flex items-center justify-center text-[40px] bg-[#C89B42]">
                                <FaMoneyBillWave />
                            </div>
                            <div className="flex flex-1 flex-col  gap-2">
                                <h3 className="fs-24 font-bold">Why trade with Wave Capital?</h3>
                                <span className="family1 fs-18 text-grey2 font-medium">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation repudiandae ullamco.
                                </span>
                                <div className="w-100 mt-12 flex flex-wrap gap-2">
                                    <span className="fs-18 font-medium family1 flex items-center gap-2">
                                        <div className="h-12 bg-[#C89B42] w-12 text-white fs-16 rounded-full flex items-center justify-center">
                                            <BiCheck/>
                                        </div>
                                        Direct Market Access (DMA)
                                    </span>

                                    <span className="fs-18 font-medium family1 flex items-center gap-2">
                                        <div className="h-12 bg-[#C89B42] w-12 text-white fs-16 rounded-full flex items-center justify-center">
                                            <BiCheck />
                                        </div>
                                        Free from UK Stamp Duty
                                    </span>

                                    <span className="fs-18 font-medium family1 flex items-center gap-2">
                                        <div className="h-12 bg-[#C89B42] w-12 text-white fs-16 rounded-full flex items-center justify-center">
                                            <BiCheck />
                                        </div>
                                        Leverage up to 1:500
                                    </span>


                                    <span className="fs-18 font-medium family1 flex items-center gap-2">
                                        <div className="h-12 bg-[#C89B42] w-12 text-white fs-16 rounded-full flex items-center justify-center">
                                            <BiCheck />
                                        </div>
                                        Short selling available
                                    </span>


                                     <span className="fs-18 font-medium family1 flex items-center gap-2">
                                        <div className="h-12 bg-[#C89B42] w-12 text-white fs-16 rounded-full flex items-center justify-center">
                                            <BiCheck/>
                                        </div>
                                        T+0 settlement
                                    </span>


                                    <span className="fs-18 font-medium family1 flex items-center gap-2">
                                        <div className="h-12 bg-[#C89B42] w-12 text-white fs-16 rounded-full flex items-center justify-center">
                                            <BiCheck />
                                        </div>
                                        Commissions from 0.08%
                                    </span>

                                     <span className="fs-18 font-medium family1 flex items-center gap-2">
                                        <div className="h-12 bg-[#C89B42] w-12 text-white fs-16 rounded-full flex items-center justify-center">
                                            <BiCheck/>
                                        </div>
                                        Dividends paid in cash
                                    </span> <span className="fs-18 font-medium family1 flex items-center gap-2">
                                        <div className="h-12 bg-[#C89B42] w-12 text-white fs-16 rounded-full flex items-center justify-center">
                                            <BiCheck/>
                                        </div>
                                        Access to 1500 global shares
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                           
                        </div>
                    </div>
                </TestimonialStyles>

            </div>
        </>
    )
}

const TestimonialStyles = styled.div`
z-index: 60;
position: relative;
.wrapper {
    display:grid;
    grid-template-columns: 1fr 30%;
    grid-gap: 6rem;
    @media (max-width:780px) {
    grid-template-columns: 1fr;

    }
}
`
export default Hero