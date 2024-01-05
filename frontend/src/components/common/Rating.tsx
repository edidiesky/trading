import React from "react";
import styled from "styled-components";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

const Rating: React.FC<{ value?:any }> = ({ value })=> {
  // body...

  return (
    <RatingContent>
      <div className="RatingContainer flex item-center">
        
          <span>
            {value >= 1 ? (
              <BsStarFill />
            ) : value < 0.5 ? (
              <FaStarHalfAlt />
            ) : (
              <BsStarFill />
            )}
          </span>
          <span>
            {" "}
            {value >= 2 ? (
              <BsStarFill />
            ) : value < 1.5 ? (
              <FaStarHalfAlt />
            ) : (
              <BsStarFill />
            )}
          </span>
          <span>
            {value >= 3 ? (
              <BsStarFill />
            ) : value < 2.5 ? (
              <FaStarHalfAlt />
            ) : (
              <BsStarFill />
            )}
          </span>
          <span>
            {value >= 4 ? (
              <BsStarFill />
            ) : value < 3.6 ? (
              <FaStarHalfAlt />
            ) : (
              <BsStarFill />
            )}
          </span>
          <span>
            {value >= 5 ? (
              <BsStarFill />
            ) : value < 4.6 ? (
              <FaStarHalfAlt />
            ) : (
              <BsStarFill />
            )}
          </span>
      </div>
    </RatingContent>
  );
}

export default Rating

const RatingContent = styled.div`
 display: flex;
    align-items: center;
  .RatingContainer {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.1rem;
    span {
      svg {
        color: #B4690E;
        font-size: 12px;
        @media (max-width: 580px) {
          font-size: 13px;
        }
      }
    }
  }
  h3 {
    font-size: 1.4rem;
    color: var(--grey);
    font-weight: 600;
  }
`;
