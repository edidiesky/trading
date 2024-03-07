import React, { useState } from 'react'
import styled from "styled-components";
import { Table } from '@/components/common/styles';
import TableCard from '@/components/common/TableCard';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxtoolkit';
import { GetSingleInvestmentOfAUser, getAllInvestments } from '@/features/investments/investmentReducer';
import LoaderIndex from '@/components/loaders';

const InvestmentHistory = () => {
    const dispatch = useAppDispatch()
    const { investments, investmentisLoading } = useAppSelector(store => store.investments)

    // deposits
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        dispatch(getAllInvestments())
    }, []);
    return (
        <HistorytStyles style={{ minHeight: "100vh" }} className="w-100">
            {
                investmentisLoading && <LoaderIndex />
            }
            <div className="auto py-4 trading_wrapper flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="fs-45 text-dark">
                      Customers Investments
                    </h2>
                    <span className="fs-16 w-50 family1 text-light text-grey2">
                        My summary of all your customers investments
                    </span>
                </div>
                <div className="flex flex-col">
                    <div className="trading_card w-100 flex column gap-4">
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
                                            <th>Status</th>
                                            {/* <th>Returns</th>
                                            <th>Actions</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {investments?.map((x?: any, index?: any) => {
                                            return <TableCard type={'userinvestment'} x={x} key={x?._id} />;
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </Table>
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
        min-width: 300px;
    }
     .btn {
        padding: 1rem;
    }
    .btn.btn-4 {
        padding:1.6rem 3rem;
        min-width:300px;
        background-color: #c2c0c079;
        border:2px solid #fff;
        &.active {
             background-color: #Fff;
        }
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
export default InvestmentHistory