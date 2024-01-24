import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
            <div className="100 Header_wrapper flex item-center column justify-space gap-2">
                <h4 
                className ="fs-18 w-100 auto text-start text-bold text-dark">
                    {userInfo?.fullname}
                    <span className="block text-light family1 fs-14 mt-3 text-grey">{userInfo?.email}</span>
                    </h4>
                <ul className="flex column w-100">
                    {
                        userInfo?.isAdmin ?<>
                            {
                                AdminSidebarData?.map((x) => {
                                    return (
                                        <NavLink
                                            className={({ isActive, isPending }) =>
                                                isActive ? "active fs-16 text-dark family1 text-extra-bold" : "fs-16 text-dark family1 text-extra-bold"
                                            }
                                            to={`/account/admin/dashboard/${x.path}`}
                                            end
                                        >
                                            {x.icon}

                                            {<span>{x.title}</span>}
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
    padding:2rem 0;
    width:100%;
    background:#fff;
    position:absolute;
    top:0;
    left:0;
    height:100%;
    bottom:0;
     border-right: 1px solid rgba(0,0,0,.1);
     box-shadow: var(--shadow);

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
          background: #b9c9d11f;
        }
        svg {
          font-size: 2.4rem;
        }
        &.active {
          position: relative;
          background:#7cb3832f;
           svg {
            color:var(-grey-1);
          }
          &:after {
          position: absolute;
          background:#12db2d;
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