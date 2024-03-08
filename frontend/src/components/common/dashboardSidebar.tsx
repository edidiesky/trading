import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { TbChartHistogram } from "react-icons/tb";
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
    },

    //  {
    //      icon: <MdOutlineCurrencyExchange />,
    //      title: "Crypto Exchange",
    //      path: "asset-balance",
    //  }, 
    {
        icon: <FaCoins />,
        title: "Invest",
        path: "invest",
    },
    {
        icon: <TbChartHistogram />,
        title: "Investment History",
        path: "investment_history",
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
        title: "Manage R-O-I",
        path: "Manage_Roi",
    },
    {
        icon: <IoBriefcase />,
        title: "Manage Transaction/ Deposit",
        path: "TransactionList",
    },
    {
        icon: <TbChartHistogram />,
        title: "Investment History",
        path: "investment_history",
    },
    {
        icon: <IoBriefcase />,
        title: "Manage Customers",
        path: "Manage_Customers",
    },
    {
        icon: <FaCoins />,
        title: "Invest",
        path: "invest",
    },
];
type sidebarProps = {
    active?: boolean
}
const DashboardSidebar: React.FC<sidebarProps> = ({ active }) => {
    const { userInfo } = useAppSelector(store => store.auth)

    return (

        <HeaderStyles className={`w-100 flex column gap-2`}>
            <div className="w-full flex items-center flex-col justify-space gap-4">
                <div className="flex flex-col w-full items-start px-2 gap-4 py-1">
                    <h4 className="text-3xl font-bold uppercase text-dark">RockTrading</h4>
                    {/* <div className="hidden md:flex item-center gap-2">
                        <Link to={'/account/dashboard/deposit'} className="btn fs-12 text-bold">Fund Your Account</Link>
                        <Link to={'/account/dashboard/investment_withdrawal'} className="btn btn-2 fs-12 text-bold">Withdraw funds</Link>
                    </div> */}
                </div>
                <ul className="flex flex-col gap-1 w-100">
                    {
                        userInfo?.isAdmin ? <>
                            {
                                AdminSidebarData?.map((x) => {
                                    return (
                                        <NavLink
                                            className={({ isActive, isPending }) =>
                                                isActive ? "active fs-12 text-dark family1 uppercase text-extra-bold" : "fs-12 text-dark family1 uppercase text-extra-bold"
                                            }
                                            to={`/account/admin/dashboard/${x.path}`}
                                            end
                                        >
                                            {x.icon}

                                            {<span className="text-center lg:text-start">{x.title}</span>}
                                        </NavLink>
                                    );
                                })
                            }
                        </> : <>
                            {
                                sidebarData.map((x) => {
                                    return (
                                        <NavLink
                                            className={({ isActive, isPending }) =>
                                                isActive ? "active fs-16 text-dark family1 text-extra-bold" : "fs-16 text-dark family1 text-extra-bold"
                                            }
                                            to={`/account/dashboard/${x.path}`}
                                            end
                                        >
                                            {x.icon}

                                            {<span>{x.title}</span>}
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
    padding:2rem 1.5rem;
    width:100%;
    background:#F9F6FF;
    position:absolute;
    top:0;
    left:0;
    height:100%;
    bottom:0;
     /* border-right: 1px solid rgba(0,0,0,.1); */
     box-shadow: var(--shadow);
     a {
        padding: 20px 16px;
        font-size: 1.6rem;
        min-height: 5rem;
        font-weight: 600;
        margin: 0 auto;
        width: 100%;
        border-radius: 40px;
        color: var(--dark-1);
        display: flex;
        align-items: center;
        /* justify-content: center; */
        gap: 2rem;
        position: relative;

         @media (max-width: 1080px) {
         flex-direction: column;
         justify-content:center;
           padding:14px;
            font-size: 1.3rem;
             gap: 1rem;
        }

        &:hover {
          background: #DEF2B1;
        }
        svg {
          font-size: 2.4rem;
        }
        &.active {
          position: relative;
          background:#DEF2B1;
           svg {
            color:var(--dark-1);
          }
          /* &:after {
          position: absolute;
          background:#12db2d;
          width: 4px;
          height: 100%;
          left: 0;
          top: 0;
         
          content:"";
          } */
        }
      }
`;



export default DashboardSidebar