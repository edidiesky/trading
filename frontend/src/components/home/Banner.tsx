import styled from 'styled-components'
const Banner = () => {
    return (
        <PackagesStyles className="w-100 flex item-center justify-cenetr">
            <div className="w-90 auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                <div className="flex flex-col pt-20 md:py-0 gap-2">
                    <h2 className="text-[45px] font-bold">Trade on world class platform</h2>
                    <h4 className="fs-18 text-dark family1 font-medium">
                       Be among the successfull people to gain control over there assets
                    </h4>
                </div>
                <div className="flex flex-col gap-4">
                    <img src="https://www.indonez.com/html-demo/wave/img/in-wave-mockup-5.png" alt="" className="w-100" />
                </div>
            </div>
        </PackagesStyles>
    )
}
const PackagesStyles = styled.div`
width:100%;
/* padding */
min-height:30rem;
background-image:url('https://www.indonez.com/html-demo/wave/img/in-wave-platformbg.jpg');
background-attachment: fixed;
background-position:top center;
background-size: cover;
position:relative;
`

export default Banner