import React, { useState } from 'react'
import styled from "styled-components";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useAppDispatch, useAppSelector } from "@/hooks/reduxtoolkit";
import { useNavigate } from 'react-router-dom';
import { CreateInvestments } from '@/features/investments/investmentReducer';
import { CreateTransactions } from '@/features/transaction/transactionReducer';
import { clearinvestment } from '@/features/investments/investmentsSlice';
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
    const {
        userInfo
    } = useAppSelector(store => store.auth)
    const {
        createinvestmentisSuccess
    } = useAppSelector(store => store.investments)
    // createinvestmentisSuccess
    const { toast } = useToast()

    const dispatch = useAppDispatch()
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        dispatch(clearinvestment("any"))
        if (createinvestmentisSuccess) {
            toast({
                variant: "success",
                description: "You have successfully created an investment",
                title: "Success",
            })
        }
    }, [createinvestmentisSuccess]);



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
                        Available packages
                    </h2>
                </div>
                <div className="trading_container">
                    {
                        depositData?.map((x?: any, index?: any) => {
                            return <div key={index} className="trading_card flex column gap-3">
                                <h4 className="fs-18 text-bold">{x?.title}</h4>
                                <h3 className="text-[40px] lg:text-[50px] py-1 text-center family1">
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
                                    <input
                                        name='investmentAmount'
                                        value={`${x?.amount}`}
                                        onChange={(e) => setInvestmentAmount(`${x?.amount}`)}
                                        className="input w-100" type='number' placeholder={`${x?.amount}`}></input>
                                    <button onClick={() =>
                                        userInfo?.deposit < x?.amount
                                            ? handleInvestmentPackage(x?.amount)
                                            :
                                            handlePackagePayment(x?.amount, x?.title)} className="btn btn-2 fs-16 text-bold text-white">Join Plan</button>
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