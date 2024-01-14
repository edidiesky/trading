

import styled from "styled-components";

const footer_data_1 = [
    {
        title: "Useful Links",
        list: [
            'Home',
            'Register',
            'About Us',
            'Login',
            'Contact',
        ]
    },
    {
        title: "Documents",
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
                    <img style={{ width: "100px" }} src="https://metacorepoint.com/img/logo_light.png" alt="" className="" />
                    <h4 className="fs-18 text-light leading-[1.7] text-white">
                        Our goal is to prioritise a seamless customer service experience to our customers, who are paramount to our business. We are committed to offering our clients a reliable and secure service so as to build a complete financial portfolio that empowers them to achieve financial freedom.
                    </h4>
                </div>
                <div className="footer_left_wrapper w-100">
                    {
                        footer_data_1.map((x?: any, index?: any) => {
                            return <div key={index} className="flex column gap-3 text-light text-white">
                                <h4 className="fs-18 family1">{x?.title}</h4>
                                <span className="fs-14 flex column gap-2 text-light">
                                    {
                                        x?.list.map((x?: any) => {
                                            return <span className="text-grey2">{x}</span>
                                        })
                                    }
                                </span>
                            </div>
                        })
                    }


                </div>
            </div>
            <div className="w-90 auto flex item-center justify-space gap-1">
                {/* <img style={{ width: "100px" }} src="https://metacorepoint.com/img/logo_light.png" alt="" className="" /> */}
                <h5 className="fs-14 text-light text-white">
                    © Copyrights 2024. All rights reserved.
                </h5>
            </div>
        </FooterStyles>
    )
}


export const FooterStyles = styled.div`
    padding:12rem 0;
    width:100%;
    background:#0A3041;
   .footer_wrapper {
    display: grid;
    grid-gap: 5rem;
    padding:0 1rem;

    grid-template-columns: 40% 1fr;
    place-items:flex-start;
    padding-bottom:6rem;
    border-bottom:2px solid rgba(255,255,255,.1);
    @media (max-width:780px) {
    grid-template-columns: 1fr;
    padding:0 2rem;


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