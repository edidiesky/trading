// import React, { useState } from "react";
// import styled from "styled-components";
// import { useDispatch, useSelector } from "react-redux";
// import { RxCross2 } from "react-icons/rx";
// import { useAppDispatch, useAppSelector } from "@/hooks/reduxtoolkit";
// const Delete:React.FC<{type?:string}> = ({ type })=> {
//   // dispatch
//   const dispatch = useAppDispatch();
//   // get the cart alert
//   const { userAlert, userDetails } = useAppSelector((store) => store.auth);

//     return (
//       <DeleteContainer className={userAlert ? "active" : ""}>
//         <div className={userAlert ? "deleteCard active" : "deleteCard"}>
//           <div
//             className="cross"
//             onClick={() => ''}
//           >
//             <RxCross2 />
//           </div>
//           <div className="deleteCardTop">
//             <h3>Delete User?</h3>
//             <p className="family1 fs-18">
//               Are you sure you want to delete "{userDetails?.firstname}" from
//               the database?
//               <br /> You can't undo this action.
//             </p>
//           </div>

//           <div className="deleteCardBottom">
//             <button onClick={() => ''}>
//               Cancel
//             </button>
//             <button
//               className="deleteBtn"
//               // onClick={() => dispatch(adminDeleteCustomer(userDetails?._id))}
//             >
//               Delete User
//             </button>
//           </div>
//         </div>
//       </DeleteContainer>
//     );
 
// }

// export default Delete

// const DeleteContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
//   position: fixed;
//   left: 0;
//   display: flex;
//   z-index: 4900;
//   align-items: center;
//   justify-content: center;
//   top: 0;
//   background: rgba(0, 0, 0, 0.1);
//   opacity: 0;
//   visibility: hidden;
//   &.active {
//     opacity: 1;
//     visibility: visible;
//   }

//   .deleteCard {
//     min-width: 200px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     background: var(--white);
//     padding: 4rem 3rem;
//     gap: 2rem;
//     border-radius: 6px;
//     box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
//     position: relative;
//     opacity: 0;
//     transform: scale(0.7);
//     visibility: hidden;
//     transition: all 0.4s;
//     &.active {
//       opacity: 1;
//       transform: scale(1);
//       visibility: visible;
//     }
//     .cross {
//       position: absolute;
//       right: 10px;
//       top: 20px;
//       width: 3rem;
//       height: 3rem;
//       border-radius: 50%;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       cursor: pointer;
//       &:hover {
//         background: var(--grey-2);
//       }
//       svg {
//         font-size: 20px;
//       }
//     }
//     .deleteCardBottom {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       padding-top: 2rem;
//       gap: 1rem;
//       button {
//         padding: 1.2rem 2rem;
//         border: none;
//         font-size: 1.4rem;
//         font-weight: 400;
//         background: var(--grey-2);
//         color: #fff;
//         outline: none;
//         border-radius: 40px;
//         cursor: pointer;
//         text-transform: none;
//         &:hover {
//           background: var(--grey-3);
//           color: var(--text-color);
//         }
//         &.deleteBtn {
//           background: var(--red);
//           &:hover {
//             opacity: 0.8;
//             color: #fff;
//           }
//         }
//       }
//     }
//     .deleteCardCenter {
//       padding: 2rem;
//       width: 100%;
//       background: var(--grey-3);
//       border-left: 5px solid var(--red);
//       display: flex;
//       align-items: center;
//       gap: 2rem;
//       svg {
//         font-size: 2rem;
//         color: var(--red);
//       }
//       h4 {
//         font-size: 1.6rem;
//         font-weight: 400;
//         color: var(--red);
//         .deleteSpan {
//           font-weight: 600;
//           display: block;
//           padding-bottom: 1rem;
//         }
//       }
//     }

//     .deleteCardTop {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       flex-direction: column;
//       gap: 1.4rem;
//       h3 {
//         font-size: 1.8rem;
//         font-weight: 600;
//         color: var(--text-color);
//       }
//       p {
//         line-height: 1.4;
//         font-size:1.3rem;
//         text-align: center;
//       }
//     }
//   }
// `;
