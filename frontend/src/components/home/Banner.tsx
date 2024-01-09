import styled from 'styled-components'
const Banner = () => {
    return (
        <PackagesStyles className="w-100 flex item-center justify-cenetr">
            <div className="w-90 auto grid grid-cols-1 gap-8 md:grid-cols-2">
                <h2 className="text-white flex :text-[64px] flex-1 lg:text-[54px] w-100 leading-[1.5] w-100">Need help with your trading account?</h2>
                <div className="flex items-center justify-start lg:justify-end">
                    <div className="btn btn-2 fs-16 uppercase text-extra-bold">contact us</div>
                </div>
            </div>
        </PackagesStyles>
    )
}
const PackagesStyles = styled.div`
padding:6rem 0;
width:100%;
background-image:url('https://metacorepoint.com/img/cta-bg.jpg');
/* background-attachment: fixed; */
background-position:center center;
background-size: cover;
position:relative;

`

export default Banner