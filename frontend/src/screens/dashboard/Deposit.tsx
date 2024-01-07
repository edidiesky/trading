import React, { useState } from 'react'
import styled from "styled-components";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useAppDispatch, useAppSelector } from "@/hooks/reduxtoolkit";

import { useNavigate } from 'react-router-dom';
import { FundDeposit } from '@/features/deposit/depositSlice';

const Deposit = () => {
    const { toast } = useToast()

    const [amount, setAmount] = useState<number>()
    const dispatch = useAppDispatch()
    const {
        userInfo
    } = useAppSelector(store => store.auth)
    const navigate = useNavigate()
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    const paymentData = {
        paymentMethod: "Bitcoin",
        amount
    }
    // console.log(paymentData)
    const handlePayment = () => {
        dispatch(FundDeposit(paymentData))
        const timeout = setTimeout(() => {
            navigate('/account/dashboard/payment')
        }, 3000);

        return () => clearTimeout(timeout)

    }
    return (
        <HistorytStyles style={{ minHeight: "100vh" }} className="w-100">
            <div className="auto py-4 trading_wrapper flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="fs-45 text-dark">
                        Fund Your Account
                    </h2>
                </div>
                <div className="trading_card w-100 flex column gap-4">

                    <div className="w-100 flex column gap-1 item-start">
                        <h5 className="fs-18 text-bold">Enter your Amount</h5>
                        <input
                            className="input"
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                            type='number'
                            placeholder='Enter amount to be deposited'></input>
                    </div>
                    <div className="w-100 py-1 flex item-start column gap-1">
                        <h5 className="fs-18 text-dark text-bold">Choose Payment Method from the list below</h5>
                        <div className="flex item-start column gap-2">
                            <div onClick={() => toast({
                                variant: "success",
                                description: 'Bitcoin Payment method has been selected ',
                            })} className="icon_trading flex item-center  gap-1">
                                <img style={{ width: "3.5rem" }} src="https://img.icons8.com/color/48/000000/bitcoin--v1.png" alt="" />
                                <h5 className="fs-16 text-light">Bitcoin</h5>

                            </div>
                            <button
                                disabled={amount! <= 0}
                                onClick={() => handlePayment()} className="btn fs-14 text-white text-bold">
                                Proceeed to Payment
                            </button>
                        </div>
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
    .input {
        min-width: 500px;
    }
    .btn {
        min-width:200px;
    }
     .btn:disabled {
      cursor: not-allowed;
      opacity: .6;

    }
    .trading_card {
        width:60%;
        padding:3rem 5rem;
        background-color: #fff;
        box-shadow: var(--shadow);
         /* min-width: 500px; */

        .icon_trading{
         min-width: 400px;

        padding:2rem 2.5rem;
        box-shadow: var(--shadow);
        background-color: #fff;

        }
    }
  }
`
export default Deposit