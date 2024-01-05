

import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";

const OnBoardingHeader = () => {
    return (

        <HeaderStyles className="w-100 flex column gap-2">
            <div className="w-90 auto Header_wrapper flex item-center justify-space">
                <div className="flex item-center gap-2">
                    <div className="flex item-center justify-center"><img style={{ width: "90px" }} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="" className="" /></div>
                    <h4 className="text-light fs-18 text-grey">Step 1 of 3</h4>
                </div>
                <div className="flex item-center gap-2">
                    <h4 className="fs-16 text-bold text-blue">Exit</h4>
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
    z-index:200;
     position:sticky;
    top:0;
    left:0;
    /* overflow:hidden; */
    .Header_wrapper{
        gap:2rem;
    }

`;



export default OnBoardingHeader