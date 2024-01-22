import React, { useState } from 'react'
import styled from "styled-components";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useAppDispatch, useAppSelector } from "@/hooks/reduxtoolkit";
import { useNavigate, useParams } from 'react-router-dom';
import { CreateInvestments } from '@/features/investments/investmentReducer';
import { CreateTransactions } from '@/features/transaction/transactionReducer';
import { GetSingleRoi } from '@/features/roi/roiReducer';
import { clearRoi } from '@/features/roi/roiSlice';
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
]

const ManageRoi = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [investmentAmount, setInvestmentAmount] = useState('');
    const {
        userInfo
    } = useAppSelector(store => store.auth)
    const {
        roiDetails
    } = useAppSelector(store => store.roi)
    const { toast } = useToast()



    const dispatch = useAppDispatch()
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        dispatch(clearRoi('any'))
        dispatch(GetSingleRoi({ Detailsdata: id }))

    }, [id]);



    const handlePackagePayment = (amount?: any, plan?: string) => {
        const packagePaymentData = {
            user: userInfo?._id,
            price: amount,
            tier: 'tier 1',
            plan,
            paymentMethod: "Bitcoin",
            status: "success",
            isPaid: true
        }
        // console.log(packagePaymentData)
        dispatch(CreateInvestments(packagePaymentData))
        dispatch(CreateTransactions(packagePaymentData))
        // // toast({
        // //     variant: "success",
        // //     title: "You can buy this investment",
        // // })

    }
    const handleInvestmentPackage = (amount?: any) => {
        toast({
            variant: "destructive",
            description: "You have an insufficient amount in your deposit",
            title: "You cant buy this package",
        })
        const timeout = setTimeout(() => {
            navigate('/account/dashboard/deposit')
        }, 5000);

        return () => clearTimeout(timeout)
    }
    return (
        <PackagePlanStyles style={{ minHeight: "100vh" }} className="w-100">
            <div className="trading_wrapper auto py-4 flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="fs-45 text-dark">
                        Investment package
                    </h2>
                </div>
                <div className="trading_container">
                  
                    <div className="trading_card flex column gap-3">
                        <h4 className="fs-18 text-bold">{roiDetails?.title}</h4>
                        <h3 className="fs-50 py-1 text-center family1">
                            <span className='fs-20'>$</span>
                            {roiDetails?.price}</h3>
                        <div className="w-100 flex column gap-1 fs-14 text-light text-dark">
                            <span className='w-100 flex gap-1 item-center justify-space'>Minimum Possible Deposit:
                                <span className="text-bold">${roiDetails?.min_deposit}</span>
                            </span>
                            {/* max deposit */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Maximum Possible Deposit:
                                <span className="text-bold">${roiDetails?.max_deposit}</span>
                            </span>
                            {/* Min Return */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Minimum Return:
                                <span className="text-bold">${roiDetails?.min_return}</span>
                            </span>
                            {/* Maximum Return */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Maximum Return:
                                <span className="text-bold">${roiDetails?.max_return}</span>
                            </span>

                            {/* Gift Bomus Return */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Gift Bonus:
                                <span className="text-bold">${roiDetails?.gift_bonus}</span>
                            </span>

                            <span className='w-100 flex gap-1 item-center justify-space'>Duration:
                                <span className="text-bold">{roiDetails?.duration} Days</span>
                            </span>
                        </div>
                        <div className="w-100 flex column gap-1">
                            <h4 className="fs-14 text-light">Amount to invest: ($1000 default)</h4>
                            <input
                                name='investmentAmount'
                                value={`${roiDetails?.amount}`}
                                onChange={(e) => setInvestmentAmount(`${roiDetails?.amount}`)}
                                className="input w-100" type='number' placeholder={`${roiDetails?.amount}`}></input>
                            <button onClick={() =>
                                userInfo?.deposit < roiDetails?.amount
                                    ? handleInvestmentPackage(roiDetails?.amount)
                                    :
                                    handlePackagePayment(roiDetails?.amount, roiDetails?.title)} className="btn fs-14 text-bold text-white">Update Amount</button>
                        </div>
                    </div>

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
    max-width:400px;
        width:100%;
        padding:3rem;
        background-color: #fff;
        border:1px solid rgba(0,0,0,.1);
         @media (max-width:780px) {
          max-width:310px;

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
   
  }
`

export default ManageRoi