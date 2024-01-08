import styled from 'styled-components'
const packageData = [
    {
        title:"STARTER ACCOUNT",
        min_deposit:"$ 500",
        list:[
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
            <h2 className="fs-30 text-dark text-center">Live Accounts</h2>

        </PackagesStyles>
    )
}
const PackagesStyles = styled.div`
padding:12rem 0;
`

export default Packages