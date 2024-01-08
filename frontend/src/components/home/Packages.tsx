import styled from 'styled-components'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
const packageData = [
    {
        title: "STARTER ACCOUNT",
        min_deposit: "$ 500",
        list: [
            'Spreads from 3.3 pips',
            'Leverage 1:300',
            'Live Chart Support'
        ]
    },
    {
        title: "BASIC ACCOUNT",
        min_deposit: "$1,100",
        list: [
            'Spreads from 3.3 pips',
            'Leverage 1:300',
            'Live Chart Support',
            ' All Available Platforms'
        ]
    },
    {
        title: "PROFESSIONAL ACCOUNT",
        min_deposit: "$5,500",
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
        min_deposit: "$50,000",
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
        min_deposit: "$100,000",
        list: [
            'Spreads from 3.3 pips',
            'Leverage 1:300',
            'Live Chart Support',
            ' All Available Platforms',
            ' Access All Education Tools',
            '  Technical Analysis Report',
            'Market Update Emails'
        ]
    }
]
const Packages = () => {
    return (
        <PackagesStyles className="w-100 bg-[#F5F6F6]">
            <div className='w-100 flex flex-col gap-24'>
                <h2 className="fs-40 text-bold text-center">
                    Live Accounts
                    <span className="block fs-24 pt-12 text-grey2 text-light">Choose a package</span>
                </h2>
                <div className="w-90 auto grid grid-cols-1 items-start gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        packageData?.map((x?: any, index?: any) => {
                            return <div className="w-100 border border-[#e5e5e5] flex flex-col">
                                <div className="py-[20px] border-b border-[#e5e5e5] px-12 text-start w-100">
                                    <h3 className="fs-24 text-bold text-start">{x?.title}</h3>
                                </div>
                                <div className="w-100 bg-[#Fff] py-12 flex gap-12 flex-col items-center justify-center">
                                    <h4 style={{ color: "rgb(244, 190, 47)" }} className="text-center fs-16 text-bold text-[rgb(244, 190, 47)] w-100">
                                        Minimum Deposit <span>{x.min_deposit}</span>
                                    </h4>
                                    <div className="w-100 flex column items-center justify-center gap-3 fs-18 text-bold">
                                        {
                                            x?.list.map((x?: any, index?: any) => {
                                                return <div className="w-100 flex item-center text-grey2 text-light px-12 gap-2">
                                                    <FaCheck /> {x}
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="py-[24px] cursor-pointer hover:bg-[#b1b2b2] bg-[#F5F6F6] border-b border-[#e5e5e5] px-12 text-start w-100">
                                    <Link to={'/register'} className="fs-16 uppercase block text-bold text-center">Open An Account</Link>
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
padding:12rem 0;
`

export default Packages