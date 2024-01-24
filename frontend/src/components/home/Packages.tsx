import styled from 'styled-components'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
const packageData = [
    {
        title: "STARTER ACCOUNT",
        min_deposit: "$ 250",
        list: [
            'Spreads from 3.3 pips',
            'Leverage 1:300',
            'Live Chart Support'
        ]
    },
    {
        title: "BASIC ACCOUNT",
        min_deposit: "$1,000",
        list: [
            'Spreads from 3.3 pips',
            'Leverage 1:300',
            'Live Chart Support',
            ' All Available Platforms'
        ]
    },
    {
        title: "PROFESSIONAL ACCOUNT",
        min_deposit: "$5,000",
        list: [
            'Spreads from 3.3 pips',
            'Leverage 1:300',
            'Live Chart Support',
            ' All Available Platforms',
            ' Access All Education Tools',
        ]
    },
    {
        title: "SILVER ACCOUNT",
        min_deposit: "$10,000",
        list: [
            'Spreads from 3.3 pips',
            'Leverage 1:300',
            'Live Chart Support',
            ' All Available Platforms',
            ' Access All Education Tools',
            '  Technical Analysis Report',
        ]
    },
    {
        title: "GOLD ACCOUNT",
        min_deposit: "$30,000",
        list: [
            'Spreads from 3.3 pips',
            'Leverage 1:300',
            'Live Chart Support',
            ' All Available Platforms',
            ' Access All Education Tools',
            '  Technical Analysis Report',
            'Market Update Emails'
        ]
    },
    {
        title: "PLATINUM ACCOUNT",
        min_deposit: "$500,000",
        list: [
            'Spreads from 3.3 pips',
            'Leverage 1:300',
            'Live Chart Support',
            ' All Available Platforms',
            ' Access All Education Tools',
            '  Technical Analysis Report',
            'Market Update Emails',
            'Market Class with free Signals'
        ]
    }
]
const Packages = () => {
    return (
        <PackagesStyles className="w-100">
            <div className='w-100 flex flex-col gap-24'>
                <h3 className="text-[40px] w-90 auto lg:text-[50px] font-extrabold text-start lg:text-center">
                    Complete package for every traders
                </h3>
                <div className="w-90 lg:w-[70%] auto grid grid-cols-1 items-start gap-x-4 gap-y-12 lg:grid-cols-2">

                   
                    {
                        packageData?.map((x?: any, index?: any) => {
                            return <div className="w-100 border bg-[#fff] shadow-xl rounded-[30px] flex flex-col">

                                <div className="w-90 px-16 auto py-24 flex gap-12 flex-col">
                                    <h3 className="text-[27px] text-extra-bold  text-start">
                                        <span className="flex items-center gap-2 text-xl mb-3 font-medium uppercase family1">MINIMUM FUNDING
                                            <span className="px-2 py-2 rounded-[40px] text-white font-bold text-[10px] bg-[#1980EC]">
                                            {x?.min_deposit}
                                         </span>
                                        </span>
                                        {x?.title}
                                        <span className="block text-[26px] font-light mt-4 pb-10 border-b border-[rgba(0,0,0,.1)] family1 text-grey">
                                            Benefit from industry-leading entry prices</span>
                                    </h3>
                                    {/* <h4 style={{ color: "rgb(244, 190, 47)" }} className="text-center fs-16 text-bold text-[rgb(244, 190, 47)] w-100">
                                Minimum Deposit <span>{packageData[0].min_deposit}</span>
                            </h4> */}
                                    <div className="w-100 flex column items-center justify-center gap-2 text-[17px] text-bold">
                                        {
                                            x?.list.map((x?: any, index?: any) => {
                                                return <div className="w-100 family1 flex item-center text-medium gap-2">
                                                    <span className="w-8 h-8 family1 rounded-full text-[13px] text-[#fff] bg-[#1980EC] flex items-center justify-center">
                                                        <FaCheck fontSize={'10px'} />
                                                    </span>  {x}
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className=" text-start w-100 auto">
                                        <Link to={'/register'} className="fs-16 btn btn-2 block text-extra-bold text-center">Open An Account</Link>
                                    </div>
                                </div>


                            </div>
                        })
                    }
                </div>
            </div>

        </PackagesStyles>
    )
}
const PackagesStyles = styled.div`
padding:10rem 0;
`

export default Packages