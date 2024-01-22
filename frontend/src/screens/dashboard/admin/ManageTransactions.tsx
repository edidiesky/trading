import React, { useState } from 'react'
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from '@/hooks/reduxtoolkit';
import { GetSingleTransaction, UpdateTransactions } from '@/features/transaction/transactionReducer';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { cleartransaction } from '@/features/transaction/transactionSlice';
import LoaderIndex from '@/components/loaders';
import { motion } from 'framer-motion';
import MyAnimatePresence from '../../../utils/AnimatePresence';
import { RxCross1 } from 'react-icons/rx';

const ManageTransactions = () => {
    // proof_image: "/images/proof_2.png"
    const { toast } = useToast()
    const navigate = useNavigate()
    const [imageactive, setImageActive] = useState(false)

    const { id } = useParams()
    const dispatch = useAppDispatch()
    const [price, setPrice] = useState('')
    const [plan, setPlan] = useState('')
    const [tier, setTier] = useState('')
    const [ispaid, setIsPaid] = useState('')
    const [status, setStatus] = useState('')
    const [proofimage, setProofImage] = useState('')
    const [paymentmethod, setPaymentMethod] = useState('')
    const paymentData = [
        'Pending',
        'Failed',
        'Success',
    ]

    const paymentStatus = [
      
        'Customer Has Not Payed',
        'Customer Has Payed',
    ]

    const {
        transactionDetails,
        transactionisLoading,
        updatetransactionisSuccess } = useAppSelector(store => store.transaction)
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        dispatch(cleartransaction('any'))
        dispatch(GetSingleTransaction({ Detailsdata: id }))
  
    }, [id]);

    React.useEffect(() => {
        if (transactionDetails) {
            setPrice(transactionDetails?.investment?.price)
            setPlan(transactionDetails?.investment?.plan)
            setTier(transactionDetails?.investment?.tier)
            setPaymentMethod(transactionDetails?.paymentMethod)
            setProofImage(transactionDetails?.proof_of_payment)
            setIsPaid(transactionDetails?.isPaid)
            setStatus(transactionDetails?.status)
        }
    }, [transactionDetails, setPrice, setPlan, setTier, setPaymentMethod, setProofImage, setIsPaid]);

    const updatedData = {
        isPaid: ispaid === 'Customer Has Payed' ? true : false,
        _id: transactionDetails?._id
    }

    const handleUpdateTransaction = () => {
        dispatch(UpdateTransactions(updatedData))
    }
    // console.log(transactionDetails)

    React.useEffect(() => {
        if (updatetransactionisSuccess) {
            toast({
                variant: "success",
                description: 'The Transaction has been successfully updated',
            })

            const timeout = setTimeout(() => {
                dispatch(cleartransaction('any'))
                navigate('/account/dashboard/TransactionList')
            }, 5000);
        }
    }, [updatetransactionisSuccess])


    return (
        <HistorytStyles style={{ minHeight: "100vh" }} className="w-100">
            {
                transactionisLoading && <LoaderIndex/>
            }
            <MyAnimatePresence>
                {
                    imageactive && <PhotoModalStyles
                        as={motion.div}
                        initial={{
                            opacity: 0, visibility: "hidden"
                        }}
                        exit={{ opacity: 0, visibility: "hidden", transition: { duration: .3 } }}
                        animate={{
                            opacity: 1, visibility: "visible", transition: {
                                delay: 0.3,
                            },
                        }}
                    >
                        <div onClick={() => setImageActive(false)} className="icons flex items-center justify-center"><RxCross1 /></div>
                        <div className="backdrop"></div>
                        <div className="TweetPhotoModalCard flex items-center justify-center">
                            <div className="TweetPhotoModalCard_left flex items-center justify-center">
                                <div className="TweetPhotoModalCard_left_wrapper flex items-center justify-center">
                                    <div className="photo_image_wrapper flex items-center justify-center">
                                        <img src={proofimage} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PhotoModalStyles>
                }

            </MyAnimatePresence>

            <div className="auto py-4 trading_wrapper flex column gap-4">
                <div className="flex w-full trading_wrapper_top  items-start md:items-center md:flex-row flex-col gap-4 justify-between">
                    <div className="flex column gap-1">
                        <h2 className="text-4xl text-dark">
                            Manage Transactions
                        </h2>
                        <span className="fs-14 w-3/4 text-light text-grey2">
                            Manage the payment status of your customer. Check for proof of payment in this section
                        </span>
                    </div>
                    <div className="flex items-center justify-end">
                        <button onClick={handleUpdateTransaction} className="btn fs-14 text-bold">Update Transaction</button>
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
                            <h5 className="text-xl family1">Transaction Status</h5>
                            <select name="ispaid" defaultValue={ispaid} value={ispaid} onChange={(e) => setIsPaid(e.target.value)} className="input font-bold text-xl">
                                {/* <option disabled></option> */}
                                {
                                    paymentStatus.map((x?: any, index?: any) => {
                                        return <option key={index} value={x}>{x}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    {/* payment proff */}
                    {
                        transactionDetails?.pla === 'Deposit Only' && <div className="w-100">
                            {
                                proofimage === '' ?
                                    <div className="w-full proof_image_wrapper pt-8 flex flex-col gap-2">
                                        <div className="proof_image_wrapper min-h-[40rem] rounded-sm flex flex-col gap-6 items-center justify-center py-8 px-4 bg-[#F8F9FB]">
                                            <img src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg" alt="" style={{ width: '250px' }} />
                                            <div className="flex column item-center gap-1">
                                                <h4 className="fs-16 text-bold text-dark">No proof of payment has been shown for this transaction</h4>
                                            </div>
                                        </div>

                                    </div>
                                    : <div className="w-full pt-8 flex flex-col gap-2">
                                        <h5 className="text-xl family1">Payment Proof</h5>
                                        <div onClick={() => setImageActive(true)} className="proof_image_wrapper min-h-[40rem] rounded-sm flex items-center justify-center py-8 px-4 bg-[#F8F9FB]">
                                            <img src={proofimage} alt="" className="w-[100%] md:w-[60%]" />
                                        </div>
                                    </div>
                            }
                        </div>
                    }
                    


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
        padding:3rem 3rem;
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


const PhotoModalStyles = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  position: fixed;
    left: 50%;
    transform: translateX(-50%);
  display: flex;
  z-index: 200800;
  align-items: center;
  justify-content: center;
  top: 0;
  .cancel_icon {
  background:rgba(0, 0, 0, 0.7) !important;
   width: 4rem !important;
        height: 4rem !important;
        border-radius: 50%;
        position:absolute;
        left:1%;
        top: 3%;
    z-index:55;
    cursor:pointer;
    transition:all .4s;
    &:hover {
  background:rgba(0, 0, 0, 0.5) !important;

    }
    svg {
      color:#fff;
    }
  }
   .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;
        position: absolute;
        left:2%;
        top:2%;
        background-color: #fff;
        z-index: 400;
        svg {
            font-size: 25px;
        }
   }

        .iconwrapper {
        transition: all .5s;
            font-size: 14px;
        cursor: pointer;
        @media (max-width:380px) {
            font-size: 13px;
        }
        &:hover {
            color:rgba(29, 146, 240, 0.835) ;
            &.text_2 {

                color:rgba(0, 186, 124, 0.802) ;

            }
            .icons.icon1 {
                background-color: rgba(29,155,240,.1);
                svg {
                    color:rgba(29, 156, 240, 0.835) ;
                }
            }.icons.icon2 {
                background-color: rgba(0,186,124,.1);
                svg {
                    color:rgba(0, 186, 124, 0.802) ;
                }
            }
        }
       .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            font-size: 25px;
        }
    }
}
  .backdrop {
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    height: 100%;
    width: 100%;
    z-index:20;
    cursor: pointer;
  }

  .TweetPhotoModalCard {
    
    grid-gap:.5rem;
    height:100vh;
    z-index:50;
    width:100%;
    .TweetPhotoModalCard_left {
      height:100%;
      width:100%;
      max-height:100vh;
      .TweetPhotoModalCard_left_wrapper {
        height:100%;
        width:100%;
        margin:0 auto;
        padding:1rem;
        .photo_image_wrapper {
          height:90%;
          width:90%;
          img {
            height:100%;
            width:100%;
            min-width:100%;
            object-fit:cover;

          }
        }
      }
    }
  }
`;

export default ManageTransactions