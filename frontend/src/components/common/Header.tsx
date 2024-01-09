

import styled from "styled-components";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import React from "react";
const Header = () => {
    let cart = []
    let userInfo = true
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
    return (

        <HeaderStyles className="w-100 flex column gap-2">
            <div className="hero_header w-90 auto flex item-center justify-space">
                <img className="w-[100px] md:w-[130px]" src="https://metacorepoint.com/img/logo_light.png" alt="" />
                <div className="header_list item-center gap-3 lg:gap-24 justify-end">
                    <Link to={'/'} className="fs-16 text-bold uppercase text-white">
                        Home
                    </Link>
                    <Link to={'/about'} className="fs-16 text-bold uppercase text-white">
                        About Us
                    </Link><Link to={'/trading'} className="fs-16 text-bold uppercase text-white">
                        Trading Assets
                    </Link><Link to={'/faq'} className="fs-16 text-bold uppercase text-white">
                        FAQ
                    </Link><Link to={'/documents'} className="fs-16 text-bold uppercase text-white">
                        Documents
                    </Link>
                    <Link to={'/contact'} className="fs-16 text-bold uppercase text-white">
                        Contact
                    </Link>
                </div>
                <div onClick={() => setBar(!bar)} className="spam_bars text-dark">
                    {bar ? <RxCross1 fontSize={'40px'} /> : <HiOutlineBars3CenterLeft fontSize={'40px'} />}
                </div>
                <div style={{zIndex:"200"}} className={`navbar ${bar ? 'active' : ""} flex`}>
                    <div className="w-100 flex column">
                        <Link to={'/'} className="fs-16 list text-light uppercase text-white">
                            Home
                        </Link>
                        <Link to={'/about'} className="fs-16 list text-light uppercase text-white">
                            About Us
                        </Link><Link to={'/trading'} className="fs-16 list text-light uppercase text-white">
                            Trading Assets
                        </Link><Link to={'/faq'} className="fs-16 list text-light uppercase text-white">
                            FAQ
                        </Link><Link to={'/documents'} className="fs-16 list text-light uppercase text-white">
                            Documents
                        </Link>
                        <Link to={'/contact'} className="fs-16 list text-light uppercase text-white">
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
  .hero_header{
    border-bottom: 1px solid rgba(255,255,255,.5);
    padding-bottom: 4rem;
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
   .navbar{
        display:none;
         @media (max-width:880px) {
            display:flex;
             height:0;
        width:100%;
        position: absolute;
        top:60%;
             box-shadow:0 2px 28px 0 rgba(0, 0, 0, 0.6);
        left:0;
        background-color: #101112;
        transition:all .4s ease;
        opacity:0;
        visibility: hidden;
        z-index:3000;
        &.active {
             height: 51.3rem;
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
`


export default Header