import React, { useState } from 'react'
import styled from 'styled-components'
import { BiPlus, BiMinus } from "react-icons/bi";
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
const AccordionCardStyles = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.02);
  &:hover {
    cursor: pointer;
    .accordionCardTop {
      transform:translateX(20px);

      .toggleBtn {
        svg {
          color: var(--blue-2);
        }
      }
    }
  }

  .accordionBottom {
    max-height: 0;
    width: 100%;
    transition: all 0.6s;
  background: #fff;
    border-bottom: 1px dotted #CEE1F8;

    &.active {
      max-height: 28rem;
    }
    p {
      font-size: 1.6rem;
      line-height: 1.6;
      font-weight: 300;
      width: 90%;
      padding:3rem 4rem;
    }
  }
  .accordionCardTop {
    width: 100%;
    display: flex;
    transition: all 0.6s;
  background: #fff;
    align-items: center;
    border-bottom: 1px dotted #CEE1F8;

    gap: 2rem;
    padding: 2rem 4rem;
    &.active {
      background-color: #e7f1ff;
     
    }
    .toggleBtn {
      width: 4rem;
      height: 4rem;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 20px;
         color:rgb(59, 86, 110);

      }
    }
    h3 {
      /* font-size: 17px; */
      width: 100%;
      color:rgb(59, 86, 110);
    }
  }
`;
const AccordionCard: React.FC<{ x?: any }> = ({ x }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <AccordionCardStyles className="w-100">
      <div
        className={toggle ? "accordionCardTop active" : "accordionCardTop"}
        onClick={() => setToggle(!toggle)}
      >
        <h3 className='fs-18 text-light2 family1 text-grey'>{x.title}</h3>
        <div className="toggleBtn">{toggle ? <BsChevronUp /> : <BsChevronDown />}</div>
      </div>
      <div className={toggle ? "accordionBottom active" : "accordionBottom"}>
        <p className='text-bold text-grey2 leading-[1.7] fs-18'>{x.response}</p>
      </div>
    </AccordionCardStyles>
  )
}


export default AccordionCard