import styled from 'styled-components'
const Works = () => {
   

    const HowItWorks = () => {
        return (
            <HowItWorksStyles className="w-100">
                <div className="w-90 auto flex column gap-4">
                    <h2 className="fs-50 text-bold text-start leading-[1.4] md:text-center text-dark">
                        <span style={{ letterSpacing: "7px", color: "rgb(177, 177, 177)" }} className="text-light w-full pb-8 fs-20 mx-auto md:w-[70%] block">
                            About MetaCore Point
                        </span>
                        The future is bright with MetaCore Point
                        <span className="text-light w-full pt-24 fs-20 leading-[1.8] mx-auto md:w-[70%] block text-grey2">
                            MetaCore Point is one of largest forex and cryptocurrency brands around. At MetaCore Point International we work hard to make sure our clients make the best trading and investment decisions. Our broad range of services enable you to get the best guidance, advice and resources to build a richer future
                        </span>

                        <span className="text-light w-full pt-12 fs-20 leading-[1.8] mx-auto md:w-[70%] block text-grey2">
                      
                            We work day and night to create and sustain a forex and cryptocurrencies trading environment that helps everyone access the markets – from first-timers to those who’ve turned trading into a career.
                        </span>
                    </h2>
                </div>
            </HowItWorksStyles>
        )
    }
    return (
        <TestimonialStyles className="w-100 flex column ">
            <HowItWorks />
        </TestimonialStyles>
    )
}
const TestimonialStyles = styled.div`
z-index: 60;
position: relative;
.CountingTradeTop_wrapper{
z-index: 60;
margin-top: -23%;
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