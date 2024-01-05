

import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";

const OnBoardingFooter = () => {
    return (

        <HeaderStyles className="w-100 flex column gap-2">
            <div className="w-90 auto Header_wrapper flex item-center justify-space">

                <div className="flex item-center gap-2">
                    <button className="fs-16 btn text-bold text-white">Continue</button>
                </div>
            </div>
        </HeaderStyles>
    )
}


export const HeaderStyles = styled.div`
    padding:1.9rem 0;
    width:100%;
    background:#fff;
    box-shadow:0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08);
    z-index:250;
    position:fixed;
    bottom:0;
    left:0;
border-top:1px solid rgba(0,0,0,.1);
`;



export default OnBoardingFooter