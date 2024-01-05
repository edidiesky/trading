import styled from 'styled-components'
const Works = () => {
    const CountingTrade = () => {
        return (
            <CountingStyles className="w-100">
                <h2 className="fs-30 text-dark text-center">How it Works</h2>
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
    return (
        <TestimonialStyles className="w-100 flex column gap-4">
            <CountingTradeTop />
            {/* <CountingTrade /> */}
            {/* <h2 className="fs-30 text-dark text-center">How it Works</h2> */}

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

const CountingStyles = styled.div`
padding:6rem 0;
background:#D48574;
`

export default Works