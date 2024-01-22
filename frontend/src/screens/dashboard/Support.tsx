import React, { useState } from 'react'
import styled from "styled-components";

const Support = () => {
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <HistorytStyles style={{ minHeight: "100vh" }} className="w-100">
            <div className="py-4 trading_wrapper auto flex column gap-4">

                <div className="trading_card flex column gap-4 w-100">
                    <div className="flex column w-100 item-center justify-center gap-1">
                        <h2 className="fs-45 text-dark">
                           TerraTexTrading Support
                        </h2>
                        <span className="fs-16 w-50 text-light text-center text-grey2">
                            For inquiries, suggestions or complains. Mail us
                        </span>

                        <span className="fs-30 w-100 text-light text-center text-blue">
                            support@TerraTexTrading.com
                        </span>
                    </div>
                    <div className="formarea auto flex column gap-2">
                        <div className="w-100 flex column gap-1">
                            <h4 className="fs-14 text-light text-grey2">Message *</h4>
                            <textarea placeholder='Send us a message' className="input area w-100"></textarea>

                        </div>
                      <button className="btn fs-18 text-white">Send Us A Message</button>
                    </div>
                </div>
            </div>
        </HistorytStyles>
    )
}



const HistorytStyles = styled.div`
  width: 100%;
  margin: 2rem auto;
  .trading_wrapper {
        width:95%;

    .trading_card {
        width:100%;
        padding:6rem 2rem;
        background-color: #fff;
        border:1px solid rgba(0,0,0,.1);
        .formarea {
            width:600px;
            @media (max-width:980px) {
                width:90%;
                margin:0;
            }
             .area {
            height: 20rem;
        }
        }
       
        .icon_trading{
            height: 5rem;
            width:5rem;
        box-shadow: var(--shadow);
        svg {
            font-size: 20px;
            color:#fff;
        }
        }
    }
  }
`
export default Support