import React, { useState } from 'react'
import styled from "styled-components";
import { TransactionsPlan } from '../../../data/courses';
import { Table } from '../../../components/common/styles';
import TableCard from '../../../components/common/TableCard';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxtoolkit';
import { getAllTransactions } from '@/features/transaction/transactionReducer';

const ManageTransactions = () => {
    const dispatch = useAppDispatch()
    const { transactions } = useAppSelector(store => store.transaction)
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        dispatch(getAllTransactions())
    }, []);

    return (
        <HistorytStyles style={{ minHeight: "100vh" }} className="w-100">
            <div className="auto py-4 trading_wrapper flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="fs-45 text-dark">
                      Manage Transactions
                    </h2>
                    <span className="fs-16 w-50 text-light text-grey2">
                       Manage all the Transactions carried out by your customers
                    </span>
                </div>
                <div className="trading_card w-100 flex column gap-4">
                    <div className="w-100 justify-end flex item-center">
                        <input className="input" placeholder='Search for ROI ManageTransactions'></input>
                    </div>
                    <div className="w-100">
                        {
                            transactions.length === 0 ? <div className="cart_none w-100">
                                <div className="w-100 flex item-center column gap-2 justify-center">
                                    <img src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg" alt="" style={{ width: '250px' }} />
                                    <div className="flex column item-center gap-1">
                                        <h4 className="fs-16 text-bold text-blue">Your cart is empty. Keep shopping to find a course!</h4>
                                        <div className="btn btn-2 fs-16 text-bold">Keep Shopping</div>
                                    </div>
                                </div>
                            </div> :
                                <Table>
                                    <div className="TableContainer">
                                        <table className="tableWrapper">
                                            <thead>
                                                <tr>
                                                    <th>Amount</th>
                                                    <th>Investor</th>
                                                    <th>Payment Mode</th>
                                                    <th>Status</th>
                                                    <th>Tier</th>
                                                    <th>payment status</th>
                                                    <th>Date Created</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {transactions?.map((x?: any, index?: any) => {
                                                    return <TableCard x={x} type={'transactions'} key={x?._id} />;
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </Table>
                        }
                    </div>
                    <div className="w-100 py-1 flex item-center justify-space">
                        <h5 className="fs-14 text-grey2 family1">
                            Showing 0 to 0 of 0 entries</h5>
                        <div className="flex item-center justify-end gap-2">
                            <button className="btn fs-14 text-white text-bold">Previous</button>
                            <button className="btn fs-14 text-white text-bold">Next</button>
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