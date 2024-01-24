

import styled from "styled-components";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import React from "react";
import { FaKey, FaUser } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxtoolkit";
import { ClearUserInfo } from "@/features/auth/authSlice";
const Header = () => {
    const { userInfo } = useAppSelector(store => store.auth)

    const [active, setActive] = React.useState(false);

    const [bar, setBar] = React.useState(false);
    const isActive = () => {
        window.scrollY > 100 ? setActive(true) : setActive(false);
    };
    React.useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);
    const dispatch = useAppDispatch()


    const handleLogOut = () => {
        dispatch(ClearUserInfo("any"));
        window.location.reload();
    };
    return (

        <HeaderStyles className="w-100 flex column gap-2">
            {/* <div className="hero_navbar py-2 flex w-90 auto justify-end">
               
            </div> */}
            <div className="hero_header w-90 auto flex item-center justify-space">
                <Link to={'/'} className="fs-18 text-bold uppercase text-white">
                    OptiTrade Dynamics
                </Link>
                <div className="flex items-center gap-2">
                    {
                        userInfo ? <div className="flex item-center profile_wrapper relative gap-4">
                            <div className="profile_avatar flex item-center justify-center fs-16 text-extra-bold text-white">{userInfo?.username && userInfo?.username[0]}</div>
                            <div className="profile_dropdown absolute">
                                <div className="w-100 flex column gap-2">
                                    <div className="flex profile_dropdown_bottom column w-100">
                                        <Link to={'/account/dashboard'} className="text-bold fs-14 w-100 profile_list text-dark block">Dashboard</Link>
                                        <Link to={'/account/dashboard/profile'} className="text-bold fs-14 w-100 profile_list text-dark block">Profile</Link>
                                        <span onClick={handleLogOut} className="text-bold fs-14 w-100 profile_list text-dark block">Log Out</span>

                                    </div>
                                </div>
                            </div>

                        </div> : <div className="header_list item-center gap-6 lg:gap-32 justify-end">
                            <div className="header_list item-center gap-3 lg:gap-20 justify-end">
                                <Link to={'/'} className="fs-14 text-bold uppercase text-white">
                                    Home
                                </Link>
                                <Link to={'/about'} className="fs-14 text-bold uppercase text-white">
                                    Markets
                                </Link>
                                {/* <Link to={'/trading'} className="fs-14 text-bold uppercase text-white">
                        Trading Assets
                    </Link> */}
                                    <Link to={'/about'} className="fs-14 text-bold uppercase text-white">
                                    About Us
                                </Link>

                                    <Link to={'/faq'} className="fs-14 text-bold uppercase text-white">
                                        FAQ
                                    </Link>
                                {/* <Link to={'/documents'} className="fs-14 text-bold uppercase text-white">
                        Documents
                    </Link> */}
                                <Link to={'/contact'} className="fs-14 text-bold uppercase text-white">
                                    Contact
                                </Link>
                            </div>
                            <div className="flex item-center gap-2">
                                <Link to={'/register'} className="login_btn btn_1 fs-14 flex item-center gap-1 text-bold text-white">
                                    <FaUser />
                                    Sign Up
                                </Link>
                                <Link to={'/login'} className="login_btn fs-14 flex item-center gap-1 text-bold text-white">
                                    <FaKey />
                                    Login
                                </Link>
                            </div>
                        </div>
                    }

                    <div className="flex spam_bars items-center gap-2">
                        {
                            userInfo ? "" : <div className="flex item-center gap-2">

                                <Link to={'/login'} className="login_btn fs-14 flex item-center gap-1 text-bold text-white">
                                    <FaKey />
                                    Login
                                </Link>
                            </div>
                        }
                        <div onClick={() => setBar(!bar)} className=" text-dark">
                            {bar ? <RxCross1 fontSize={'40px'} /> : <HiOutlineBars3CenterLeft fontSize={'40px'} />}
                        </div>
                    </div>
                </div>
                <div style={{ zIndex: "200" }} className={`navbar ${bar ? 'active' : ""} flex`}>
                    <div className="w-100 flex column">
                        <Link to={'/'} className="fs-14 list text-light uppercase text-white">
                            Home
                        </Link>
                        <Link to={'/about'} className="fs-14 list text-light uppercase text-white">
                            About Us
                        </Link>
                        <Link to={'/faq'} className="fs-14 list text-light uppercase text-white">
                            FAQ
                        </Link>
                        <Link to={'/contact'} className="fs-14 list text-light uppercase text-white">
                            Contact
                        </Link>

                    </div>
                </div>
            </div>
        </HeaderStyles>
    )
}


export const HeaderStyles = styled.div`
width:100%;
position:relative;
z-index: 400000;
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

            cursor:pointer;
        }
    }
  .hero_header{
    padding: 4rem 0;
    padding-bottom: 2rem;
  }
  .header_list{
            display:flex;

       @media (max-width:880px) {
            display:none;

       }
  }
  .spam_bars{
     display:none;
         @media (max-width:880px) {
            display:flex;

         }
  }
   .hero_navbar,.hero_header,.hero_center {
    z-index:40;
    position: relative;
  }
   .navbar{
        display:none;
         @media (max-width:880px) {
            display:flex;
             height:0;
        width:100%;
        position: absolute;
        top:80%;
             box-shadow:0 2px 28px 0 rgba(0, 0, 0, 0.6);
        left:0;
        background-color: #101112;
        transition:all .4s ease;
        opacity:0;
        visibility: hidden;
        z-index:3000;
        &.active {
             height: 30.3rem;
               opacity:1;
        visibility: visible;
        }
        .list {
            padding:3rem 2rem;
        z-index:3000;

        border-bottom:1px solid rgba(0,0,0,.06);
        transition:all .3s;
        &:hover {
            background: #403b3b65;
        }
        }
        }
       
    }
      .profile_avatar {
        width:45px;
        height:45px;
        border-radius:50%;
        background:#2D2F31;
    }
     .profile_dropdown_top{
        padding:1.4rem 2rem;
    }
    .profile_list{
          padding:1.6rem 2rem;
            transition:all .3s;
            cursor:pointer;

            &:nth-last-child() {
               border-bottom:none;
            }
        &:hover {
            color:var(--blue-2);
            background: #dbd7d7;
        }
    }
`


export default Header