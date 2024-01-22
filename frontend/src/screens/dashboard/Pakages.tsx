import React, { useState } from 'react'
import styled from "styled-components";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useAppDispatch, useAppSelector } from "@/hooks/reduxtoolkit";
import { useNavigate } from 'react-router-dom';
import { CreateInvestments } from '@/features/investments/investmentReducer';
import { CreateTransactions } from '@/features/transaction/transactionReducer';
import { clearinvestment } from '@/features/investments/investmentsSlice';
import { GetSingleUser, GetUserProfile } from '@/features/auth/authReducer';
import { CreateRoi } from '@/features/roi/roiReducer';
const depositData = [
    {
        "title": "Silver Plan",
        "min_deposit": "1000",
        "max_deposit": "1000",
        "min_return": "10000",
        "max_return": "10000",
        "gift_bonus": "5",
        "duration": "80",
        "amount": "1000"
    },
    {
        "title": "Gold Plan",
        "min_deposit": "10,000",
        "max_deposit": "10,000",
        "min_return": "10000",
        "max_return": "10000",
        "gift_bonus": "5",
        "duration": "80",
        "amount": "10,000"
    },
    {
        "title": "Diamond Plan",
        "min_deposit": "100,000",
        "max_deposit": "100,000",
        "min_return": "10000",
        "max_return": "10000",
        "gift_bonus": "5",
        "duration": "80",
        "amount": "100,000"
    }
]

const Students = () => {
    const navigate = useNavigate()

    const [investmentAmount, setInvestmentAmount] = useState('');
    const [investmentAmount1, setInvestmentAmount1] = useState('');
    const [investmentAmount2, setInvestmentAmount2] = useState('');
    const {
        userInfo
    } = useAppSelector(store => store.auth)
    const userData = JSON.parse(localStorage.getItem("User") || 'false');

    const {
        createinvestmentisSuccess
    } = useAppSelector(store => store.investments)
    // createinvestmentisSuccess
    const { toast } = useToast()

    const dispatch = useAppDispatch()

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        dispatch(GetSingleUser())

        if (createinvestmentisSuccess) {
            toast({
                variant: "success",
                description: "You have successfully created an investment",
                title: "Success",
            })
            dispatch(GetSingleUser())
            const timeout = setTimeout(() => {
                navigate('/account/dashboard/investment_history')
            }, 1000);

            return () => clearTimeout(timeout)
        }

    }, [createinvestmentisSuccess]);

    React.useEffect(() => {
        dispatch(clearinvestment("any"))
        dispatch(GetSingleUser())
    }, []);

    // console.log(userInfo)



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
        console.log(packagePaymentData)
        dispatch(CreateInvestments(packagePaymentData))
        dispatch(CreateRoi(packagePaymentData))
        dispatch(CreateTransactions(packagePaymentData))
        // window.location.reload();

    }
    const handleInvestmentPackage = (amount?: any) => {
        toast({
            variant: "destructive",
            description: "You have an insufficient amount in your deposit",
            title: "You cant buy this package",
        })
        const timeout = setTimeout(() => {
            navigate('/account/dashboard/deposit')
        }, 3000);

        return () => clearTimeout(timeout)
    }
    const hamdlePayment = (amount: any, title?: any) => {

        // console.log(amount)
        // console.log(userInfo?.deposit)
        // console.log(userInfo?.deposit > amount)

        if (userData?.deposit >= amount) {
            console.log('sufficient Amount')
            handlePackagePayment(amount, title)
        } else {
            console.log('Insufficient Amount')
            handleInvestmentPackage(amount)
        }
    }
    return (
        <PackagePlanStyles style={{ minHeight: "100vh" }} className="w-100">
            <div className="trading_wrapper auto py-4 flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="fs-45 text-dark">
                        Available packages
                    </h2>
                </div>
                <div className="trading_container">
                    <div className="trading_card flex column gap-3">
                        <h4 className="fs-18 text-bold">{depositData[0].title}</h4>
                        <h3 className="text-[40px] lg:text-[50px] py-1 text-center family1">
                            <span className='fs-20'>$</span>
                            {depositData[0].amount}</h3>
                        <div className="w-100 flex column gap-1 fs-14 text-light text-dark">
                            <span className='w-100 flex gap-1 item-center justify-space'>Minimum Possible Deposit:
                                <span className="text-bold">${depositData[0].min_deposit}</span>
                            </span>
                            {/* max deposit */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Maximum Possible Deposit:
                                <span className="text-bold">${depositData[0].max_deposit}</span>
                            </span>
                            {/* Min Return */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Minimum Return:
                                <span className="text-bold">${depositData[0].min_return}</span>
                            </span>
                            {/* Maximum Return */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Maximum Return:
                                <span className="text-bold">${depositData[0].max_return}</span>
                            </span>

                            {/* Gift Bomus Return */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Gift Bonus:
                                <span className="text-bold">${depositData[0].gift_bonus}</span>
                            </span>

                            <span className='w-100 flex gap-1 item-center justify-space'>Duration:
                                <span className="text-bold">{depositData[0].duration} Days</span>
                            </span>
                        </div>
                        <div className="w-100 flex column gap-1">
                            <h4 className="fs-14 text-light">Amount to invest: ($1000 default)</h4>
                            <input
                                name='investmentAmount'
                                value={investmentAmount}
                                onChange={(e) => setInvestmentAmount(e.target.value)}
                                className="input w-100" type='number' placeholder={`${depositData[0].amount}`}></input>
                            <button onClick={() => hamdlePayment(depositData[0].amount, depositData[0].title)} className="btn btn-2 fs-16 text-bold text-white">Join Plan</button>
                        </div>
                    </div>
                    <div className="trading_card flex column gap-3">
                        <h4 className="fs-18 text-bold">{depositData[1].title}</h4>
                        <h3 className="text-[40px] lg:text-[50px] py-1 text-center family1">
                            <span className='fs-20'>$</span>
                            {depositData[1].amount}</h3>
                        <div className="w-100 flex column gap-1 fs-14 text-light text-dark">
                            <span className='w-100 flex gap-1 item-center justify-space'>Minimum Possible Deposit:
                                <span className="text-bold">${depositData[1].min_deposit}</span>
                            </span>
                            {/* max deposit */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Maximum Possible Deposit:
                                <span className="text-bold">${depositData[1].max_deposit}</span>
                            </span>
                            {/* Min Return */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Minimum Return:
                                <span className="text-bold">${depositData[1].min_return}</span>
                            </span>
                            {/* Maximum Return */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Maximum Return:
                                <span className="text-bold">${depositData[1].max_return}</span>
                            </span>

                            {/* Gift Bomus Return */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Gift Bonus:
                                <span className="text-bold">${depositData[1].gift_bonus}</span>
                            </span>

                            <span className='w-100 flex gap-1 item-center justify-space'>Duration:
                                <span className="text-bold">{depositData[1].duration} Days</span>
                            </span>
                        </div>
                        <div className="w-100 flex column gap-1">
                            <h4 className="fs-14 text-light">Amount to invest: ($1000 default)</h4>
                            <input
                                value={investmentAmount1}
                                onChange={(e) => setInvestmentAmount1(e.target.value)}
                                className="input w-100" type='number' placeholder={`${depositData[1].amount}`}></input>
                            <button onClick={() => hamdlePayment(depositData[1].amount, depositData[2].title)} className="btn btn-2 fs-16 text-bold text-white">Join Plan</button>
                        </div>
                    </div>
                    <div className="trading_card flex column gap-3">
                        <h4 className="fs-18 text-bold">{depositData[2].title}</h4>
                        <h3 className="text-[40px] lg:text-[50px] py-1 text-center family1">
                            <span className='fs-20'>$</span>
                            {depositData[2].amount}</h3>
                        <div className="w-100 flex column gap-1 fs-14 text-light text-dark">
                            <span className='w-100 flex gap-1 item-center justify-space'>Minimum Possible Deposit:
                                <span className="text-bold">${depositData[2].min_deposit}</span>
                            </span>
                            {/* max deposit */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Maximum Possible Deposit:
                                <span className="text-bold">${depositData[2].max_deposit}</span>
                            </span>
                            {/* Min Return */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Minimum Return:
                                <span className="text-bold">${depositData[2].min_return}</span>
                            </span>
                            {/* Maximum Return */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Maximum Return:
                                <span className="text-bold">${depositData[2].max_return}</span>
                            </span>

                            {/* Gift Bomus Return */}
                            <span className='w-100 flex gap-1 item-center justify-space'>Gift Bonus:
                                <span className="text-bold">${depositData[2].gift_bonus}</span>
                            </span>

                            <span className='w-100 flex gap-1 item-center justify-space'>Duration:
                                <span className="text-bold">{depositData[2].duration} Days</span>
                            </span>
                        </div>
                        <div className="w-100 flex column gap-1">
                            <h4 className="fs-14 text-light">Amount to invest: ($1000 default)</h4>
                            <input
                                name='investmentAmount'
                                value={investmentAmount2}
                                onChange={(e) => setInvestmentAmount2(e.target.value)}
                                className="input w-100" type='number' placeholder={`${depositData[2].amount}`}></input>
                            <button onClick={() => hamdlePayment(depositData[2].amount, depositData[2].title)} className="btn btn-2 fs-16 text-bold text-white">Join Plan</button>
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
    @media (max-width:1080px) {
        grid-template-columns: 1fr 1fr;
    }
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