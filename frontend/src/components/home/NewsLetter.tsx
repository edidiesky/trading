import styled from 'styled-components'
import { FaChartLine } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
const NewsLetter = () => {

    return (
        <NewsLetterStyles className="w-100">
            <div className="auto w-[70%] flex items-center justify-center">
                <div className="p-4 py-4 w-100 flex items-start flex-col gap-2 border-r border-[rgba(0,0,0,.1)]">
                    <div className="flex items-center gap-2">
                        <FaEdit color={'#C89B42'} fontSize={'30px'} />
                        <h4 className="fs-24 font-bold">Register</h4>
                    </div>
                    <h5 className="text-[17px] leading-[1.5] font-medium text-grey">
                        Fill in your personal details in our secure online application.
                    </h5>
                </div>
                <div className="p-4 pl-12 py-4 w-100 flex items-start  flex-col gap-2 border-r border-[rgba(0,0,0,.1)]">
                    <div className="flex items-center gap-2">
                        <BsCash fontSize={'30px'} color={'#C89B42'} />
                        <h4 className="fs-24 font-bold">Deposit</h4>
                    </div>
                    <h5 className="text-[17px] leading-[1.5] font-medium text-grey">
                        Make a deposit via debit card, wire transfer, eCheck or check
                    </h5>
                </div>
                <div className="p-4 pl-12 py-4 w-100 flex items-start  flex-col gap-2 ">
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
        </NewsLetterStyles>
    )
}
const NewsLetterStyles = styled.div`
   padding: 6rem 0;
`


export default NewsLetter