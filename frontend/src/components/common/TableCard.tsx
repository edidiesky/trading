import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import moment from "moment";
import { MdEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import Rating from "./Rating";
type TableCardProps = {
    x?: any;
    type?: any;
}
const TableCard: React.FC<TableCardProps> = ({ x, type }) => {
    let createddate = moment(x?.paidAt).format("MMMM Do YYYY");
    const navigate = useNavigate();
    if (type === 'transactions') {
        return (
            <>
                {/* <Delete /> */}
                <tr key={x?._id}>
                    <td>
                        <span className="fs-12 text-grey">{x?.investment?.plan}</span>
                    </td>
                    <td>
                        <span className="fs-12 text-grey">{x?.user?.fullname}</span>
                    </td>
                    <td>
                        <span className="fs-12 tex  t-grey">{x?.paymentMethod}</span>
                    </td>
                    <td>
                        <span className="fs-12 text-grey">{x?.paymentMethod}</span>
                    </td>
                    <td>
                        <span className="text-grey fs-12">$ {x?.investment?.price}</span>
                    </td>

                    <td>
                        <span className="text-grey fs-12 text-light">Type 1</span>
                    </td>
                    <td>
                        <span className="text-grey fs-12 text-light">04 Feb 2024</span>

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
    return (
        <>
            {/* <Delete /> */}
            <tr key={x?._id}>
                <td>
                    <span className="fs-12 text-grey">{x?.plan}</span>
                </td>
                <td>
                    <span className="text-grey fs-12">$ {x?.price}</span>
                </td>

                <td>
                    <span className="text-grey fs-12 text-light">Type 1</span>
                </td>
                <td>
                    <span className="text-grey fs-12 text-light">{x?.date}</span>

                </td>
            </tr>
        </>
    );
}


export default TableCard