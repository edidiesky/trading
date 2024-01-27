import React, { useState } from 'react'
import styled from "styled-components";
import { useToast } from "@/components/ui/use-toast"
import { useAppDispatch, useAppSelector } from "@/hooks/reduxtoolkit";
import { useNavigate, useParams } from 'react-router-dom';
import { CreateInvestments, GetSingleInvestmentOfAUser } from '@/features/investments/investmentReducer';
import { CreateTransactions } from '@/features/transaction/transactionReducer';
import { Table } from '../../components/common/styles';
import TableCard from '../../components/common/TableCard';
import { clearinvestment } from '@/features/investments/investmentsSlice';
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

const Withdrawals = () => {
    const navigate = useNavigate()
    const [investmentAmount, setInvestmentAmount] = useState('');
    const { investments, investmentisLoading } = useAppSelector(store => store.investments)

    const {
        userInfo
    } = useAppSelector(store => store.auth)
    const { toast } = useToast()

    const dispatch = useAppDispatch()

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        dispatch(clearinvestment('any'))
        dispatch(GetSingleInvestmentOfAUser({ Detailsdata: "" }))
    }, []);



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
                        Withdrawal Request

                        <span className="fs-18 text-light text-grey block">Make a withdraw of your investment deposits</span>
                    </h2>
                </div>
                <div className="w-100">
                    <Table>
                        <div className="TableContainer">
                            <table className="tableWrapper">
                                <thead>
                                    <tr>
                                        <th>Investment Plan</th>
                                        {/* <th>Username</th> */}
                                        <th>Price</th>
                                        <th>Tier</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Actions</th>
                                        {/* <th>Returns</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {investments?.map((x?: any, index?: any) => {
                                        return <TableCard type={'userwithdrawal'} x={x} key={x?._id} />;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </Table>
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
  }
`

export default Withdrawals