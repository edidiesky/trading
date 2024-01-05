import styled from 'styled-components'
const Testimonial = () => {
    return (
        <TestimonialStyles className="w-100">
            <div className="w-90 auto testimonial_wrapper flex column gap-4">
                <h2 className="fs-30 text-dark">Testimonial
                <span className="fs-20 block text-grey2 text-light">
                        What people say about MetaCore Point
                </span>
                </h2>
            </div>

        </TestimonialStyles>
    )
}
const TestimonialStyles = styled.div`
padding:6rem 0;
`

export default Testimonial
