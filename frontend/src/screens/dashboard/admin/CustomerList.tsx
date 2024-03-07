import React, { useState } from 'react'
import styled from "styled-components";
import { TransactionsPlan } from '../../../data/courses';
import { Table } from '../../../components/common/styles';
import TableCard from '../../../components/common/TableCard';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxtoolkit';
import { getAllTransactions } from '@/features/transaction/transactionReducer';
import { GetAllUserProfile } from '@/features/auth/authReducer';

const CustomerList = () => {
    const dispatch = useAppDispatch()
    const { users } = useAppSelector(store => store.auth)
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        dispatch(GetAllUserProfile())
    }, []);

    return (
        <HistorytStyles style={{ minHeight: "100vh" }} className="w-100">
            <div className="auto py-4 trading_wrapper flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="fs-45 text-dark">
                      Manage Customers
                    </h2>
                    <span className="fs-16 w-50 family1 text-light text-grey2">
                      See a list of your customers who are investing
                    </span>
                </div>
                <div className="trading_card w-100 flex column gap-4">
                    <div className="w-100 justify-end flex item-center">
                        <input className="input" placeholder='Search for ROI CustomerList'></input>
                    </div>
                    <div className="w-100">
                        {
                            <Table>
                                <div className="TableContainer">
                                    <table className="tableWrapper">
                                        <thead>
                                            <tr>
                                                {/* <th>ID</th> */}
                                                <th>Investor</th>
                                                <th>Phone</th>
                                                <th>Country</th>
                                                <th>Role</th>
                                                <th>Date</th>
                                                <th>Manage</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users?.map((x?: any, index?: any) => {
                                                return <TableCard x={x} type={'customerlist'} key={x?._id} />;
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
  margin: 0 auto;
  .trading_wrapper {
    width:95%;
    .input {
        min-width: 270px;
    }
     .btn {
        padding: 1rem;
    }
    .trading_card {
        width:100%;
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
export default CustomerList