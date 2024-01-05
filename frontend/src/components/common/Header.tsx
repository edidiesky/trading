

import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
const Header = () => {
    let cart = []
    let userInfo = true
    return (

        <HeaderStyles className="w-100 flex column gap-2">
        </HeaderStyles>
    )
}


export const HeaderStyles = styled.div`
    padding:2rem 0;
    width:100%;
    background:#fff;
    box-shadow:0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08);
    z-index:200;
    /* overflow:hidden; */
    .Header_wrapper{
        gap:2rem;
    }
    .cart_icon{
        cursor:pointer;
    }
    .profile_avatar {
        width:35px;
        height:35px;
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
          padding:.7rem 2rem;
        border-bottom:1px solid rgba(0,0,0,.1);
            transition:all .3s;
            cursor:pointer;

            &:nth-last-child() {
               border-bottom:none;
            }
        &:hover {
            color:var(--blue-2);
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
        width:300px;
         opacity:0;
            transform:scale(0.8);
            transition:all .3s;
            visibility:hidden;
        box-shadow:0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08);
        z-index:220;
        background:#fff;
        padding:1rem 0;
        top:170%;
        right:0%;
        .profile_card{
            padding:1.7rem 1.5rem;
            border-bottom:1px solid rgba(0,0,0,.1);
            cursor:pointer;
        }
    }
    .cart_wrapper:hover  .cart_dropdown {
            opacity:1;
            transform:scale(1);
            visibility: visible;
        }
    .cart_dropdown{
        width:300px;
         opacity:0;
            transform:scale(0.8);
            transition:all .3s;
            visibility:hidden;
        box-shadow:0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08);
        z-index:220;
        background:#fff;
        padding:1rem 0;
        top:200%;
        right:40%;
        .cart_card{
            padding:1.7rem 1.5rem;
            border-bottom:1px solid rgba(0,0,0,.1);
        }
    }
    .form_input {
        border:1px solid rgba(0,0,0,.5);
        padding:1.5rem 3rem;
        background-color: var(--grey-3);
        border-radius:40px;
    }
`;



export default Header