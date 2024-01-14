import styled from 'styled-components'
const NewsLetter = () => {
    const CoreIdeas = () => {
        return (
            <CoreStyles className="w-100">
                <div className="w-90 auto grid core_warpper gap-6">
                    <h1 className="text-[40px] lg:text-[60px] w-100 leading-[1.5] text-extra-bold text-white">
                        What Makes
                        {/* Meta Core */}
                       {" "} OptiTrade Dynamics
                         
                        Different?
                    </h1>
                    <div className="w-100 flex column gap-4">
                        <div className="flex fs-18 text-white item-start gap-2">
                            <span>1.</span>
                            <span className="text-light">
                                <span className="text-extra-bold leading-[1.9]">We Want You to Succeed</span> –
                                Learn from the best with our wide range of educational tools, economic calendar, technical and fundamental analysis and important market updates you don’t want to miss.
                            </span>
                        </div>
                        <div className="flex fs-18 text-white item-start gap-2">
                            <span>2.</span>
                            <span className="text-light">
                                <span className="text-extra-bold leading-[1.9]">We Believe in Endless Possibilities </span> –
                                Access the world’s most popular instruments, ranging from forex pairs to cryptocurrencies - all at the palm of your hand.
                            </span>
                        </div>

                        <div className="flex fs-18 text-white item-start gap-2">
                            <span>3.</span>
                            <span className="text-light">
                                <span className="text-extra-bold leading-[1.9]">We Provide Our Traders With Superior Trading Conditions </span> – No restrictions on short selling and scalping as well as ultra-low spreads.   </span>
                        </div>

                        <div className="flex fs-18 text-white item-start gap-2">
                            <span>4.</span>
                            <span className="text-light">
                                <span className="text-extra-bold leading-[1.9]">We Value Your Time </span> –
                                Enjoy Fast and reliable order execution and a 24-hour live customer service.
                            </span>
                        </div>
                        <div className="flex fs-18 text-white item-start gap-2">
                            <span>5.</span>
                            <span className="text-light">
                                <span className="text-extra-bold leading-[1.9]">We Believe You Deserve The Best </span> –Take advantage of our Expert Advisors and Copy Trading platforms as well as 24/7 cryptocurrency trading.
                            </span>
                        </div>
                    </div>
                </div>

            </CoreStyles>
        )
    }

    const TrustedCompanies = () => {
        return (
            <div className="w-100">
            </div>
        )
    }
    return (
        <NewsLetterStyles className="w-100">
            <CoreIdeas />
            <TrustedCompanies />
        </NewsLetterStyles>
    )
}
const NewsLetterStyles = styled.div`
   /* margin: 6rem 0; */
`

const CoreStyles = styled.div`
   background: #0E3E53;
   padding:10rem 0;
   .core_warpper {
    h1 {
    }
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    @media (max-width:780px) {
        grid-template-columns: 1fr;
    }
   }
`
export default NewsLetter