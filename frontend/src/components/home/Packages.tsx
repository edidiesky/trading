import styled from 'styled-components'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
const packageData = [
    {
        title: "Classic account",
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
        title: "Platinum account",
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
        <PackagesStyles className="w-100">
            <div className='w-100 flex flex-col gap-24'>
                <h2 className="text-[50px] text-bold text-center">
                    Complete package for every traders
                    <span className="block fs-24 pt-12 text-grey2 text-light">Choose a package</span>
                </h2>
                <div className="w-[70%] auto grid grid-cols-1 items-start gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-2">
                    {
                        packageData?.map((x?: any, index?: any) => {
                            return <div className="w-100 border bg-[#fff] rounded-[30px] flex flex-col">
                               
                                <div className="w-100 py-24 flex gap-12 flex-col">
                                    <h3 className="text-[35px] text-extra-bold  text-start">{x?.title}</h3>
                                    <h4 style={{ color: "rgb(244, 190, 47)" }} className="text-center fs-16 text-bold text-[rgb(244, 190, 47)] w-100">
                                        Minimum Deposit <span>{x.min_deposit}</span>
                                    </h4>
                                    <div className="w-100 flex column items-center justify-center gap-2 text-[17px] text-bold">
                                        {
                                            x?.list.map((x?: any, index?: any) => {
                                                return <div className="w-100 flex item-center text-grey text-bold px-12 gap-2">
                                                    <span className="w-10 h-10 rounded-full text-[13px] text-[#fff] bg-[#1980EC] flex items-center justify-center">
                                                        <FaCheck fontSize={'13px'} />
                                                    </span>  {x}
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className=" text-start w-90 auto">
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
padding:18rem 0;
`

export default Packages