import styled from 'styled-components'
const NewsLetter = () => {
    const CoreIdeas = () => {
        return (
            <CoreStyles className="w-100">
                <div className="w-100 grid grid-cols-1 md:grid-cols-2">
                    <div className="w-100 bg-[#0A3041]">
                        <div className="py-32  w-90 auto flex flex-col gap-4">
                            <h2 className="fs-35 text-white leading-[1.4]">
                                Specialised help and knowledge when you need it
                            <span className="fs-24 pt-12 text-light text-light block">
                                    Our clients are our number one priority, which is why we have experts available to answer all your questions by, email and live chat. Our offices all over the world offer specialised help, advice and guidance when you need it.
                            </span>
                            </h2>
                        </div>
                   </div>

                    <div className="w-100 bg-[#D48574]">
                        <div className="py-32  w-90 auto flex flex-col gap-4">
                            <h2 className="fs-35 text-white leading-[1.4]">
                                Entry to the financial markets for everyone. 
                                <span className="fs-24 pt-12 text-light text-light block">
                                    Our clients are our number one priority, which is why we have experts available to answer all your questions by, email and live chat. Our offices all over the world offer specialised help, advice and guidance when you need it.
                                </span>
                            </h2>
                        </div>
                    </div>


                    <div className="w-100 bg-[#D48574]">
                        <div className="py-32  w-90 auto flex flex-col gap-4">
                            <h2 className="fs-35 text-white leading-[1.4]">
                                Millions of OptiTrade Dynamics clients can’t be wrong
                            <span className="fs-24 pt-12 text-light text-light block">
                                    At OptiTrade Dynamics International, part of our mission is to keep that standard of excellence high. We provide a forex trading environment that is trustworthy, reliable and technologically advanced, while ensuring every client receives impeccable customer service.
                          
                            </span>
                            </h2>
                        </div>
                   </div>

                    <div className="w-100 bg-[#0A3041]">
                        <div className="py-32  w-90 auto flex flex-col gap-4">
                            <h2 className="fs-35 text-white leading-[1.4]">
                                Flexible trading options to suit your needs
                                <span className="fs-24 pt-12 text-light text-light block">
                               
                                    Smart investment means having a variety of options. With OptiTrade Dynamics International, you can trade and invest the way you want to, by choosing independent trading or joining OptiTrade Dynamics Invest and following strategies from experienced traders. With our Loyalty Cashback program, you can also get back part of your funds on different types of commission.
                                </span>
                            </h2>
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
   /* background: #0E3E53; */
   /* padding:10rem 0; */
   .core_warpper {
    h1 {
        font-size: 70px;
        line-height: 1.5;
         @media (max-width:780px) {
                font-size: 50px;

    }
    }
    grid-gap: 3rem;
    grid-template-columns: 1fr 1fr;
    @media (max-width:780px) {
        grid-template-columns: 1fr;
    }
   }
`
export default NewsLetter