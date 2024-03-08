import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import moment from "moment";
import { MdEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
type TableCardProps = {
    x?: any;
    type?: any;
}
const TableCard: React.FC<TableCardProps> = ({ x, type }) => {
    let investmentStartdate = moment(x?.startDate, 'DD/MM/YYYY').format("MMMM Do YYYY");
    let investmentEnddate = moment(x?.endDate, 'DD/MM/YYYY').format("MMMM Do YYYY");

    let userinvestmentStartdate = moment(x?.startDate).format("MMMM Do YYYY");
    let userinvestmentEnddate = moment(x?.endDate).format("MMMM Do YYYY");

    let roiStartdate = moment(x?.startDate).format("MMMM Do YYYY");
    let roiEnddate = moment(x?.endDate).format("MMMM Do YYYY");


    let roiuserStartdate = moment(x?.startDate).format("MMMM Do YYYY");
    let roiuserEnddate = moment(x?.endDate).format("MMMM Do YYYY");
    let depositdate = moment(x?.createdAt).format("MMMM Do YYYY");
    const navigate = useNavigate();
    if (type === 'transactions') {
        return (
            <>
                {/* <Delete /> */}
                <tr key={x?._id}>
                    <td>
                        <span className="fs-14 family1 text-grey">${x?.investment?.price}</span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">{x?.user?.fullname}</span>
                    </td>
                    <td>
                        <span className="fs-14 family1 tex  text-grey">{x?.paymentMethod}</span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">
                            {x?.isPaid === true ?
                                <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Completed</span>
                                : <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold false"> Not completed</span>
                            }
                        </span>
                    </td>
                    {/* <td>
                        <span className="text-grey fs-14 family1">{x?.plan}</span>
                    </td> */}
                    <td>
                        <span className="text-grey fs-14 family1 text-light">{depositdate}</span>

                    </td>

                    <td>
                        <Link to={`/account/admin/dashboard/Manage_Transaction/${x?._id}`} className="icons flex hover:shadow-sm hover:bg-white items-center justify-center">
                            <MdEdit />
                        </Link>
                    </td>
                </tr>
            </>
        );
    }
    if (type === 'usertransactions') {
        return (
            <>
                {/* <Delete /> */}
                <tr key={x?._id}>
                    <td>
                        <span className="text-grey fs-14 family1">${x?.investment?.price}</span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">{x?.user?.fullname}</span>
                    </td>
                    <td>
                        <span className="fs-14 family1 tex  text-grey">{x?.paymentMethod}</span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">
                            {x?.isPaid === true ?
                                <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Completed</span>
                                : <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold false"> Not completed</span>
                            }
                        </span>
                    </td>
                    <td>
                        <span className="text-grey fs-14 family1">{x?.investment?.tier}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-14 family1 text-light">{depositdate}</span>

                    </td>
                </tr>
            </>
        );
    }
    if (type === 'customerlist') {
        return (
            <>
                {/* <Delete /> */}
                <tr key={x?._id}>
                    {/* <td>
                        <span className="text-grey fs-14 family1">{x?._id}</span>
                    </td> */}
                    <td>
                        <div className="flex flex-col">
                            <span className="fs-14 text-dark text-bold">{x?.fullname}</span>
                            <span className="fs-14 family1 text-grey">{x?.email}</span>
                        </div>
                    </td>
                    <td>
                        <span className="fs-14 family1 tex  text-grey">{x?.phone}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-14 family1">{x?.country ? x?.country : '-'}</span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">
                            {x?.isAdmin === true ?
                                <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold false"> Admin</span>
                                : <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Client</span>
                            }
                        </span>
                    </td>

                    <td>
                        <span className="text-grey fs-14 family1 text-light">{depositdate}</span>

                    </td>
                    <td>
                       <div className="flex item-center justify-center">
                            <Link to={`/account/admin/dashboard/Manage_Customers/${x?._id}`} className="icons flex hover:shadow-sm hover:bg-white items-center justify-center">
                                <MdEdit />
                            </Link>
                            <div className="icons flex hover:shadow-sm hover:bg-white items-center justify-center">
                                <BsTrash />
                            </div>
                       </div>
                    </td>

                </tr>
            </>
        );
    }
    // userroi
    if (type === 'userinvestment') {
        return (
            <>
                {/* <Delete /> */}
                <tr key={x?._id}>
                    <td>
                        <span className="text-grey fs-14 family1">{x?.plan}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-14 family1">${x?.price}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-14 family1">{x?.tier}</span>
                    </td>
                    {/* <td>
                        <span className="fs-14 family1 text-grey">{x?.tier}</span>
                    </td> */}
                    <td>
                        <span className="fs-14 family1 text-grey">{userinvestmentStartdate !== 'Invalid date' ? userinvestmentStartdate : investmentStartdate}</span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">{userinvestmentEnddate !== 'Invalid date' ? userinvestmentEnddate :investmentEnddate}</span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">
                            {x?.isPaid === true ?
                                <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Active</span>
                                : <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold false">Incoming</span>
                            }
                        </span>
                    </td>
                    {/* <td>
                        <span className="text-grey fs-14 family1">${x?.profit}</span>
                    </td> */}
                </tr>
            </>
        );
    }

    // userroi
    if (type === 'deposit') {
        return (
            <>
                {/* <Delete /> */}
                <tr key={x?._id}>
                    <td>
                        <span className="text-grey fs-14 family1">$ {x?.investment?.price}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-14 family1">{x?.paymentMethod}</span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">
                            {x?.isPaid === true ?
                                <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Active</span>
                                : <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold false">Incoming</span>
                            }
                        </span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">{x?.plan}</span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">{depositdate}</span>
                    </td>
                   
                    {/* <td>
                        <span className="text-grey fs-14 family1">${x?.profit}</span>
                    </td> */}
                </tr>
            </>
        );
    }


    if (type === 'userwithdrawal') {
        return (
            <>
                {/* <Delete /> */}
                <tr key={x?._id}>
                    <td>
                        <span className="text-grey fs-14 family1">{x?.plan}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-14 family1">${x?.price}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-14 family1">{x?.tier}</span>
                    </td>
                    {/* <td>
                        <span className="fs-14 family1 text-grey">{x?.tier}</span>
                    </td> */}
                    <td>
                        <span className="fs-14 family1 text-grey">{userinvestmentStartdate !== 'Invalid date' ? userinvestmentStartdate : investmentStartdate}</span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">{userinvestmentEnddate !== 'Invalid date' ? userinvestmentEnddate : investmentEnddate}</span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">
                            <Link to={`/account/dashboard/investment_withdrawal/${x?._id}`}
                            
                             style={{ fontSize: "1.2rem" }} className="tablespan tablespan_withdrawal fs-10 text-bold">Request Withdrawal</Link>
                        </span>
                    </td>
                </tr>
            </>
        );
    }
    if (type === 'userroi') {
        return (
            <>
                {/* <Delete /> */}
                <tr key={x?._id}>
                    <td>
                        <span className="text-grey fs-14 family1">{x?.plan}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-14 family1">${x?.price}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-14 family1">{x?.tier}</span>
                    </td>
                    {/* <td>
                        <span className="fs-14 family1 text-grey">{x?.tier}</span>
                    </td> */}
                    <td>
                        <span className="fs-14 family1 text-grey">
                            {roiStartdate !== 'Invalid date' ? roiStartdate : investmentStartdate}
                        </span>
                    </td>k
                    <td>
                        <span className="fs-14 family1 text-grey">
                            {roiEnddate !== 'Invalid date' ? roiEnddate : investmentEnddate}
                        </span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">
                            {x?.isPaid === true ?
                                <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Active</span>
                                : <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold false">Incoming</span>
                            }
                        </span>
                    </td>
                    <td>
                        <span className="text-grey fs-14 family1">${x?.profit}</span>
                    </td>
                </tr>
            </>
        );
    }


    if (type === 'adminroi') {
        return (
            <>
                {/* <Delete /> */}
                <tr key={x?._id}>
                    <td>
                        <span className="text-dark text-bold fs-14 family1">
                            {x?.user?.fullname}
                            <span className="block fs-14 mt-2 text-light">{x?.user?.email}</span>
                        </span>
                    </td>
                    <td>
                        <span className="text-grey fs-14 family1">${x?.price}</span>
                    </td>
                    {/* <td>
                        <span className="text-grey fs-14 family1">{x?.tier}</span>
                    </td> */}
                    {/* <td>
                        <span className="fs-14 family1 text-grey">{x?.tier}</span>
                    </td> */}
                    <td>
                        <span className="fs-14 family1 text-grey">
                            {roiStartdate !== 'Invalid date' ? roiStartdate : investmentStartdate}
                        </span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">
                            {roiEnddate !== 'Invalid date' ? roiEnddate : investmentEnddate}
                        </span>
                    </td>
                    <td>
                        <span className="fs-14 family1 text-grey">
                            {x?.isPaid === true ?
                                <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Active</span>
                                : <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold false">Incoming</span>
                            }
                        </span>
                    </td>
                    <td>
                        <span className="text-grey fs-14 family1">${x?.profit}</span>
                    </td>
                </tr>
            </>
        );
    }
    return (
        <>
            {/* <Delete /> */}
            <tr key={x?._id}>
                <td>
                    <span className="fs-14 family1 text-grey">{x?.plan}</span>
                </td>
                <td>
                    <span className="text-grey fs-14 family1">$ {x?.price}</span>
                </td>

                <td>
                    <span className="text-grey fs-14 family1 text-light">Type 1</span>
                </td>
                <td>
                    <span className="text-grey fs-14 family1 text-light">{x?.date}</span>

                </td>
            </tr>
        </>
    );
}


export default TableCard