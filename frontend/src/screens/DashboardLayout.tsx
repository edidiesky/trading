import React, { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/common/dashboardSidebar";
import DashboardHeader from "../components/common/dashboardHeader";
// import { Header, Smallsidebar } from "../components";
// import Sidebar from "./Sidebar";
const LayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  background-color: #315d7214;
  .LayoutContainer {
    width: 100%;
    .OutletWrapper {
      overflow: auto;
      height: calc(100vh - 8rem);
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
        @media (max-width:780px) {
          display: none;
        }
        &.active {
        min-width: 280px;

        }
      }
    }
  }
  h2 {
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
`;

export default function Layout() {
  const [active, setActive] = useState(true)
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <LayoutWrapper>
      {/* <Sidebar /> */}
      {/* <Smallsidebar /> */}
      <div className="LayoutContainer flex column">
        {/* <Header /> */}
        <DashboardHeader />
        <div className="OutletWrapper flex">
          <div onMouseOver={() => setActive(true)} className={`sidebar_wrapper ${active ? 'active' : ""} flex column gap-2`}>
            <DashboardSidebar />
          </div>
          <div className="w-100 flex column gap-4">
            
            <Outlet />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
