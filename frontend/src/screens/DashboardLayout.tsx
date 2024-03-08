
import React, { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/common/dashboardSidebar";
import DashboardHeader from "../components/common/dashboardHeader";
import { useAppDispatch } from "@/hooks/reduxtoolkit";
import { GetSingleUser } from "@/features/auth/authReducer";
import SmallSidebar from "@/components/common/smallsidebar";
// import { Header, Smallsidebar } from "../components";
// import Sidebar from "./Sidebar";
const LayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  background-color: #F9F6FF;
  h2 {
    font-size: 3rem;
    span {
  font-family: "Barlow", sans-serif !important;

    }
      @media (max-width: 580px) {
          font-size: 2.6rem;

      }
  }
  .btn {
         padding: 10px 14px !important;
    
  }
  .LayoutContainer {
    width: 100%;
    .OutletWrapper {
      overflow: auto;
      height: calc(100vh);
      align-items: flex-start;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      width: auto;
      @media (max-width: 580px) {
        height: 100vh;
      }
      .sidebar_wrapper {
        top: 0%;
        height: 100%;
        position: sticky;
        overflow: auto;
        /* min-width: 80px; */
        min-width: 280px;

        transition: all .3s;
        @media (max-width:980px) {
           min-width: 180px;
        }
        @media (max-width:780px) {
          display: none;
        }
        &.active {
        min-width: 280px;
 @media (max-width:980px) {
           min-width: 180px;
        }
        }
      }
    }
  }
`;

export default function Layout() {
  const [active, setActive] = useState(true)
  const [sidebar, setSidebar] = useState(false)
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(GetSingleUser())
  }, []);
  return (
    <LayoutWrapper>
      {/* <Sidebar /> */}
      {/* <Smallsidebar /> */}
      <div className="LayoutContainer flex column">
        {/* <Header /> */}
        <SmallSidebar
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
        <div className="OutletWrapper flex">
          <div onMouseOver={() => setActive(true)} className={`sidebar_wrapper ${active ? 'active' : ""} flex column gap-2`}>
            <DashboardSidebar />
          </div>
          <div className="w-100 flex column gap-4">
            <DashboardHeader setSidebar={setSidebar} sidebar={sidebar} />
            <Outlet />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
