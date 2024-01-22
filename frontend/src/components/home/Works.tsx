import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Works = () => {
    const CountingTrade = () => {
        return (
            <CountingStyles className="w-100">
                <div className="w-90 auto flex column gap-6">
                    
                </div>
            </CountingStyles>
        )
    }

    const CountingTradeTop = () => {
        return (
            <div className="w-100">
                <div className="w-90  auto flex column"></div>
            </div>
        )
    }

    const HowItWorks = () => {
        return (
            <HowItWorksStyles className="w-100">
                
            </HowItWorksStyles>
        )
    }
    return (
        <TestimonialStyles className="w-100 flex column ">
            <CountingTradeTop />
            <CountingTrade />
            <HowItWorks />
        </TestimonialStyles>
    )
}
const TestimonialStyles = styled.div`
padding:10rem 0;
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