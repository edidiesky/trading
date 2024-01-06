import React, { useState } from 'react'
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from '@/hooks/reduxtoolkit';
import { GetSingleTransaction, getAllTransactions } from '@/features/transaction/transactionReducer';
import { useParams } from 'react-router-dom';

const ManageTransactions = () => {
    // proof_image: "/images/proof_2.png"

    const { id } = useParams()
    const dispatch = useAppDispatch()
    const [price, setPrice] = useState('')
    const [plan, setPlan] = useState('')
    const [tier, setTier] = useState('')
    const [status, setStatus] = useState('')
    const [proofimage, setProofImage] = useState('')
    const [paymentmethod, setPaymentMethod] = useState('')
     const paymentData = [
        'Pending',
        'Failed',
        'Success',
    ]

    const { transactionDetails } = useAppSelector(store => store.transaction)
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        dispatch(GetSingleTransaction({ Detailsdata: id }))
        if (transactionDetails) {
            setPrice(transactionDetails?.investment?.price)
            setPlan(transactionDetails?.investment?.plan)
            setTier(transactionDetails?.investment?.tier)
            setPaymentMethod(transactionDetails?.paymentMethod)
            setProofImage(transactionDetails?.paymentMethod)
        }
    }, [id, setPrice, setPlan, setTier, setPaymentMethod, setProofImage]);

    return (
        <HistorytStyles style={{ minHeight: "100vh" }} className="w-100">
            <div className="auto py-4 trading_wrapper flex column gap-4">
                <div className="flex w-full trading_wrapper_top  items-start md:items-center md:flex-row flex-col gap-4 justify-between">
                    <div className="flex column gap-1">
                        <h2 className="text-4xl text-dark">
                            Manage Transactions
                        </h2>
                        <span className="fs-14 w-3/4 text-light text-grey2">
                            Manage all the Transactions carried out by your customers
                        </span>
                    </div>
                    <div className="flex items-center justify-end">
                        <button className="btn fs-14 text-bold">Update Transaction</button>
                    </div>
                </div>
                <div className="w-100 trading_wrapper_bottom pt-12 flex flex-col gap-12">
                    <div className="w-100 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                        <div className="flex flex-col gap-1">
                            <h5 className="text-xl family1">Investment Price ($)</h5>
                            <input
                                value={price}
                                name='price'
                                type="number"
                                placeholder='$1000'
                                onChange={(e) => setPrice(e.target.value)}
                                className="input w-100 text-xl text-dark" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h5 className="text-xl family1">Investment Plan</h5>
                            <input type="text" name='plan' onChange={(e) => setPlan(e.target.value)} value={plan} placeholder='$1000' className="input w-100 text-xl text-dark" />
                        </div>
                    </div>

                    <div className="w-100 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                        <div className="flex flex-col gap-1">
                            <h5 className="text-xl family1">Investment Tier</h5>
                            <input 
                            value={tier} 
                            name='tier' 
                            type="text" 
                            placeholder='$1000' 
                            className="input w-100 text-xl text-dark" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h5 className="text-xl family1">Payment Method</h5>
                            <input type="text" value={paymentmethod} placeholder='$1000' className="input w-100 text-xl text-dark" />
                        </div>
                    </div>
                    <div className="w-100 grid grid-cols-1 sm:grid-cols-3 gap-4 ">
                        <div className="flex flex-col gap-1">
                            <h5 className="text-xl family1">Payment Status</h5>
                            <select name="status" onChange={(e) => setStatus(e.target.value)} className="input font-bold text-xl">
                                {/* <option disabled></option> */}
                                {
                                    paymentData.map((x?: any, index?: any) => {
                                        return <option key={index} value={x}>{x}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    {/* payment proff */}
                    <div className="w-full pt-8 flex flex-col gap-2">
                        <h5 className="text-xl family1">Payment Proof</h5>
                        <div className="proof_image_wrapper min-h-[40rem] rounded-sm flex items-center justify-center py-8 px-4 bg-[#F8F9FB]">
                            <img src={proofimage} alt="" className="w-[100%] md:w-[60%]" />
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
  .proof_image_wrapper {

  }
  .trading_wrapper {
    width:95%;
    box-shadow: var(--shadow);
        background-color: #fff;

    .trading_wrapper_top {
         padding:1rem 4rem;
         padding-bottom: 3rem;
        border-bottom:1px solid rgba(0,0,0,.1);
    }
       .trading_wrapper_bottom {
         padding:1rem 4rem;
    }
    .trading_card {
        width:100%;
        padding:3rem 4rem;
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
`
export default ManageTransactions