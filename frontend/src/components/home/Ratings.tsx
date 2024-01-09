import styled from 'styled-components'
import { IoBarChart } from "react-icons/io5";
const Ratings = () => {
    return (
        <TestimonialStyles className="w-100 flex flex-col gap-12">
            <div className="w-90 auto grid grid-cols-1 gap-32 md:grid-cols-2">
                <div className="flex flex-col gap-4">
                    <h5 style={{ fontStyle: "italic" }} className="family1 fs-20 text-bold">
                        WHY CHOOSE FOREX AND BITCOIN TRADE?
                    </h5>
                    <h4 className="leading-loose fs-20 text-dark text-light">
                        Cryptocurrencies are a borderless means of exchange allowing for instant and cost-effective transactions across the world. There is no waiting, no international fees and no limitations as to who can or cannot send funds to whom or when and where those funds can be accessed.
                    </h4>
                    <div className="w-100 flex">
                        <div className="btn btn-2 fs-14 text-bold">TRADING ASSETS</div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <div className="border h-[9rem] w-[9rem] fs-30 text-[#D48574] hover:text-[#fff] border-[#D48574] rounded-full hover:bg-[#D48574] flex items-center justify-center">
                            <IoBarChart />
                        </div>
                        <div className="flex flex-1 flex-col gap-4">
                            <h3 className="fs-24 text-bold text-dark">
                                INSTANT TRADING

                                <span className="block pt-4 fs-20 text-light leading-[1.8] text-grey2">
                                    Deposit is confirmed immediately after successful transaction to fund the account and trading can start instantly.

                                </span>
                            </h3>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <div className="border h-[9rem] w-[9rem] fs-30 text-[#D48574] hover:text-[#fff] border-[#D48574] rounded-full hover:bg-[#D48574] flex items-center justify-center">
                            <IoBarChart />
                        </div>
                        <div className="flex flex-1 flex-col gap-4">
                            <h3 className="fs-24 text-bold text-dark">
                                SAFE AND SECURE

                                <span className="block pt-4 fs-20 text-light leading-[1.8] text-grey2">
                                    Encryption of account is taking to a high degree for best secure protection.
                                </span>
                            </h3>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <div className="border h-[9rem] w-[9rem] fs-30 text-[#D48574] hover:text-[#fff] border-[#D48574] rounded-full hover:bg-[#D48574] flex items-center justify-center">
                            <IoBarChart />
                        </div>
                        <div className="flex flex-1 flex-col gap-4">
                            <h3 className="fs-24 text-bold text-dark">
                                BITCOIN TRANSACTION

                                <span className="block pt-4 fs-20 text-light leading-[1.8] text-grey2">
                                    We accept payment in Bitcoin. Register, get $100 sign-up bonus.
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-90 auto pt-52 flex flex-col gap-y-32">
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
padding:10rem 0;
/* background-color: #F5F6F6; */

`

export default Ratings