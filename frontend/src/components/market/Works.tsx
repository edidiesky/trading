import styled from 'styled-components'
import { FaMoneyBillWave } from "react-icons/fa6";
const Works = () => {
   
    return (
        <TestimonialStyles className="w-100 py-12 flex column ">
            <div className="w-90 auto wrapper">
                <div className="flex items-start gap-8">
                    <div className="w-40 h-40 rounded-full text-white flex items-center justify-center text-[40px] bg-[#C89B42]">
                        <FaMoneyBillWave/>
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                        <h3 className="fs-24 font-bold">Why trade with Wave Capital?</h3>
                        <span className="family1 fs-18 text-grey2 font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation repudiandae ullamco.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-1 flex-col gap-2">
                        <h3 className="fs-24 font-bold">Our Shares offer</h3>
                        <span className="family1 fs-18 text-grey2 font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation repudiandae ullamco.
                        </span>
                    </div>
                </div>
            </div>
        </TestimonialStyles>
    )
}
const TestimonialStyles = styled.div`
z-index: 60;
position: relative;
.wrapper {
    display:grid;
    grid-template-columns: 1fr 30%;
    grid-gap: 6rem;
    @media (max-width:780px) {
    grid-template-columns: 1fr;

    }
}
`


export default Works