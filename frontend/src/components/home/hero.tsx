import React from "react"
import { HeroStyles } from "./styles/hero"
import { FaUser, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../common/Header";
const HeroData = [
    {
        image: "https://www.indonez.com/html-demo/wave/img/in-slideshow-image-4.jpg",
        text: "Tap into the world's markets and explore endless trading opportunities with tight spreads and no commission.",
        subtext: "Award-winning Products and Trading platforms"
    },
    {
        image: "https://www.indonez.com/html-demo/wave/img/in-slideshow-image-3.jpg",
        text: "Award winning in trading Education",
        subtext: "Leran form the best and become a professional using our online courses"
    },
    {
        image: "https://www.indonez.com/html-demo/wave/img/in-slideshow-image-2.jpg",
        text: "The place to trade and win",
        subtext: "Register now and get a $100 bonus instantly"
    }
]

const Hero = () => {
    const [tabindex, setTabIndex] = React.useState(0);

    return (
        <>
            {/* <Header /> */}
            <HeroStyles>
                <div style={{ background: "rgba(242, 231, 182, 0.35)" }} className="absolute z-20 top-0 h-100 w-100 w-100"></div>
                <div className="image_wrapper z-10">

                    <img src={HeroData[0].image} alt="" />
                </div>

                <Header />

                <div className="hero_center z-40 h-100 w-90 auto flex item-center">
                    <div className="hero_content flex column gap-4">

                        <h3 style={{ textShadow: "2px 3px 4px rgba(0, 0, 0, 0.65)" }} className="text-extra-bold text-[4rem] lg:text-[60px] text-white">
                            {HeroData[0].subtext}
                        </h3>
                        <h4 style={{ textShadow: "2px 3px 4px rgba(0, 0, 0, 0.65)", color: "rgba(255, 255, 255, 0.8)" }} className="family1 text-light text-grey">
                            {HeroData[0].text}
                        </h4>
                        <div className="w-100 flex">
                            <Link to={'/login'} className="btn btn-4 fs-18 text-bold">Discover it Now</Link>
                        </div>
                    </div>
                </div>

            </HeroStyles>
            <div className="w-100 bg-[#C89B42] py-4 px-2">
                <div className="w-90 auto grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 lg:grid-cols-4">
                    <div className="flex pr-4 border-r-0 pb-12 sm:pb-0 border-b sm:border-b-0 sm:border-r border-[rgba(255,255,255,.3)] items-center gap-2">
                        <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-1.svg" alt="" className="w-24" />
                        <h4 style={{color:"#eee"}} className="text-bold text-[19px]">Free
                            analysis tools
                        </h4>
                    </div>

                    <div className="flex items-center pr-4 border-r-0 pb-12 sm:pb-0 border-b sm:border-b-0 sm:border-r border-[rgba(255,255,255,.3)] gap-2">
                        <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-2.svg" alt="" className="w-24" />
                        <h4 style={{ color: "#eee" }} className="text-bold text-[19px]">Fast execution
                            0 commision
                        </h4>
                    </div>

                    <div className="flex items-center pr-4 border-r-0 pb-12 sm:pb-0 border-b sm:border-b-0 sm:border-r border-[rgba(255,255,255,.3)] gap-2">
                        <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-3.svg" alt="" className="w-24" />
                        <h4 style={{ color: "#eee" }} className="text-bold text-[19px]">Low minimum
                            deposit of $100
                        </h4>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-4.svg" alt="" className="w-24" />
                        <h4 style={{ color: "#eee" }} className="text-bold text-[19px]">Over 2,100
                            assets to trade
                        </h4>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero