import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { FaCoins } from "react-icons/fa";
import { SlSupport } from "react-icons/sl";
import { FaHouse } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";
import { useAppSelector } from "@/hooks/reduxtoolkit";
 const sidebarData = [
    {
        icon: <FaHouse />,
        title: "Dashboard",
        path: "",
    },
    {
        icon: <IoMdStats />,
        title: "Profit Record",
        path: "tradinghistory",
    },
    {
        icon: <IoBriefcase />,
        title: "Transaction History",
        path: "accounthistory",
    }, {
        icon: <MdOutlineCurrencyExchange />,
        title: "Crypto Exchange",
        path: "asset-balance",
    }, {
        icon: <FaCoins />,
        title: "Invest",
        path: "students",
    },
    {
        icon: <SlSupport />,
        title: "Help/Support ",
        path: "support",
    },
];
const AdminSidebarData = [
    {
        icon: <FaHouse />,
        title: "Dashboard",
        path: "",
    },
    {
        icon: <IoMdStats />,
        title: "Manage Profit",
        path: "Manage_Profit",
    },
    {
        icon: <IoBriefcase />,
        title: "Manage Transaction",
        path: "TransactionList",
    }, 

    {
        icon: <IoBriefcase />,
        title: "Manage Customers",
        path: "Manage_Customers",
    }, 
    {
        icon: <FaCoins />,
        title: "Invest",
        path: "students",
    },
    {
        icon: <SlSupport />,
        title: "Help/Support ",
        path: "support",
    },
];
type sidebarProps = {
    active?: boolean
}
const DashboardSidebar: React.FC<sidebarProps> = ({ active }) => {
    const { userInfo } = useAppSelector(store => store.auth)

    return (

        <HeaderStyles className={`w-100 flex column gap-2`}>
            <div className="100 Header_wrapper flex item-center column justify-space gap-2">
                <h4 
                className ="fs-16 w-100 auto text-start text-bold text-dark">
                    {userInfo?.fullname}</h4>
                <ul className="flex column w-100">
                    {
                        userInfo?.isAdmin ?<>
                            {
                                AdminSidebarData?.map((x) => {
                                    return (
                                        <NavLink
                                            className={({ isActive, isPending }) =>
                                                isActive ? "active fs-16 text-dark text-extra-bold" : "fs-16 text-dark text-extra-bold"
                                            }
                                            to={`/account/dashboard/${x.path}`}
                                            end
                                        >
                                            {x.icon}

                                            {<span className='text-grey2'>{x.title}</span>}
                                        </NavLink>
                                    );
                                })
                            } 
                        </>: <>
                                {
                                    sidebarData.map((x) => {
                                        return (
                                            <NavLink
                                                className={({ isActive, isPending }) =>
                                                    isActive ? "active fs-16 text-dark text-extra-bold" : "fs-16 text-dark text-extra-bold"
                                                }
                                                to={`/account/dashboard/${x.path}`}
                                                end
                                            >
                                                {x.icon}

                                                {<span className='text-grey2'>{x.title}</span>}
                                            </NavLink>
                                        );
                                    })
                                }
                        </>
                    }
                   
                </ul>
            </div>
        </HeaderStyles>
    )
}


export const HeaderStyles = styled.div`
    padding:2rem 0;
    width:100%;
    background:#fff;
    position:absolute;
    top:0;
    left:0;
    height:100%;
    bottom:0;
   h4 {
     padding: 10px 40px;
     border-bottom: 1px solid rgba(0,0,0,.1);
   }

     a {
        padding: 20px 40px;
        font-size: 1.5rem;
        min-height: 5rem;
        font-weight: 500;
        margin: 0 auto;
        width: 100%;
        color: var(--dark-1);
        display: flex;
        align-items: center;
        /* justify-content: center; */
        gap: 2rem;
        position: relative;

        &:hover {
          background: #315d7214;
        }
        svg {
          font-size: 2.4rem;
        }
        &.active {
          position: relative;
          background:#315d7214;
           svg {
            color:#5624d0;
          }
          &:after {
          position: absolute;
          background:var(--blue-3);
          width: 4px;
          height: 100%;
          left: 0;
          top: 0;
         
          content:"";
          }
        }
      }
`;



export default DashboardSidebar