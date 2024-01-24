import styled from 'styled-components'
import Accordion from '../common/accordion'
import { FaHome, FaMailBulk } from 'react-icons/fa'
const Works = () => {


    const HowItWorks = () => {
        return (
            <HowItWorksStyles className="w-100">
                <div className="w-90 auto flex flex-col gap-x-32 gap-y-24">
                    <div className="w-100 flex flex-col gap-16">
                        <h2 className="fs-50 leading-[1.4] font-extrabold text-start text-dark">

                            Feedback
                            <span className="text-light w-full pt-12 family1 fs-30 md:w-[60%] block text-grey2">
                                Do not hesitate to reach out. Just fill in the contact form here and we’ll be sure to reply as fast as possible.
                            </span>

                        </h2>
                       
                    </div>
                   <div className="grid grid-cols-1 gap-12 gap-y-24 lg:grid-cols-2 items-start">
                        <div className="w-100 family1 flex fs-24 font-medium flex-col gap-16">
                           <div className="flex flex-col gap-2">
                                <h4 className="font-bold text-dark">Visit our office</h4>
                                <div className="flex fs-18 item-center gap-2">
                                    <FaHome fontSize={'30px'} />
                                    Satrio Tower 16th Floor, Jl. Prof Dr Satrio Kuningan, Jakarta
                                </div>
                           </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold text-dark">Message us</h4>
                                <div className="flex fs-18 item-center gap-2">
                                    <FaMailBulk fontSize={'30px'} />
                                    support@TerraTexTrading.com
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start flex-col">
                            <div className="w-100 flex flex-col gap-y-12">
                              <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <input type="text" placeholder='Your Name' className="input py-16 fs-16" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <input type="text" placeholder='Your Email' className="input fs-16" />
                                    </div>
                              </div>
                                <div className="flex flex-col gap-2">
                                    <input type="text" placeholder='Your Subject' className="input fs-16" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <textarea style={{height:"20rem"}} placeholder='Your Message' className="input fs-16" />
                                </div>
                            </div>
                            <div className="w-100 mt-12 flex">
                                <div className="btn fs-16 text-white text-bold">SEND MESSAGE</div>
                            </div>
                        </div>
                       
                   </div>
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
`
const HowItWorksStyles = styled.div`
padding:12rem 0;
`


export default Works