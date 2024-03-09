import React, { useState } from 'react'
import styled from "styled-components";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useAppDispatch, useAppSelector } from "@/hooks/reduxtoolkit";

import { Link, useNavigate } from 'react-router-dom';
import { FundDeposit } from '@/features/deposit/depositSlice';

const Withdrawal = () => {
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
        price:amount,
        plan: "Withdrawal Only"
    }
    // console.log(paymentData)
    const handlePayment = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(FundDeposit(paymentData))
        const timeout = setTimeout(() => {
            navigate('/account/dashboard/payment')
        }, 3000);

        return () => clearTimeout(timeout)

    }
    // console.log(amount)
    return (
        <HistorytStyles style={{ minHeight: "100vh" }} className="w-100">
            <div className="auto py-4 trading_wrapper flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="text-dark">
                        Request Withdrawal
                    </h2>
                </div>
                <form className="trading_card w-100 flex column gap-4">
                    <div className="flex column gap-2">
                        <div className="flex flex-col gap-1">
                            <h5 className="text-2xl family1 font-bold">Enter Trust Wallet Address</h5>
                            <input
                                name='username'
                                type="text"
                                placeholder='Wallet Address'
                                className="input w-100 text-xl text-dark" />
                        </div>
                        <div className="flex column gap-1">
                            <h4 className="text-[13px] family1 font-medium text-grey2">
                                Download trust wallet for iOS or Android
                            </h4>
                            <div className="flex text-[11px] font-bold items-center gap-1">
                                <Link style={{textDecoration:"underline"}} to={'/'}>Download trust wallet for iOS </Link>
                                <Link style={{textDecoration:"underline"}} to={'/'}>Download trust wallet for Android </Link>
                            </div>
                        </div>
                    </div>
                    <button
                        type='submit'
                        onClick={(e) => handlePayment(e)} className="btn family1 fs-14 text-white text-bold">
                     Complete Withdrawal Request
                    </button>
                </form>
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
        min-width: 270px;
           /* @media (max-width:780px) {
            min-width:100%;
        } */
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
        border-radius:20px;
           @media (max-width:780px) {
            min-width:100%;
        }

        .icon_trading{
         min-width: 300px;

        padding:2rem 2.5rem;
        box-shadow: var(--shadow);
        background-color: #fff;
        @media (max-width:780px) {
            min-width:100%;
        }

        }
    }
  }
`
export default Withdrawal