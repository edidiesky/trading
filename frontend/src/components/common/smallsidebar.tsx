import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../hooks/reduxtoolkit';
import { TbChartHistogram } from "react-icons/tb";
import { IoMdStats } from "react-icons/io";
import { FaCoins } from "react-icons/fa";
import { SlSupport } from "react-icons/sl";
import { FaHouse } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";

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
    // {
    //     icon: <SlSupport />,
    //     title: "Help/Support ",
    //     path: "support",
    // },
];

type SidebarProps = {
    sidebar: boolean,
    setSidebar: (val: boolean) => void;
}

const SmallSidebar: React.FC<SidebarProps> = ({ sidebar, setSidebar }) => {
    const { userInfo } = useAppSelector(store => store.auth)

    return (
        <>
            <SmallSidebarStyles className={sidebar ? "active" : ""}>
                <div onClick={() => setSidebar(false)} className={sidebar ? "backdrop active" : "backdrop"}></div>

                <div className={sidebar ? "sidebarWrapper active" : "sidebarWrapper"}>
                    <div className="flex column leftwrapper auto gap-1">
                        <ul className="flex column w-100">
                            {
                                userInfo?.isAdmin ? <>
                                    {
                                        AdminSidebarData?.map((x) => {
                                            return (
                                                <NavLink
                                                    onClick={() => setSidebar(false)}
                                                    className={({ isActive, isPending }) =>
                                                        isActive ? "active fs-18 text-dark family1 text-extra-bold" : "fs-18 text-dark family1 text-extra-bold"
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
                                </> : <>
                                    {
                                        sidebarData.map((x) => {
                                            return (
                                                <NavLink
                                                    onClick={() => setSidebar(false)}
                                                    className={({ isActive, isPending }) =>
                                                        isActive ? "active fs-18 text-dark family1 text-extra-bold" : "fs-18 text-dark family1 text-extra-bold"
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
                </div>

            </SmallSidebarStyles>
        </>

    )
}

const SmallSidebarStyles = styled.div`
   width: 100vw;
    height: 100vh;
    overflow:hidden;
   position: fixed;
    z-index:400000;
    transition: all .5s ease;
    opacity: 0;
    visibility: hidden;
     @media (min-width:780px) { 
     display:none;
    }
    &.active {
        opacity: 1;
        visibility: visible;
    }

  .sidebarWrapper {
     width: 350px;
    height: 100vh;
    overflow:auto;
    background-color: #000;
    z-index:200;
    position: relative;
    transition: all .6s ease;
    transform: translateX(-100%);
    &.active {
    transform: translateX(0%);

    }
    @media (max-width:380px) { 
     width: 80%;
    }
     @media (max-width:350px) { 
     width: 90%;
    }

  }
   .backdrop {
    background: var(--backdrop);
    position: absolute;
    height: 100%;
    width: 100%;
    z-index:100;
     opacity: 0;
    visibility: hidden;
    &.active {
        opacity: 1;
        visibility: visible;
    }

  }


  a {
        padding: 20px 40px;
        font-size: 15px;
        min-height: 5.5rem;
        font-weight: 500;
        margin: 0 auto;
        width: 100%;
        color: #fff;
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
          background:#b9c9d11f;
           svg {
            color:#beb1df;
          }
          &:after {
          position: absolute;
          background:#b9c9d1ea;
          width: 4px;
          height: 100%;
          left: 0;
          top: 0;
         
          content:"";
          }
        }
      }
    .leftwrapper {
        height: 100vh;
   position: sticky;
   top: 0%;
   left:0;
    position:relative;
    }
`

export default SmallSidebar