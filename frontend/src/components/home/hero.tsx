import React, { useState } from "react"
import { HeroStyles } from "./styles/hero"
import { FaUser, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import { BiChevronsRight } from "react-icons/bi";
import { isNamedExports } from "typescript";
const HeroData = [
    {
        image: "https://dtdigibit.wpengine.com/wp-content/uploads/2018/02/home-slider2-min.jpg",
        text: "Tap into the world's markets and explore endless trading opportunities with tight spreads and no commission.",
        subtext: "Award-winning Products and Trading platforms"
    },
    {
        image: "https://dtdigibit.wpengine.com/wp-content/uploads/2018/02/home-slider3-min.jpg",
        text: "Award winning in trading Education",
        subtext: "Learn from the best and become a professional using our online courses"
    },
    {
        image: "https://dtdigibit.wpengine.com/wp-content/uploads/2018/02/home-slider1-min.jpg",
        text: "The place to trade and win",
        subtext: "Register now and get a $100 bonus instantly"
    }
]

const Hero = () => {
    const [tabindex, setTabIndex] = useState(0);
    const [search, setSearch] = useState("");

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTabIndex(tabindex === 2 ? 0 : tabindex + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [setTabIndex, tabindex]);

    // console.log(tabindex)

    return (
        <>
            <Header />
            <HeroStyles className='flex items-center relative justify-center'>
                {/* <div style={{ background: "rgba(242, 231, 182, 0.35)" }} className="absolute z-20 top-0 h-100 w-100 w-100"></div> */}
                <div className="w-full h-full absolute py-40 top-0">
                    {
                        HeroData.map((x: any, index: any) => {
                            const active = tabindex === index
                            // console.log(tabindex === index)
                            return <div key={index} className="w-full absolute z-40 top-0 left-0 h-full">
                                <div className={index === tabindex ? `image_wrapper active z-10` : `image_wrapper`}>

                                    <img src={x.image} alt="" />
                                </div>

                                <div className="hero_center z-40 h-100 w-90 auto flex item-center">
                                    <div className="hero_content flex column gap-2">

                                        <div className="text-extra-bold family1 uppercase text-6xl lg:text-8xl leading-[1.4] relative text-white">
                                            <h3 style={{ textShadow: "2px 3px 4px rgba(0, 0, 0, 0.65)" }} className={active ? "active leading-[1.2]" : " leading-[1.2]"}>
                                                {x.subtext}
                                            </h3>
                                        </div>
                                        <div className="w-full relative">
                                            <h4 style={{ textShadow: "2px 3px 4px rgba(0, 0, 0, 0.65)", color: "rgba(255, 255, 255, 0.8)" }}
                                                className={active ? "family1 text-light text-grey active" :"family1 text-light text-grey"}>
                                                {x.text}
                                            </h4>
                                        </div>
                                        <div className="w-100 mt-6 flex">
                                            <Link to={'/login'} 
                                                className={active ? "btn btn-4 flex items-center gap-2 fs-18 text-bold active" :"btn btn-4 flex items-center gap-2 fs-18 text-bold"}>Get Started Now
                                                <BiChevronsRight fontSize={'24px'} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>

            </HeroStyles>
            <div className="w-100 bg-[#C89B42] py-4 px-2">
                <div className="w-90 auto grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 lg:grid-cols-4">
                    <div className="flex pr-4 border-r-0 pb-12 sm:pb-0 border-b sm:border-b-0 sm:border-r border-[rgba(255,255,255,.3)] items-center gap-2">
                        <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-1.svg" alt="" className="w-24" />
                        <h4 style={{ color: "#eee" }} className="text-bold family1 text-[19px]">Free
                            analysis tools
                        </h4>
                    </div>

                    <div className="flex items-center pr-4 border-r-0 pb-12 sm:pb-0 border-b sm:border-b-0 sm:border-r border-[rgba(255,255,255,.3)] gap-2">
                        <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-2.svg" alt="" className="w-24" />
                        <h4 style={{ color: "#eee" }} className="text-bold family1 text-[19px]">Fast execution
                            0 commision
                        </h4>
                    </div>

                    <div className="flex items-center pr-4 border-r-0 pb-12 sm:pb-0 border-b sm:border-b-0 sm:border-r border-[rgba(255,255,255,.3)] gap-2">
                        <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-3.svg" alt="" className="w-24" />
                        <h4 style={{ color: "#eee" }} className="text-bold family1 text-[19px]">Low minimum
                            deposit of $100
                        </h4>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-4.svg" alt="" className="w-24" />
                        <h4 style={{ color: "#eee" }} className="text-bold family1 text-[19px]">Over 2,100
                            assets to trade
                        </h4>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero