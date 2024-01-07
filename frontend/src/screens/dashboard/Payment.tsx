import React, { useState } from 'react'
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCopy } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate()
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    const [state, setState] = React.useState<{
        value: string;
        copied: boolean;
    }>({
        value: "bc1qr27rs7tplyczjverg5sfuz6kvw8x7s3ldhf69d",
        copied: false,
    });
    return (
        <HistorytStyles style={{ minHeight: "100vh" }} className="w-100">
            <div className="auto py-4 trading_wrapper flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="fs-45 text-dark">
                        Fund Your Account
                    </h2>
                </div>
                <div className="trading_card flex column gap-3">
                    <div className="w-100 flex column gap-1">
                        <h4 className="fs-16 text-light text-dark">
                            You are to make payment of {" "}
                            <span className="text-extra-bold">
                                $1,000
                            </span> using your selected payment method.
                            Screenshot and upload the proof of payment
                        </h4>
                        <div className="flex item-center  gap-1">
                            <img style={{ width: "10rem" }} src="https://img.icons8.com/color/48/000000/bitcoin--v1.png" alt="" />
                            <h5 className="fs-20 text-bold">Bitcoin</h5>

                        </div>
                    </div>
                    <div className="w-100 flex column gap-1 item-start">
                        <h5 className="fs-24 text-bold">Bitcoin Address:</h5>
                        <div className="adress_wrapper w-100 flex item-start">
                            <div className="adress_input flex item-center justify-center w-100 fs-16">
                                {state?.value}
                            </div>
                            <CopyToClipboard
                                text={state.value}
                                onCopy={() => setState({ copied: true, value: state.value })}
                            >
                                <div className="adress_btn fs-20 text-grey2 flex item-center justify-center">

                                    <IoCopy />
                                </div>
                            </CopyToClipboard>
                        </div>
                        {/* <input className="input" type='number' placeholder='Enter amount to be deposited'></input> */}

                    </div>

                    <div className="w-100 py-1 flex item-start column gap-2">
                        <div className="w-100 flex column gap-1">
                            <h4 className="fs-14 text-bold">Upload Payment proof after payment.</h4>
                            <div className="w-100 flex">
                                <button className="btn btn_3 text-white fs-12 text-extra-bold">Upload Image</button>
                            </div>
                        </div>
                        <div className="w-100 py-4 flex column gap-1">
                            <h4 className="fs-14 text-bold">Upload Image preview</h4>
                            <div className="w-100 flex">
                            </div>
                        </div>
                        <button style={{ background: "green", padding: "2rem", marginTop: "4rem" }} className="btn fs-14 text-white text-bold">
                            Submit Payment
                        </button>
                    </div>
                </div>
            </div>
        </HistorytStyles>
    )
}



const HistorytStyles = styled.div`
  width: 100%;
  margin: 2rem auto;
   .adress_input{
        height:5rem;
        background-color: #e2dfdf;
    }
    .btn.btn_3 {
        padding: 1rem;
    }
    .adress_btn {
        height:5rem;
        width:6rem;
        border: 1px solid var(--dark-1);
        cursor: pointer;
    }
  .trading_wrapper {
    width:95%;
   
    .input {
        &.input_1 {
        width: 300px !important;
        @media (max-width:980px) {

            width:90%;

         }
        }
    }
    .trading_card {
        width:60%;
        margin:0 auto;
        padding:7rem 5rem;
        background-color: #fff;
        box-shadow: var(--shadow);
         /* min-width: 500px; */
         @media (max-width:980px) {
            margin:0;
            width:90%;
           padding:5rem;

         }

        .icon_trading{
         min-width: 400px;

        padding:2rem 2.5rem;
        box-shadow: var(--shadow);
        background-color: #fff;

        }
    }
  }
`
export default Payment