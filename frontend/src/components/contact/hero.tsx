import React from "react"
import { HeroStyles } from "./styles/hero"
import { FaUser, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../common/Header";
const HeroData = [
    {
        image: "https://metacorepoint.com/img/slider3.jpg",
        text: "FREQUENTLY ASKED QUESTIONS",
        subtext: "Need Information? Contact Us"
   
    },
]

const Hero = () => {
    const [tabindex, setTabIndex] = React.useState(0);
    const handleImagePosition = (position?: string) => {
        if (position === "left") {
            setTabIndex(tabindex < 0 ? HeroData?.length - 1 : tabindex + 1);
        }
        if (position === "right") {
            setTabIndex(tabindex >= HeroData?.length - 1 ? 0 : tabindex - 1);
        }
    };
    // console.log(tabindex)
    return (
        <>
            {/* <Header /> */}
            <HeroStyles>
                <div className="image_overlay w-100"></div>
                <div className="image_wrapper">

                    <img src={HeroData[0].image} alt="" />
                </div>
                <Header />


                <div className="hero_center h-100 w-90 auto flex item-center">
                    <div className="hero_content flex column gap-4">
                        {/* <h4 className="family1 text-white">
                            {HeroData[0].text}
                        </h4> */}
                        <h3 className="text-bold text-[46px] lg:text-[80px] leading-[1.6] text-white">
                            Need Information? 
                            <br />
                            Contact Us
                        </h3>
                        <div className="w-100 flex">
                            <div className="btn btn-4 fs-16 text-bold">LEARN MORE</div>
                        </div>
                    </div>
                </div>

            </HeroStyles>
        </>
    )
}

export default Hero