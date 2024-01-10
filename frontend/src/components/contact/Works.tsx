import styled from 'styled-components'
import Accordion from '../common/accordion'
import { FaHome, FaMailBulk } from 'react-icons/fa'
const Works = () => {


    const HowItWorks = () => {
        return (
            <HowItWorksStyles className="w-100">
                <div className="w-90 auto grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-24">
                    <div className="w-100 flex flex-col gap-16">
                        <h2 className="fs-50 leading-[1.4] text-bold text-start text-dark">

                            Feedback
                            <span className="text-light w-full pt-12 fs-20 md:w-[70%] block text-grey2">
                                Here is a list of compounded questions asked by our various users
                            </span>

                        </h2>
                        <div className="w-100 flex flex-col gap-y-12">
                            <div className="flex flex-col gap-2">
                                <h4 className="fs-16 text-bold">Name</h4>
                                <input type="text" placeholder='Your Name' className="input py-16 fs-16" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="fs-16 text-bold">Email Address</h4>
                                <input type="text" placeholder='Your Email' className="input fs-16" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="fs-16 text-bold">Subject</h4>
                                <input type="text" placeholder='Your Subject' className="input fs-16" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="fs-16 text-bold">Message</h4>
                                <input type="text" placeholder='Your Message' className="input fs-16" />
                            </div>
                        </div>
                        <div className="w-100 flex">
                            <div className="btn fs-16 text-white text-bold">SEND MESSAGE</div>
                        </div>
                    </div>
                    <div className="w-100 mt-24 flex fs-20 text-grey text-light flex-col gap-16">
                        <div className="flex item-center gap-4">
                            <FaHome fontSize={'30px'}/>
                            200 West St, New York, NY 10282
                        </div>
                        <div className="flex item-center gap-4">
                            <FaMailBulk fontSize={'30px'} />
                            support@metaorepoint.com
                        </div>
                    </div>
                    {/* <h2 className="fs-50 text-bold text-start md:text-center text-dark">
                       
                     Some Frequently Asked Questions?
                        <span className="text-light w-full pt-12 fs-20 mx-auto md:w-[70%] block text-grey2">
                        Here is a list of compounded questions asked by our various users
                       </span>

                    </h2>
                    <Accordion/> */}
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
background-color: #F5F6F6;
.input {
    padding: 2rem 3rem;
    border:1px solid rgba(0,0,0,.2);
}
`


export default Works