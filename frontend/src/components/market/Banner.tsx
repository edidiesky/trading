import styled from 'styled-components'
const Banner = () => {
    return (
        <PackagesStyles className="w-100 flex item-center justify-cenetr">
            <div className="w-90 auto grid grid-cols-1 gap-8 md:grid-cols-2">
                <h2 className="text-white flex flex-1 fs-45 leading-[1.6] w-100">Need help with your trading account?</h2>
                <div className="flex items-center justify-end">
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

h2 {
    font-size: 40px;
}

`

export default Banner