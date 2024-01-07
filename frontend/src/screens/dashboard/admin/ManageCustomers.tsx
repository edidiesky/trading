import React, { useState } from 'react'
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from '@/hooks/reduxtoolkit';
import { UpdateTransactions } from '@/features/transaction/transactionReducer';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast"
import { GetUserProfile, UpdateProfile } from '@/features/auth/authReducer';
import { clearUserProfile } from '@/features/auth/authSlice';


const ManageCustomers = () => {
    // proof_image: "/images/proof_2.png"
    const { toast } = useToast()
    const navigate = useNavigate()


    const { id } = useParams()
    const dispatch = useAppDispatch()
    const [username, setUsername] = useState('')
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [ispaid, setIsPaid] = useState('')
    const [country, setCountry] = useState('')
    const [deposit, setDeposit] = useState('')
    const [bonus, setBonus] = useState('')
    const [referralbonus, setReferralBonus] = useState('')

    const {
        userDetails,
        userprofileisLoading,
        userprofileisSuccess,
        updateuserprofileisSuccess,
    } = useAppSelector(store => store.auth)

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        dispatch(clearUserProfile('any'))
        dispatch(GetUserProfile({ profileId: id }))
    }, [id]);

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        
        if (userDetails) {
            setUsername(userDetails?.username)
            setFullName(userDetails?.fullname)
            setEmail(userDetails?.email)
            setCountry(userDetails?.country)
            setDeposit(userDetails?.deposit)
            setBonus(userDetails?.bonus)
        }
    }, [
        userDetails, 
        setUsername, 
        setFullName, 
        setEmail, 
        setCountry, 
        setBonus,
        setDeposit
    ]);

    const updatedData = {
        username,
        fullname,
        email,
        country,
        _id: userDetails?._id
    }

    const handleUpdateTransaction = () => {
        dispatch(UpdateProfile(updatedData))
    }
    // console.log(updatedData)

    React.useEffect(() => {
        dispatch(clearUserProfile('any'))
        if (updateuserprofileisSuccess) {
            toast({
                variant: "success",
                description: 'User Porfile has been succesfully updated',
            })
            const timeout = setTimeout(() => {
                dispatch(clearUserProfile('any'))
                navigate('/account/dashboard/Manage_Customers')
            }, 5000);
        }
        if (userprofileisSuccess) {
            toast({
                variant: "success",
                description: 'Users has been succesfully fetched',
            })

            // const timeout = setTimeout(() => {
            //     dispatch(cleartransaction('any'))
            //     navigate('/account/dashboard/TransactionList')
            // }, 5000);
        }
    }, [userprofileisSuccess, updateuserprofileisSuccess])


    return (
        <HistorytStyles style={{ minHeight: "100vh" }} className="w-100">
            <div className="auto py-4 trading_wrapper flex column gap-4">
                <div className="flex w-full trading_wrapper_top  items-start md:items-center md:flex-row flex-col gap-4 justify-between">
                    <div className="flex column gap-1">
                        <h2 className="text-4xl text-dark">
                            Manage Customer Details
                        </h2>
                        <span className="fs-14 w-3/4 text-light text-grey2">
                            Manage the payment status of your customer. Check for proof of payment in this section
                        </span>
                    </div>
                    <div className="flex items-center justify-end">
                        <button onClick={handleUpdateTransaction} className="btn fs-14 text-bold">Update</button>
                    </div>
                </div>
                <div className="w-100 trading_wrapper_bottom pt-12 flex flex-col gap-12">
                    <div className="w-100 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                        <div className="flex flex-col gap-1">
                            <h5 className="text-xl family1">UserName</h5>
                            <input
                                value={username}
                                name='username'
                                type="text"
                                placeholder='Customers Usrename'
                                onChange={(e) => setUsername(e.target.value)}
                                className="input w-100 text-xl text-dark" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h5 className="text-xl family1">Customer FullName</h5>
                            <input type="text"
                                name='fullname'
                                onChange={(e) => setFullName(e.target.value)}
                                value={fullname} placeholder='Customer FullName'
                                className="input w-100 text-xl text-dark" />
                        </div>
                    </div>

                    <div className="w-100 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                        <div className="flex flex-col gap-1">
                            <h5 className="text-xl family1">Email</h5>
                            <input
                                value={email}
                                name='email'
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Customer Email'
                                className="input w-100 text-xl text-dark" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h5 className="text-xl family1">Country</h5>
                            <input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}

                                placeholder='Country'
                                className="input w-100 text-xl text-dark" />
                        </div>
                    </div>

                    <div className="w-100 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                        <div className="flex flex-col gap-1">
                            <h5 className="text-xl family1">Deposit ($)</h5>
                            <input
                                value={deposit}
                                name='deposit'
                                type="number"
                                onChange={(e) => setDeposit(e.target.value)}
                                placeholder='$1000'
                                className="input w-100 text-xl text-dark" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h5 className="text-xl family1">Bonus ($)</h5>
                            <input
                                value={bonus}
                                name='bonus'
                                type="number"
                                onChange={(e) => setBonus(e.target.value)}
                                placeholder='$1000'
                                className="input w-100 text-xl text-dark" />
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
export default ManageCustomers