

import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
import Image from "./Image";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxtoolkit";
import { ClearUserInfo } from "@/features/auth/authSlice";

const DashboardHeader = () => {
    const { userInfo } = useAppSelector(store => store.auth)
    const dispatch = useAppDispatch()


    const handleLogOut = () => {
        dispatch(ClearUserInfo("any"));
        window.location.reload();
    };
    return (

        <HeaderStyles className="w-100 flex items-start lg:items-center column gap-2">
            <div className="Header_wrapper auto flex item-center justify-space">
                <div className="flex item-center gap-4">
                    <h4 className="fs-20 family1 text-white">OptiTrade Dynamics</h4>
                    <div className="hidden md:flex item-center gap-2">
                        <Link to={'/account/dashboard/deposit'} className="btn fs-12 text-bold">Fund Your Account</Link>
                        <button className="btn btn-2 fs-12 text-bold">Withdraw funds</button>
                    </div>
                </div>
                <div className="flex item-center gap-2">
                    <div className="flex item-center profile_wrapper relative gap-4">
                        <div className="profile_avatar flex item-center justify-center fs-16 text-extra-bold text-white">{userInfo?.username && userInfo?.username[0]}</div>
                        <div className="profile_dropdown absolute">
                            <div className="w-100 flex column gap-2">
                                <div className="flex profile_dropdown_bottom column w-100">
                                    <Link to={'/account/dashboard/profile'} className="text-bold fs-14 w-100 profile_list text-dark block">Profile</Link>
                                    <span onClick={handleLogOut} className="text-bold fs-14 w-100 profile_list text-dark block">Log Out</span>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="Header_wrapper flex auto md:hidden header_bottom item-center gap-2">
                <Link to={'/account/dashboard/deposit'} className="btn fs-12 text-bold">Fund Your Account</Link>
                <button className="btn btn-2 fs-12 text-bold">Withdraw funds</button>
            </div>
        </HeaderStyles>
    )
}


export const HeaderStyles = styled.div`
    padding:1rem 0;
    width:100%;
    background:#D48574;
    z-index:200;
    min-height:8rem;
    .btn {
        padding: 1rem 2rem !important;
    }
    .header_bottom{

    }
    /* overflow:hidden; */
    .Header_wrapper{
        gap:2rem;
        width:95%;
    }
    .cart_icon{
        cursor:pointer;
    }
    .profile_avatar {
        width:45px;
        height:45px;
        border-radius:50%;
        background:#2D2F31;
    }
    .profile_dropdown_top{
        padding:1.4rem 2rem;
        border-bottom:1px solid rgba(0,0,0,.1);
    }
    /* .profile_dropdown_bottom{
        padding:1rem 0;

    } */
    .profile_list{
          padding:1.6rem 2rem;
        border-bottom:1px solid rgba(0,0,0,.1);
            transition:all .3s;
            cursor:pointer;

            &:nth-last-child() {
               border-bottom:none;
            }
        &:hover {
            color:var(--blue-2);
            background: #c6c4c4;
        }
    }
    .profile_avatar_large {
    width:70px;
        height:70px;
        border-radius:50%;
        background:#2D2F31;
    }

    h5 {
        @media (max-width:780px) {
            display:none;
        }
    }
        .profile_wrapper:hover  .profile_dropdown {
            opacity:1;
            transform:scale(1);
            visibility: visible;
        }
    .profile_dropdown{
        width:200px;
         opacity:0;
        transform:scale(0.8);
        transition:all .3s;
        visibility:hidden;
        box-shadow:0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08);
        z-index:220;
        background:#fff;
        top:100%;
        right:0%;
        .profile_card{
            padding:1.7rem 1.5rem;
            border-bottom:1px solid rgba(0,0,0,.1);
            cursor:pointer;
        }
    }
  
    .form_input {
        border:1px solid rgba(0,0,0,.5);
        padding:1.5rem 3rem;
        background-color: var(--grey-3);
        border-radius:40px;
    }
`;



export default DashboardHeader