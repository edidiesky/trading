import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  padding:1.6rem 0;
  background: var(--white);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .TableContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      background: #bdbbbb;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--grey-1);
      border-radius: 10px;
      transition: all 0.5s;
      &:hover {
        background: #333;
      }
    }

    .tableWrapper {
      border-collapse: collapse;
      /* width: 100%; */
      /* min-width:100%; */
      /* min-width: 1100px; */
    overflow-x: auto;
     border-collapse: collapse;
    table-layout: fixed;

      thead {
        tr {
          text-align: start;
          z-index: 200;
          background: #f7f7f7;
          text-align: start;
          transition: all 0.3s var(--transition-2);

          &:hover {
            background: rgb(0 0 0 / 13%);
          }
          th {
            font-size: 1.2rem;
            color: var(--dark-1);
            font-weight: 600;
            text-align: start;
            text-transform: uppercase;

            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            padding: 2rem 1.8rem;
               font-family: "Montserrat", sans-serif;

         
            transition: all 0.3s var(--transition-2);
          }
        }
      }
      .btn {
        padding: .4rem 1rem !important;
      }
      tbody {
        tr {
          transition: all 0.5s var(--transition-2);
          z-index: 200;
            margin-bottom: 1rem;


          &:hover {
            background: #2364c41f;
            td {
              color: var(--blue-3);

            }
          }
          td {
            font-size: 1.4rem;
            font-weight: 500;
            text-align: start;
            padding: 2rem 1.8rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
               font-family: "Montserrat", sans-serif;


            .true {
              color: #e72d2d;
            }
         
            .tablespan {
              padding: 1rem;
              border-radius: 40px;
              color: #333;
              text-align: center;
              &.true {
                color: #28A745;
                background: #10e24129;
              }
              &.false {
                color: #840a0a;
                background: rgba(255, 3, 3, 0.071);
              }
            }

            .true {
              color: var(--green);
              font-size: 1.3rem;
            }
            .false {
              color: var(--red);
              font-size: 1.3rem;
            }

        
          }

          .action {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.8rem;
            .icons {
              width: 4rem;
              height: 4rem;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                font-size: 1.7rem;
                cursor: pointer;
              }
              &:hover {
                background: var(--grey-3);
              }
            }
            .details {
              padding: 0.8rem 1rem;
              background: var(--grey-3);
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
`;
