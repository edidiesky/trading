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
    let createddate = moment(x?.createdAt).format("MMMM Do YYYY");
    const navigate = useNavigate();
    return (
        <>
            {/* <Delete /> */}
            <tr key={x?._id}>
                <td>
                   <span className="fs-14 text-dark family1">{x?.plan}</span>
                </td>
                <td>
                    <span className="text-dark family1 fs-14">$ {x?.price}</span>
                </td>

                <td>
                    <span className="text-dark family1 fs-14 text-light">Type 1</span>
                </td>
                <td>
                    <span className="text-dark family1 fs-14 text-light">{x?.date}</span>

                </td>
            </tr>
        </>
    );
}


export default TableCard