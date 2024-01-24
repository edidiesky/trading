import styled from 'styled-components'
import { FaLeaf, FaHourglass, FaFlag } from "react-icons/fa";
const Ratings = () => {
    return (
        <TestimonialStyles className="w-100 flex flex-col gap-12">
            <div className="w-90 auto ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-4">
                        <div className="border h-[9rem] w-[9rem] fs-30 bg-[#C89B42] text-white rounded-full flex items-center justify-center">
                            <div className='w-[4rem] h-[4rem] flex items-center justify-center'>
                                <FaLeaf/>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-4">
                            <h3 className="fs-20 font-bold text-dark">
                                Inspired

                                <span className="block family1 pt-4 fs-16 font-medium leading-[1.8] text-grey2">
                                    Want more out of your forex trading? Our Loyalty Cashback promotion has you covered (T&Cs apply).
                                </span>
                            </h3>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="border h-[9rem] w-[9rem] fs-30 bg-[#C89B42] text-white rounded-full flex items-center justify-center">
                            <div className='w-[4rem] h-[4rem] flex items-center justify-center'>
                                <FaFlag />
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-4">
                            <h3 className="fs-20 font-bold text-dark">
                                Flexible

                                <span className="block family1 pt-4 fs-16 font-medium leading-[1.8] text-grey2">
                                    We cater to all experience levels. Whether you are new to trading, or a seasoned veteran, we have what you need.
                                </span>
                            </h3>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="border h-[9rem] w-[9rem] fs-30 bg-[#C89B42] text-white rounded-full flex items-center justify-center">
                            <div className='w-[4rem] h-[4rem] flex items-center justify-center'>
                                <FaHourglass />
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-4">
                            <h3 className="fs-20 font-bold text-dark">
                                Trusted

                                <span className="block family1 pt-4 fs-16 font-medium leading-[1.8] text-grey2">
                                    We are one of the world’s most trusted brokers. Trade and invest with one of the most trusted names in the business
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-90 auto pt-20 flex flex-col gap-y-32">
                <h5 className="fs-14 text-center text-light">
                    Funds Are Segregated From Companies Personal Account/Wallet.
                </h5>
                <div className="w-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12">
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <img className='w-[70px]' src="https://metacorepoint.com/img/icons/icon-usp-secure.png" alt="" />
                        <h5 className="fs-14 text-center text-light">
                            Regulated & Secure
                        </h5>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <img className='w-[70px]' src="https://metacorepoint.com/img/icons/icon-usp-award.png" alt="" />
                        <h5 className="fs-14 text-center text-light">
                            Award Winning
                        </h5>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <img className='w-[70px]' src="https://metacorepoint.com/img/icons/icon-usp-leverage.png" alt="" />
                        <h5 className="fs-14 text-center text-light">
                            1:1000 Leverage
                        </h5>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <img className='w-[70px]' src="https://metacorepoint.com/img/icons/icon-usp-seminars.png" alt="" />
                        <h5 className="fs-14 text-center text-light">
                            Live Seminars & Training
                        </h5>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <img className='w-[70px]' src="https://metacorepoint.com/img/icons/icon-usp-platform.png" alt="" />
                        <h5 className="fs-14 text-center text-light">
                            Advanced Trading Platform
                        </h5>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <img className='w-[70px]' src="https://metacorepoint.com/img/icons/icon-usp-instruments.png" alt="" />
                        <h5 className="fs-14 text-center text-light">
                            500+ Trading Instruments
                        </h5>
                    </div>

                   
                </div>
            </div>

        </TestimonialStyles>
    )
}
const TestimonialStyles = styled.div`
padding-bottom:5rem ;

`

export default Ratings