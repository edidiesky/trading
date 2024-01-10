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
    let investmentStartdate = moment(x?.startDate).format("MMMM Do YYYY");
    let investmentEnddate = moment(x?.endDate).format("MMMM Do YYYY");
    const navigate = useNavigate();
    if (type === 'transactions') {
        return (
            <>
                {/* <Delete /> */}
                <tr key={x?._id}>
                    <td>
                        <span className="fs-12 family1 text-grey">${x?.investment?.price}</span>
                    </td>
                    <td>
                        <span className="fs-12 family1 text-grey">{x?.user?.fullname}</span>
                    </td>
                    <td>
                        <span className="fs-12 family1 tex  text-grey">{x?.paymentMethod}</span>
                    </td>
                    <td>
                        <span className="fs-12 family1 text-grey">
                            {x?.isPaid === true ?
                                <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Completed</span>
                                : <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold false"> Not completed</span>
                            }
                        </span>
                    </td>
                    <td>
                        <span className="text-grey fs-12 family1">{x?.investment?.tier}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-12 family1 text-light">04 Feb 2024</span>

                    </td>

                    <td>
                        <Link to={`/account/dashboard/Manage_Transaction/${x?._id}`} className="icons flex hover:shadow-sm hover:bg-white items-center justify-center">
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
                        <span className="text-grey fs-12 family1">${x?.investment?.price}</span>
                    </td>
                    <td>
                        <span className="fs-12 family1 text-grey">{x?.user?.fullname}</span>
                    </td>
                    <td>
                        <span className="fs-12 family1 tex  text-grey">{x?.paymentMethod}</span>
                    </td>
                    <td>
                        <span className="fs-12 family1 text-grey">
                            {x?.isPaid === true ?
                                <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Completed</span>
                                : <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold false"> Not completed</span>
                            }
                        </span>
                    </td>
                    <td>
                        <span className="text-grey fs-12 family1">{x?.investment?.tier}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-12 family1 text-light">04 Feb 2024</span>

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
                    <td>
                        <span className="text-grey fs-12 family1">{x?._id}</span>
                    </td>
                    <td>
                        <div className="flex flex-col">
                            <span className="fs-14 text-dark text-bold">{x?.fullname}</span>
                            <span className="fs-12 family1 text-grey">{x?.email}</span>
                        </div>
                    </td>
                    <td>
                        <span className="fs-12 family1 tex  text-grey">{x?.phone}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-12 family1">{x?.country ? x?.country : '-'}</span>
                    </td>
                    <td>
                        <span className="fs-12 family1 text-grey">
                            {x?.isAdmin === true ?
                                <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Admin</span>
                                : <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Customer</span>
                            }
                        </span>
                    </td>

                    <td>
                        <span className="text-grey fs-12 family1 text-light">04 Feb 2024</span>

                    </td>
                    <td>
                        <Link to={`/account/dashboard/Manage_Customers/${x?._id}`} className="icons flex hover:shadow-sm hover:bg-white items-center justify-center">
                            <MdEdit />
                        </Link>
                    </td>
                </tr>
            </>
        );
    }
    if (type === 'userinvestment') {
        return (
            <>
                {/* <Delete /> */}
                <tr key={x?._id}>
                    <td>
                        <span className="text-grey fs-12 family1">{x?.plan}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-12 family1">${x?.price}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-12 family1">{x?.tier}</span>
                    </td>
                    {/* <td>
                        <span className="fs-12 family1 text-grey">{x?.tier}</span>
                    </td> */}
                    <td>
                        <span className="fs-12 family1 text-grey">{investmentStartdate}</span>
                    </td>
                    <td>
                        <span className="fs-12 family1 text-grey">{investmentEnddate}</span>
                    </td>
                    <td>
                        <span className="fs-12 family1 text-grey">
                            {x?.isPaid === true ?
                                <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Active</span>
                                : <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold false">Incoming</span>
                            }
                        </span>
                    </td>
                    <td>
                        <span className="text-grey fs-12 family1">${x?.profit}</span>
                    </td>
                    <td>
                        <span style={{gap:"5px"}} className="text-grey w-100 flex fs-12 family1">
                            <div style={{ padding: "1rem" }} className="btn btn-1 fs-12 family1">View</div>
                            {

                                x?.isPaid !== false && <div style={{ padding: "1rem" }} className="btn fs-12 family1">Make Payment</div>
                            }
                        </span>
                    </td>
                </tr>
            </>
        );
    }

    if (type === 'deposit') {
        return (
            <>
                {/* <Delete /> */}
                <tr key={x?._id}>
                    <td>
                        <span className="text-grey fs-12 family1">${x?.amount}</span>
                    </td>
                    {/* <td>
                        <span className="fs-12 family1 text-grey">{x?.user?.fullname}</span>
                    </td> */}
                    <td>
                        <span className="fs-12 family1 tex  text-grey">{x?.paymentMethod}</span>
                    </td>
                    <td>
                        <span className="fs-12 family1 text-grey">
                            {x?.status === "true" ?
                                <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Completed</span>
                                : <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold false"> Not completed</span>
                            }
                        </span>
                    </td>
                    <td>
                        <span className="text-grey fs-12 family1">{x?.plan}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-12 family1 text-light">04 Feb 2024</span>

                    </td>
                </tr>
            </>
        );
    }

    if (type === 'adminDepositList') {
        return (
            <>
                {/* <Delete /> */}
                <tr key={x?._id}>
                    {/* <td>
                        <span className="text-grey fs-12 family1">{x?._id}</span>
                    </td> */}
                    <td>
                        <div className="flex flex-col">
                            <span className="fs-14 text-dark text-bold">{x?.user?.fullname}</span>
                            <span className="fs-12 family1 text-grey">{x?.user?.email}</span>
                        </div>
                    </td>
                   
                    {/* <td>
                        <span className="fs-12 family1 text-grey">
                            {x?.isAdmin === true ?
                                <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Admin</span>
                                : <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Customer</span>
                            }
                        </span>
                    </td> */}
                    <td>
                        <span className="text-grey fs-12 family1">${x?.amount}</span>
                    </td>
                    {/* <td>
                        <span className="fs-12 family1 text-grey">{x?.user?.fullname}</span>
                    </td> */}
                    <td>
                        <span className="fs-12 family1 tex  text-grey">{x?.paymentMethod}</span>
                    </td>
                    <td>
                        <span className="fs-12 family1 text-grey">
                            {x?.status === "true" ?
                                <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold true"> Completed</span>
                                : <span style={{ fontSize: "1.2rem" }} className="tablespan fs-10 text-bold false"> Not completed</span>
                            }
                        </span>
                    </td>
                    <td>
                        <span className="text-grey fs-12 family1">{x?.plan}</span>
                    </td>

                    <td>
                        <span className="text-grey fs-12 family1 text-light">04 Feb 2024</span>

                    </td>
                    <td>
                        <Link to={`/account/dashboard/deposit_list/${x?._id}`} className="icons flex hover:shadow-sm hover:bg-white items-center justify-center">
                            <MdEdit />
                        </Link>
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
                    <span className="fs-12 family1 text-grey">{x?.plan}</span>
                </td>
                <td>
                    <span className="text-grey fs-12 family1">$ {x?.price}</span>
                </td>

                <td>
                    <span className="text-grey fs-12 family1 text-light">Type 1</span>
                </td>
                <td>
                    <span className="text-grey fs-12 family1 text-light">{x?.date}</span>

                </td>
            </tr>
        </>
    );
}


export default TableCard