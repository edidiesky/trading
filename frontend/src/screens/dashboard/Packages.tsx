import React, { useState } from 'react'
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useAppDispatch, useAppSelector } from "@/hooks/reduxtoolkit";
import { Link, useNavigate } from 'react-router-dom';
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


const packageData = [
    {
        title: "SILVER ACCOUNT",
        // min_deposit: "$10,000",
        "min_deposit": "1000",
        "max_deposit": "1000",
        "min_return": "10000",
        "max_return": "10000",
        "gift_bonus": "5",
        "amount": 1000,
    },
    {
        title: "GOLD ACCOUNT",
        // min_deposit: "$30,000",
        "min_deposit": "10,000",
        "max_deposit": "10,000",
        "min_return": "10000",
        "max_return": "10000",
        "gift_bonus": "5",
        "duration": "80",
        "amount": 10000,
    },
    {
        title: "PLATINUM ACCOUNT",
        // min_deposit: "$500,000",
        "min_deposit": "100,000",
        "max_deposit": "100,000",
        "min_return": "10000",
        "max_return": "10000",
        "gift_bonus": "5",
        "duration": "80",
        "amount": 100000,
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
        // console.log(packagePaymentData)
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
    const handlePayment = (amount: any, title?: any) => {

        // console.log(amount)
        // console.log(userData?.deposit, amount)
        // console.log(userData?.deposit > amount)

        if (userData?.deposit >= amount) {
            // console.log('sufficient Amount')
            handlePackagePayment(amount, title)
        } else {
            // console.log('Insufficient Amount')
            handleInvestmentPackage(amount)
        }
    }
    return (
        <PackagePlanStyles style={{ minHeight: "100vh" }} className="w-100">
            <div className="trading_wrapper auto flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="fs-45 text-dark">
                        Available packages
                    </h2>
                </div>
                <div className="trading_container w-full items-center">
                    {
                        packageData?.map((x?: any, index?: any) => {
                            return <div className="w-100 border bg-[#fff] shadow-xl rounded-[30px] flex flex-col">

                                <div className="w-90 px-8 auto py-24 flex gap-12 flex-col">
                                    <h3 className="text-[27px] text-extra-bold  text-start">
                                        <span className="flex items-center gap-2 text-xl mb-3 font-medium uppercase family1">MINIMUM FUNDING
                                            <span className="px-[12px] py-[7px] flex items-center rounded-[40px] text-white font-bold text-[1.8rem] bg-[#1980EC]">
                                                ${x?.min_deposit}
                                            </span>
                                        </span>
                                        {x?.title}
                                    </h3>
                                    <div className="w-100 flex column family1 items-center justify-center gap-2 text-[17px] text-bold">
                                        <span className='w-100 flex gap-1 item-center justify-space'>
                                            <span className="flex items-center gap-1 text-light fs-14 family2 text-grey">
                                                <span className="w-8 h-8 family1 rounded-full text-[13px] text-[#fff] bg-[#1980EC] flex items-center justify-center">
                                                    <FaCheck fontSize={'10px'} />
                                                </span>
                                                Minimum Possible Deposit:</span>
                                            <span className="text-bold">${x.min_deposit}</span>
                                        </span>
                                        {/* max deposit */}
                                        <span className='w-100 flex gap-1 item-center justify-space'>
                                            <span className="flex items-center gap-1 text-light fs-14 family2 text-grey">
                                                <span className="w-8 h-8 family1 rounded-full text-[13px] text-[#fff] bg-[#1980EC] flex items-center justify-center">
                                                    <FaCheck fontSize={'10px'} />
                                                </span>
                                                Maximum Possible Deposit:</span>

                                            <span className="text-bold">${x.max_deposit}</span>
                                        </span>
                                        {/* Min Return */}
                                        <span className='w-100 flex gap-1 item-center justify-space'>
                                            <span className="flex items-center gap-1 text-light fs-14 family2 text-grey">
                                                <span className="w-8 h-8 family1 rounded-full text-[13px] text-[#fff] bg-[#1980EC] flex items-center justify-center">
                                                    <FaCheck fontSize={'10px'} />
                                                </span>
                                                Minimum Return:</span>
                                            <span className="text-bold">${x.min_return}</span>
                                        </span>
                                        {/* Maximum Return */}
                                        <span className='w-100 flex gap-1 item-center justify-space'>
                                            <span className="flex items-center gap-1 text-light fs-14 family2 text-grey">
                                                <span className="w-8 h-8 family1 rounded-full text-[13px] text-[#fff] bg-[#1980EC] flex items-center justify-center">
                                                    <FaCheck fontSize={'10px'} />
                                                </span>
                                                Maximum Return:</span>
                                            <span className="text-bold">${x.max_return}</span>
                                        </span>

                                        {/* Gift Bomus Return */}
                                        <span className='w-100 flex gap-1 item-center justify-space'>
                                            <span className="flex items-center gap-1 text-light fs-14 family2 text-grey">
                                                <span className="w-8 h-8 family1 rounded-full text-[13px] text-[#fff] bg-[#1980EC] flex items-center justify-center">
                                                    <FaCheck fontSize={'10px'} />
                                                </span>
                                                Gift Bonus:</span>
                                            <span className="text-bold">${x.gift_bonus}</span>
                                        </span>

                                        <span className='w-100 flex gap-1 item-center justify-space'>
                                            <span className="flex items-center gap-1 text-light fs-14 family2 text-grey">
                                                <span className="w-8 h-8 family1 rounded-full text-[13px] text-[#fff] bg-[#1980EC] flex items-center justify-center">
                                                    <FaCheck fontSize={'10px'} />
                                                </span>
                                                Duration:</span>
                                            <span className="text-bold">{x.duration} Days</span>
                                        </span>
                                    </div>
                                    <div className="w-100 flex family1 column gap-1">
                                        <h4 className="fs-14 text-bold">Amount to invest: (${x.amount} default)</h4>
                                        {/* <input
                                            value={investmentAmount1}
                                            onChange={(e) => setInvestmentAmount1(e.target.value)}
                                            className="input w-100" type='number' placeholder={`${x.amount}`}></input> */}
                                        <button onClick={() => handlePayment(x.amount, x.title)} className="btn btn-2 shadow-2xl mt-8 fs-16 text-bold text-white">Join Plan</button>
                                    </div>
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
  margin: 0 auto;
  padding-bottom: 4rem;
  .trading_wrapper {
    width:95%;
    .trading_container {
    width:100%;
    display:grid;
    grid-gap: 2rem;
    grid-row-gap: 6rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

