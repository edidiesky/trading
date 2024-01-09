import React from "react"
import { HeroStyles } from "./styles/hero"
import { FaUser, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
const HeroData = [
    {
        image: "https://metacorepoint.com/img/fp-section-live-prices-1.png",
        text: "Award winning in trading Education",
        subtext: "We are 100% Trusted Trading Broker"
   
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
                <div className="hero_navbar py-2 flex w-90 auto justify-end">
                    <div className="flex item-center gap-2">
                        <Link to={'/register'} className="login_btn btn_1 fs-14 flex item-center gap-1 text-bold text-white">
                            <FaUser />
                            Sign Up
                        </Link>
                        <Link to={'/login'} className="login_btn fs-14 flex item-center gap-1 text-bold text-white">
                            <FaKey />
                            Login
                        </Link>
                    </div>
                </div>
                <div className="hero_header w-90 auto flex item-center justify-space">
                    <img style={{ width: "140px" }} src="https://metacorepoint.com/img/logo_light.png" alt="" />
                    <div className="flex item-center gap-4 justify-end">
                        <Link to={'/'} className="fs-16 text-bold uppercase text-white">
                            Home
                        </Link>
                        <Link to={'/'} className="fs-16 text-bold uppercase text-white">
                            About Us
                        </Link><Link to={'/'} className="fs-16 text-bold uppercase text-white">
                            Trading Assets
                        </Link><Link to={'/'} className="fs-16 text-bold uppercase text-white">
                            FAQ
                        </Link><Link to={'/'} className="fs-16 text-bold uppercase text-white">
                            Documents
                        </Link>
                        <Link to={'/'} className="fs-16 text-bold uppercase text-white">
                            Contact
                        </Link>
                    </div>
                </div>

                <div className="hero_center h-100 w-90 auto flex item-center">
                    <div className="hero_content flex column gap-4">
                        {/* <h4 className="family1 text-white">
                            {HeroData[0].text}
                        </h4> */}
                        <h3 className="text-bold leading-[1.6] text-white">
                            {HeroData[0].subtext}
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