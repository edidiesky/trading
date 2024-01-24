

import { Link } from "react-router-dom";
import styled from "styled-components";

const footer_data_1 = [
    {
        title: "Markets",
        list: [
            'Home',
            'Register',
            'About Us',
            'Login',
            'Contact',
        ]
    },
    {
        title: "Resources",
        list: [
            'Terms & Conditions',
            'Privacy & Policy',
            'Trading Assets',
            'Payment Policy',
            'FAQ',
        ]
    },
    {
        title: "Contact Us",
        list: [
            'support@apex-financetrade.com'
        ]
    }
]
const Footer = () => {
    return (
        <FooterStyles className="w-100 flex column gap-4">
            <div className="w-90 auto footer_wrapper">
                <div className="w-100 flex column gap-3">
                    <h3 className="fs-24 text-extra-bold text-dark">OptiTrade Dynamics
                        <span className="block fs-18 mt-3 text">Trade with financial thinking.</span>
                    </h3>
                    <div className="flex column gap-1 text text-bold">
                        <span className="text-[15px] family1">Imperium Tower (Headquarters)</span>
                        <span className="text-[15px] family1">Jl. Prof Dr Satrio, Kuningan</span>
                        <span className="text-[15px] family1">12920</span>
                        <span className="text-[15px] family1">Jakarta - Indonesia</span>
                    </div>
                </div>
                <div className="footer_left_wrapper w-100">
                    {
                        footer_data_1.map((x?: any, index?: any) => {
                            return <div key={index} className="flex column gap-3 text-light text">
                                <h4 className="fs-20 text-extra-bold family1 text-dark">{x?.title}</h4>
                                <span className="text-[15px] family1 flex column gap-1 text-bold">
                                    {
                                        x?.list.map((x?: any) => {
                                            return <Link to={'/'} className="text-grey2">{x}</Link>
                                        })
                                    }
                                </span>
                            </div>
                        })
                    }


                </div>
            </div>
            <div className="w-90 border-b pb-16 border-[rgba(0,0,0,.1)] auto flex item-center justify-space gap-1">
                {/* <img style={{ width: "100px" }} src="https://metacorepoint.com/img/logo_light.png" alt="" className="" /> */}
                <h5 className="text-[13px] family1 leading-[1.8] text-bold text-grey2">
                    The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products.
                    Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage.
                    As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital.
                    You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered,
                    please be sure to understand the risks involved and learn about <span className="text-blue text-extra-bold">Secure and responsible trading</span>.


                </h5>
            </div>
            <div className="w-90 auto flex item-center justify-space gap-1">
                {/* <img style={{ width: "100px" }} src="https://metacorepoint.com/img/logo_light.png" alt="" className="" /> */}
                <h5 className="fs-14 family1 text-light text">
                    © Copyrights 2024. All rights reserved.
                </h5>
            </div>
        </FooterStyles>
    )
}


export const FooterStyles = styled.div`
    padding:8rem 0;
    width:100%;
    padding-bottom: 3rem;
    background:#F8F8F8;
   .footer_wrapper {
    display: grid;
    grid-gap: 5rem;
    padding:0 1rem;

    grid-template-columns: 40% 1fr;
    place-items:flex-start;
    /* padding-bottom:2rem; */
    border-bottom:2px solid rgba(255,255,255,.1);
    @media (max-width:780px) {
    grid-template-columns: 1fr;
    padding:0 2rem;


    }
    a {
        &:hover {
            text-decoration: underline;
        }
    }
    .footer_left_wrapper {
    display: grid;
    grid-gap:2rem;
    grid-template-columns: repeat(auto-fit,minmax(120px, 1fr));
    @media (max-width:780px) {
    grid-template-columns: 1fr;

    }
    }
   }

`;



export default Footer