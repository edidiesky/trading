import React, { useState } from 'react'
import styled from "styled-components";

const depositData = [
    {
        "title": "First Plan",
        "min_deposit": "1000",
        "max_deposit": "1000",
        "min_return": "10000",
        "max_return": "10000",
        "gift_bonus": "5",
        "duration": "80",
        "amount": "1000"
    },
    {
        "title": "Second Plan",
        "min_deposit": "100,000",
        "max_deposit": "100,000",
        "min_return": "10000",
        "max_return": "10000",
        "gift_bonus": "5",
        "duration": "80",
        "amount": "100,000"
    },
    {
        "title": "Third Plan",
        "min_deposit": "1000,000",
        "max_deposit": "1000,000",
        "min_return": "10000",
        "max_return": "10000",
        "gift_bonus": "5",
        "duration": "80",
        "amount": "1000,000"
    }
]

const Students = () => {
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <PackagePlanStyles style={{ minHeight: "100vh" }} className="w-100">
            <div className="trading_wrapper auto py-4 flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="fs-45 text-dark">
                        Available packages
                    </h2>
                </div>
                <div className="trading_container">
                    {
                        depositData?.map((x?: any, index?: any) => {
                            return <div key={index} className="trading_card flex column gap-3">
                                <h4 className="fs-18 text-bold">{x?.title}</h4>
                                <h3 className="fs-50 py-1 text-center family1">
                                    <span className='fs-20'>$</span>
                                    {x?.amount}</h3>
                                <div className="w-100 flex column gap-1 fs-14 text-light text-dark">
                                    <span className='w-100 flex gap-1 item-center justify-space'>Minimum Possible Deposit:
                                        <span className="text-bold">${x?.min_deposit}</span>
                                    </span>
                                    {/* max deposit */}
                                    <span className='w-100 flex gap-1 item-center justify-space'>Maximum Possible Deposit:
                                        <span className="text-bold">${x?.max_deposit}</span>
                                    </span>
                                    {/* Min Return */}
                                    <span className='w-100 flex gap-1 item-center justify-space'>Minimum Return:
                                        <span className="text-bold">${x?.min_return}</span>
                                    </span>
                                    {/* Maximum Return */}
                                    <span className='w-100 flex gap-1 item-center justify-space'>Maximum Return:
                                        <span className="text-bold">${x?.max_return}</span>
                                    </span>

                                    {/* Gift Bomus Return */}
                                    <span className='w-100 flex gap-1 item-center justify-space'>Gift Bonus:
                                        <span className="text-bold">${x?.gift_bonus}</span>
                                    </span>

                                    <span className='w-100 flex gap-1 item-center justify-space'>Duration:
                                        <span className="text-bold">{x?.duration} Days</span>
                                    </span>
                                </div>
                                <div className="w-100 flex column gap-1">
                                    <h4 className="fs-14 text-light">Amount to invest: ($1000 default)</h4>
                                    <input className="input w-100" type='number' placeholder={`$ ${x?.amount}`}></input>
                                    <button className="btn btn-2 fs-16 text-light text-white">Join Plan</button>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>

        </PackagePlanStyles>
    )
}

const PackagePlanStyles = styled.div`
  width: 100%;
  margin: 2rem auto;
  .trading_wrapper {
    width:95%;
    .trading_container {
    width:100%;
    display:grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width:780px) {
        grid-template-columns: 1fr;
    }
 .trading_card {
        width:100%;
        padding:3rem;
        background-color: #fff;
        border:1px solid rgba(0,0,0,.1);
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
   
  }
`

export default Students