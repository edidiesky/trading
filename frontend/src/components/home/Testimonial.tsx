import styled from 'styled-components'
const Testimonial = () => {
    return (
        <TestimonialStyles className="w-100">
            <div className="w-90 auto testimonial_wrapper flex column gap-4">
                <h2 className="fs-30 text-dark">Testimonial
                    <span className="fs-20 block text-grey2 text-light">
                        What people say about OptiTrade Dynamics
                        {/* MetaCore Point */}
                    </span>
                </h2>
                <div className="w-100 grid grid-cols-1 gap-12 items-start  md:grid-cols-2">
                    <div className="py-4 rounded-xl bg-[#F7F7F7] px-16 flex items-start flex-col md:flex-row gap-4">
                        <img src="https://i.pinimg.com/236x/97/31/02/9731022f0be7c965e880505461643850.jpg" className='w-[100px] h-[100px] rounded-full' />
                        <h3 className="fs-20 family1 flex-1">
                            <span className="fs-16 text-grey2 pb-8 leading-[1.8] text-light block family1">
                                I have been trading forex for a couple of years and I have been across many platform but my experience with meta core trade broker has been the best so far
                            </span>
                            John Larson

                            <span className="fs-18 text-grey2 pt-4 leading-[1.8] text-light block family1">
                                Trader
                            </span>
                        </h3>
                    </div>

                    <div className="py-4 rounded-xl bg-[#F7F7F7] px-16 flex flex-col md:flex-row items-start gap-4">
                        <img src="https://i.pinimg.com/236x/ed/54/d9/ed54d9730937380db84aa2a46c7c2534.jpg" className='w-[100px] h-[100px] rounded-full' />
                        <h3 className="fs-20 family1 flex-1">
                            <span className="fs-16 text-grey2 pb-8 leading-[1.8] text-light block family1">
                                I have been trading forex for a couple of years and I have been across many platform but my experience with meta core trade broker has been the best so far
                            </span>
                            Timothy Carlson

                            <span className="fs-18 text-grey2 pt-4 leading-[1.8] text-light block family1">
                                Trader
                            </span>
                        </h3>
                    </div>
                </div>
            </div>

        </TestimonialStyles>
    )
}
const TestimonialStyles = styled.div`
padding:15rem 0;
`

export default Testimonial
