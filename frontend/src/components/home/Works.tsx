import styled from 'styled-components'
const Works = () => {
    const CountingTrade = () => {
        return (
            <CountingStyles className="w-100">
                <div className="w-90 auto flex column gap-6">
                    <h1 className="fs-50 text-white w-100 text-bold text-start md:text-center uppercase">
                        PLACE YOUR TRADES ON BEST CONDITIONS
                    </h1>
                    <div className="w-100 grid mt-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4">
                        <h1 className="fs-50 text-white text-bold w-100 text-start md:text-center uppercase">
                           5+
                           <span className="block fs-20 text-light">
                            YEARS ON MARKET
                           </span>
                        </h1>
                        <h1 className="fs-50 text-white text-bold w-100 text-start md:text-center uppercase">
                            10373+
                            <span className="block fs-20 text-light">
                               ACTIVE CLIENTS
                            </span>
                        </h1>  <h1 className="fs-50 text-white text-bold w-100 text-start md:text-center uppercase">
                            30619+
                            <span className="block fs-20 text-light">
                               WITHDRAWALS
                            </span>
                        </h1>  <h1 className="fs-50 text-white text-bold w-100 text-start md:text-center uppercase">
                            500+
                            <span className="block fs-20 text-light">
                                EVENTS
                            </span>
                        </h1>
                        <h1 className="fs-50 text-white text-bold w-100 text-start md:text-center uppercase">
                            105+
                            <span className="block fs-20 text-light">
                               ASSETS FOR TRADING
                            </span>
                        </h1>
                    </div>
                </div>
            </CountingStyles>
        )
    }

    const CountingTradeTop = () => {
        return (
            <div className="w-100">
                <div className="w-90 CountingTradeTop_wrapper auto flex column">
                    <div className="work_top w-100 flex item-center">
                        <div className="work_top_content w-100 flex justify-center column gap-4">
                            <div className="icon_1"></div>
                            <h3 className="fs-24 text-bold text-white">Trusted & Regulated</h3>
                        </div>
                        <div className="work_top_content w-100 color_2 flex justify-center column gap-4">
                            <div className="icon_1"></div>
                            <h3 className="fs-24 text-bold text-white">Fast Deposit & Withdraw</h3>
                        </div>
                        <div className="work_top_content w-100 flex justify-center column gap-4">
                            <div className="icon_1"></div>
                            <h3 className="fs-24 text-bold text-white">Risk Managment</h3>
                        </div>
                        <div className="work_top_content w-100 color_2 flex justify-center column gap-4">
                            <div className="icon_1"></div>
                            <h3 className="fs-24 text-bold text-white">24/7 Customer Support</h3>
                        </div>

                    </div>
                    <div className="work_bottom">
                        <div className="work_b_left">
                            <div className="h-100 flex justify-center column gap-4">
                                <h4 className="fs-18 family1 text-white">LEARN TO TRADE</h4>
                                <div className="flex column gap-2">
                                    <h4 className="fs-12 family1 text-white">LIVE SERMINARS & TRAINING  for traders</h4>
                                    <h4 className="fs-12 family1 text-white">TUTORIALS & SEMINARS on Basic, intermediatry and Advanced.</h4>
                                    <h4 className="fs-12 family1 text-white">BECOME AN EXPERT in the trading world in just a short time</h4>
                                </div>
                                <div className="w-100 flex ">
                                    <div className="btn btn-2 fs-16">WHAT WE DO</div>
                                </div>
                            </div>
                        </div>
                        <div className="work_b_right w-100">
                            <img src="https://metacorepoint.com/img/learn.jpg" alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const HowItWorks = () => {
        return (
            <HowItWorksStyles className="w-100">
                <div className="w-90 auto flex column">
                     <h2 className="fs-45 text-bold text-start md:text-center text-dark">
                        <span style={{ letterSpacing: "7px", color:"rgb(177, 177, 177)"}} className="text-light w-full pb-8 fs-20 mx-auto md:w-[70%] block">
                            Three steps to Invest
                       </span>
                        HOW IT WORKS
                        <span className="text-light w-full pt-6 fs-20 mx-auto md:w-[70%] block text-grey2">
                            To start trading, fund your account with reliable payment channels and withdraw quickly with the fastest payout methods.
                        </span>
                     </h2>
                     <div className="w-100 flex item-start gap-4">
                        
                     </div>
                    {/* <div className="work_top w-100 flex item-center">
                        <div className="work_top_content w-100 flex justify-center column gap-4">
                            <div className="icon_1"></div>
                            <h3 className="fs-24 text-bold text-white">Trusted & Regulated</h3>
                        </div>
                        <div className="work_top_content w-100 color_2 flex justify-center column gap-4">
                            <div className="icon_1"></div>
                            <h3 className="fs-24 text-bold text-white">Fast Deposit & Withdraw</h3>
                        </div>
                        <div className="work_top_content w-100 flex justify-center column gap-4">
                            <div className="icon_1"></div>
                            <h3 className="fs-24 text-bold text-white">Risk Managment</h3>
                        </div>
                        <div className="work_top_content w-100 color_2 flex justify-center column gap-4">
                            <div className="icon_1"></div>
                            <h3 className="fs-24 text-bold text-white">24/7 Customer Support</h3>
                        </div>

                    </div>
                    <div className="work_bottom">
                        <div className="work_b_left">
                            <div className="h-100 flex justify-center column gap-4">
                                <h4 className="fs-18 family1 text-white">LEARN TO TRADE</h4>
                                <div className="flex column gap-2">
                                    <h4 className="fs-12 family1 text-white">LIVE SERMINARS & TRAINING  for traders</h4>
                                    <h4 className="fs-12 family1 text-white">TUTORIALS & SEMINARS on Basic, intermediatry and Advanced.</h4>
                                    <h4 className="fs-12 family1 text-white">BECOME AN EXPERT in the trading world in just a short time</h4>
                                </div>
                                <div className="w-100 flex ">
                                    <div className="btn btn-2 fs-16">WHAT WE DO</div>
                                </div>
                            </div>
                        </div>
                        <div className="work_b_right w-100">
                            <img src="https://metacorepoint.com/img/learn.jpg" alt="" className="w-100" />
                        </div>
                    </div> */}
                </div>
            </HowItWorksStyles>
        )
    }
    return (
        <TestimonialStyles className="w-100 flex column ">
            <CountingTradeTop />
            <CountingTrade />
            <HowItWorks/>
        </TestimonialStyles>
    )
}
const TestimonialStyles = styled.div`
padding:10rem 0;
z-index: 60;
position: relative;
.CountingTradeTop_wrapper{
z-index: 60;
margin-top: -23%;
padding-bottom: 0;
}
.work_top {
    .work_top_content {
        min-height: 26rem;
        background-color: #0A3041;
        padding: 0 2rem;
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
padding:12rem 0;
background-color: #F5F6F6;
`
const CountingStyles = styled.div`
margin-top: 12rem;
padding:6rem 0;
background:#D48574;
/* padding-bottom: 0; */
`

export default Works