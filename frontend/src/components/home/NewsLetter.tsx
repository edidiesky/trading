import styled from 'styled-components'
import { FaChartLine } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
const NewsLetter = () => {

    return (
        <NewsLetterStyles className="w-100 flex flex-col gap-4">
            <div className="auto w-[85%] lg:w-[70%]  grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
                <div className="p-4 pt-4 w-100 flex items-start flex-col gap-2  border-b lg:border-b-0 pb-0 border-r-0 lg:border-r border-[rgba(0,0,0,.1)]">
                    <div className="flex items-center gap-2">
                        <FaEdit color={'#C89B42'} fontSize={'30px'} />
                        <h4 className="fs-24 font-bold">Register</h4>
                    </div>
                    <h5 className="text-[17px] leading-[1.5] font-medium text-grey">
                        Fill in your personal details in our secure online application.
                    </h5>
                </div>
                <div className="p-4  lg:pl-24 pt-4 w-100 flex items-start  flex-col gap-2 border-b lg:border-b-0 pb-0 border-r-0 lg:border-r border-[rgba(0,0,0,.1)]">
                    <div className="flex items-center gap-2">
                        <BsCash fontSize={'30px'} color={'#C89B42'} />
                        <h4 className="fs-24 font-bold">Deposit</h4>
                    </div>
                    <h5 className="text-[17px] leading-[1.5] font-medium text-grey">
                        Make a deposit via debit card, wire transfer, eCheck or check
                    </h5>
                </div>
                <div className="p-4 lg:pl-24 pt-4 w-100 flex items-start  border-b lg:border-b-0 pb-0 border-r-0 flex-col gap-2 ">
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
            <div className="auto w-[85%] lg:w-[70%] rounded-2xl border py-4 px-12 relative border-[#C89B42]">
                <h4 className="text-[17px] text-grey font-medium">
                    Connect with over 5 millions investors in the world’s leading social investment network
                </h4>
            </div>
        </NewsLetterStyles>
    )
}
const NewsLetterStyles = styled.div`
   padding: 6rem 0;
`


export default NewsLetter