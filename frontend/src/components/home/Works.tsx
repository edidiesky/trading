import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Works = () => {
    const CountingTradeTop = () => {
        return (
            <div className="w-100">
                <div className="w-90 auto flex column">
                   <div className="overflow-hidden">
                        <h2
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            className="text-extra-bold text-[50px] leading-[1.3]">Industry-leading prices

                        </h2>
                   </div>
                    <div className="overflow-hidden">
                        <span
                            data-aos="fade-up"
                            data-aos-duration="1600"
                            className="block w-[70%] text-[20px] lg:text-[30px] leading-[1.3] mt-4 family1 font-normal text-grey">
                            Get ultra-competitive spreads and commissions across all asset classes. Receive even better rates as your volume increases.
                        </span>
                    </div>
                   
                    <div className="w-100 pt-24 grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-4 gap-x-8 gap-y-20">
                        <div className="w-100 bg-[#F6F7F8] rounded-2xl pt-8 px-2">
                            <div className="w-100">
                                <div className="w-90 auto flex flex-col">
                                    <h3 className="fs-16 family1 font-medium text-blue">
                                        <span className="text-blue block fs-20 font-extrabold">FX</span>
                                        Spread as low as
                                    </h3>
                                    <h2 className="text-[60px] my-3 font-bold">0.2</h2>
                                    <p className="text-[15px] text-bold text-grey family1">Trade 182 FX spot pairs and 140 forwards across majors, minors, exotics and metals.</p>
                                </div>
                                <img src="https://www.indonez.com/html-demo/wave/img/in-wave-card-bg-3.png" alt="" className="w-100 h-32" />
                            </div>
                        </div>

                        <div className="w-100 bg-[#F6F7F8] rounded-2xl pt-8 px-2">
                            <div className="w-100">
                                <div className="w-90 auto flex flex-col">
                                    <h3 className="fs-16 family1 font-medium text-blue">
                                        <span className="text-blue block fs-20 font-extrabold">FX</span>
                                        Spread as low as
                                    </h3>
                                    <h2 className="text-[60px] my-3 font-bold">0.4</h2>
                                    <p className="text-[15px] text-bold text-grey family1">TGo long or short on 9,000+ instruments with tight spreads & low commissions.</p>
                                </div>
                                <img src="https://www.indonez.com/html-demo/wave/img/in-wave-card-bg-3.png" alt="" className="w-100 h-32" />
                            </div>
                        </div>

                        <div className="w-100 bg-[#F6F7F8] rounded-2xl pt-8 px-2">
                            <div className="w-100">
                                <div className="w-90 auto flex flex-col">
                                    <h3 className="fs-16 family1 font-medium text-blue">
                                        <span className="text-blue block fs-20 font-extrabold">FX</span>
                                        Spread as low as
                                    </h3>
                                    <h2 className="text-[60px] my-3 font-bold">0.6</h2>
                                    <p className="text-[15px] text-bold text-grey family1">Trade 182 FX spot pairs and 140 forwards across majors, minors, exotics and metals.</p>
                                </div>
                                <img src="https://www.indonez.com/html-demo/wave/img/in-wave-card-bg-3.png" alt="" className="w-100 h-32" />
                            </div>
                        </div>

                        <div className="w-100 bg-[#F6F7F8] rounded-2xl pt-8 px-2">
                            <div className="w-100">
                                <div className="w-90 auto flex flex-col">
                                    <h3 className="fs-16 family1 font-medium text-blue">
                                        <span className="text-blue block fs-20 font-extrabold">FX</span>
                                        Spread as low as
                                    </h3>
                                    <h2 className="text-[60px] my-3 font-bold">0.8</h2>
                                    <p className="text-[15px] text-bold text-grey family1">Trade 182 FX spot pairs and 140 forwards across majors, minors, exotics and metals.</p>
                                </div>
                                <img src="https://www.indonez.com/html-demo/wave/img/in-wave-card-bg-3.png" alt="" className="w-100 h-32" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const HowItWorks = () => {
        return (
            <HowItWorksStyles className="w-100">
                <div className="w-90 auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24 items-start lg:items-center">
                    <div className="w-100 flex flex-col gap-y-12">
                        <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-5.svg" alt=""
                            className="w-40" />
                        <h2 className="text-[45px] font-bold">Market analysis and
                            trade inspiration</h2>
                        <span className="text-[20px] leading-[1.5] family1 font-medium text-grey">
                            We  offer in-depth insights into various markets. This include financial markets, stock markets, cryptocurrency markets,
                            or any other relevant industry.
                        </span>
                        <div className="flex items-start gap-4">
                            <div className="py-6 w-[190px] rounded-3xl border px-4 border-[#C89B42] flex flex-col">
                                <div className="flex py-4 flex-col w-90 auto gap-1 items-center justify-center">
                                    <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-7.svg" alt="" className="w-20" />
                                    <h4 className="font-bold text-[16px] text-dark text-center family1">Forecasts & Educations</h4>
                                </div>
                            </div>

                            <div className="py-6 w-[190px] rounded-3xl border px-4 border-[#C89B42] flex flex-col">
                                <div className="flex py-4 flex-col w-90 auto gap-1 items-center family1 justify-center family1">
                                    <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-6.svg" alt="" className="w-20" />
                                    <h4 className="font-bold text-[16px] text-dark text-center family1">Strategies & Discussions</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 flex flex-col gap-y-12">
                        <div className="w-100 relative">
                            <img src="https://www.indonez.com/html-demo/wave/img/in-wave-image-1.jpg" alt="" className="w-full" />
                        </div>
                    </div>
                </div>
            </HowItWorksStyles>
        )
    }

    const Sequence = () => {
        return (
            <CountingStyles className="w-100 py-4">
                <div className="w-90 auto grid wrapper gap-x-12 gap-y-24 items-start lg:items-center">
                    <div className="w-100 flex flex-col gap-y-12">
                        <h2 className="text-[45px] font-bold">A partner invested in your
                            success</h2>
                        <span className="text-[17px] leading-[1.5] font-medium text-grey">
                            Trade with confidence and benefit from the reliability of a trusted broker with a proven record of stability, security and strength.
                        </span>
                        <div className="flex items-start gap-4">
                            <Link to={'/login'} className='btn btn-2 fs-16 font-bold text-white'>Open an Account</Link>
                        </div>
                    </div>
                    <div className="w-100 flex flex-col gap-y-12">
                        <div className="w-100 grid grid-cols-2 lg:grid-cols-3">
                            <div className="p-8 py-6 w-100 flex items-center flex-col gap-1 justify-center border-b border-r border-[rgba(0,0,0,.1)]">
                                <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-14.svg" alt="" className="w-24" />
                                <h4 className="fs-18 font-medium family1">Maximum value</h4>
                            </div>
                            <div className="p-8 py-6 w-100 hidden lg:flex items-center flex-col gap-1 justify-center border-b border-r border-[rgba(0,0,0,.1)]">
                                <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-15.svg" alt="" className="w-24" />
                                <h4 className="fs-18 font-medium family1">Fast executions</h4>
                            </div>
                            <div className="p-8 py-6 w-100 flex items-center flex-col gap-1 justify-center border-b border-[rgba(0,0,0,.1)]">
                                <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-16.svg" alt="" className="w-24" />
                                <h4 className="fs-18 font-medium family1">Trading tools</h4>
                            </div>

                            <div className="p-8 py-6 w-100 flex items-center flex-col gap-1 justify-center  border-r border-[rgba(0,0,0,.1)]">
                                <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-17.svg" alt="" className="w-24" />
                                <h4 className="fs-18 font-medium family1">Guide & support</h4>
                            </div>
                            <div className="p-8 py-6 w-100 flex items-center flex-col gap-1 justify-center border-r-0  lg:border-r border-[rgba(0,0,0,.1)]">
                                <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-8.svg" alt="" className="w-24" />
                                <h4 className="fs-18 font-medium family1">Financial secure</h4>
                            </div>
                            <div className="p-8 py-6 w-100 hidden lg:flex items-center flex-col gap-1 justify-center border-[rgba(0,0,0,.1)]">
                                <img src="https://www.indonez.com/html-demo/wave/img/in-wave-icon-9.svg" alt="" className="w-24" />
                                <h4 className="fs-18 font-medium family1">Strong regulatory</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </CountingStyles>
        )
    }
    return (
        <TestimonialStyles className="w-100 flex column ">
            <CountingTradeTop />
            {/* <CountingTra/de /> */}
            <HowItWorks />
            <Sequence />
        </TestimonialStyles>
    )
}
const TestimonialStyles = styled.div`
padding:10rem 0;
padding-bottom: 0;
z-index: 60;
position: relative;
.CountingTradeTop_wrapper{
z-index: 60;
padding-bottom: 0;
}
.work_top {
    .work_top_content {
        min-height: 30rem;
        background-color: #0A3041;
        padding: 3rem 2rem;
        transition: all .3s ease;
        &:hover {
            transform: scale(1.2);
        }
        &.color_2{
        background-color: #0E3E53;

        }
        .icon_1 {
            height: 4rem;
            width: 3rem;
            border:3px solid #fff;
        }
        /* #0E3E53 */
    }
    .work_top_contents {
        min-height: 30rem;
        background-color: #fff;
        padding: 5rem 2rem;
        transition: all .3s ease;
        &:hover {
            transform: scale(1.2);
        }
        &.color_2{
        background-color: #0E3E53;
 .icon_1 {
            height: 5rem;
            width: 5rem;
            border:5px solid #fff;
        }
        }
        .icon_1 {
            height: 5rem;
            width: 5rem;
            border:5px solid var(--dark-1);
        }
        /* #0E3E53 */
    }
}
.work_bottom{
    display:grid;
    grid-template-columns: 1fr 1fr;
    .work_b_left {
        padding: 4rem ;
        background: #D48574;
    }
    @media (max-width:780px) {
    grid-template-columns: 1fr;

    }
}
`
const HowItWorksStyles = styled.div`
margin:12rem 0;
padding:8rem 0;
padding-bottom:2rem;

`
const CountingStyles = styled.div`
padding:3rem 0;
padding-bottom: 10rem;
.wrapper {
    grid-template-columns: 30% 1fr;
    grid-gap: 8rem;
    @media (max-width:780px) {
    grid-template-columns:1fr;

    }
}
`

export default Works