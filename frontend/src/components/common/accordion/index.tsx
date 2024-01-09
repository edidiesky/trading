import React from 'react'
import styled from 'styled-components'
import AccordionCard from './Card'
import { AccordionData } from '../../../data/accordion'
export default function Accordion() {
    return (
        <AccordionContainer>
            {AccordionData.map((x?:any,index?:any) => {
                return <AccordionCard key={index} x={x} />
            })}
        </AccordionContainer>
    )
}

const AccordionContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;

`