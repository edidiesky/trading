import styled from 'styled-components'
import { FaChartLine } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
const NewsLetter = () => {

    return (
        <NewsLetterStyles className="w-100 flex flex-col gap-12">
           <div className="w-90 auto flex column gap-20">
                <div className="auto w-[75%]  grid grid-cols-1 md:grid-cols-3 items-center justify-center">
                    <div className="p-4 w-100 flex items-start flex-col gap-2 py-4 lg:py-0 border-b lg:border-b-0 border-r-0 lg:border-r border-[rgba(0,0,0,.1)]">
                        <div className="flex items-center gap-2">
                            <FaEdit color={'#C89B42'} fontSize={'30px'} />
                            <h4 className="fs-24 font-bold">Register</h4>
                        </div>
                        <h5 className="text-[17px] leading-[1.5] font-medium text-grey">
                            Fill in your personal details in our secure online application.
                        </h5>
                    </div>
                    <div className="p-4  lg:pl-24 w-100 flex items-start  flex-col gap-2 py-4 lg:py-0 border-b lg:border-b-0 pb-0 border-r-0 lg:border-r border-[rgba(0,0,0,.1)]">
                        <div className="flex items-center gap-2">
                            <BsCash fontSize={'30px'} color={'#C89B42'} />
                            <h4 className="fs-24 font-bold">Deposit</h4>
                        </div>
                        <h5 className="text-[17px] leading-[1.5] font-medium text-grey">
                            Make a deposit via debit card, wire transfer, eCheck or check
                        </h5>
                    </div>
                    <div className="p-4 lg:pl-24 w-100 flex items-start py-4 lg:py-0 border-b lg:border-b-0 border-r-0 flex-col gap-2 ">
                        <div className="flex items-center gap-2">
                            <FaChartLine fontSize={'30px'} color={'#C89B42'} />
                            <h4 className="fs-24 font-bold">
                                Trading</h4>
                        </div>
                        <h5 className="text-[17px] leading-[1.5] font-medium text-grey">
                            Once your approved, you can trade on desktop and mobile.
                        </h5>
                    </div>
                </div>
                <div className="auto w-[85%] mt-12 rounded-2xl flex flex-col gap-2 border py-4 relative border-[#C89B42]">
                    <span className="absolute top-[-8%] left-[10%] p-4 bg-[#C89B42] text-[12px] rounded-full font-medium text-white">OPEN YOUR ACCOUNT</span>
                    <div className="w-90 auto flex flex-col gap-3">
                        <h4 className="text-[17px] text-grey font-medium">
                            Connect with over 5 millions investors in the world’s leading social investment network
                        </h4>
                        <div className="w-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
                            <input type="text" placeholder='Full Name' className="input" />
                            <input type="text" placeholder='Email Address' className="input" />
                            <input type="text" placeholder='Phone Number' className="input" />
                            <button className="btn btn-2 fs-16 font-bold">Create Account</button>
                        </div>
                    </div>
                </div>
           </div>
        </NewsLetterStyles>
    )
}
const NewsLetterStyles = styled.div`
   padding: 6rem 0;
   gap:6rem;
`


export default NewsLetter