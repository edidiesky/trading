import React, { useState } from 'react'
import styled from "styled-components";
import { Table } from '../../components/common/styles';
import TableCard from '../../components/common/TableCard';

import { useAppDispatch, useAppSelector } from '@/hooks/reduxtoolkit';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast"
import { GetSingleRoiOfAUser } from '@/features/roi/roiReducer';
import { clearRoi } from '@/features/roi/roiSlice';

const Messages = () => {
    const { toast } = useToast()
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const {

        Roi,
    } = useAppSelector(store => store.roi)


    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        dispatch(clearRoi('any'))
        dispatch(GetSingleRoiOfAUser({Detailsdata:""}))
    }, []);

    return (
        <HistorytStyles style={{ minHeight: "100vh" }} className="w-100">
            <div className="auto py-4 trading_wrapper flex column gap-4">
                <div className="flex column gap-1">
                    <h2 className="fs-45 text-dark">
                        Your ROI history
                    </h2>
                    <span className="fs-16 w-50 family1 text-light text-grey2">
                    History of all your ROI history
                    </span>
                </div>
                <div className="trading_card w-100 flex column gap-4">
                    {
                        Roi?.length !== 0 && <div className="w-100 justify-end flex item-center">
                            <input className="input" placeholder='Search for ROI History'></input>
                        </div>
                    }
                   
                    <div className="w-100">
                        <Table>
                            <div className="TableContainer">
                                <table className="tableWrapper">
                                    <thead>
                                        <tr>
                                            <th>Plan</th>
                                            <th>Amount</th>
                                            <th>Tier</th>

                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Status</th>
                                            {/* <th>Payment Methid</th> */}
                                            {/* <th>Payment Status</th> */}
                                            <th>Profit</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Roi?.map((x?: any, index?: any) => {
                                            return <TableCard type='userroi' x={x} key={x?._id} />;
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </Table>
                    </div>
                    {
                        Roi?.length !== 0 && <div className="w-100 py-1 flex item-center justify-space">
                            <h5 className="fs-14 text-grey2 family1">
                                Showing 0 to 0 of 0 entries</h5>
                            <div className="flex item-center justify-end gap-2">
                                <button className="btn fs-14 text-white text-bold">Previous</button>
                                <button className="btn fs-14 text-white text-bold">Next</button>
                            </div>
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
export default Messages