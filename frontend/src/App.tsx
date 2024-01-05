import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Home,
  LayoutIndex,
  Login,
  Register,
  DashboardLayout,
  Courses,
  Overview,
  Students,
  Reviews,
  Messages,
  History,
  Support,
  Deposit,
  Payment
} from "./screens";
import ProtectRoute from "./utils/ProtectRoute";
import LazyLoader from "./components/loaders/Lazy";

export default function App() {
  const [height, setHeight] = useState(0);
  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<LayoutIndex />}>
          <Route index element={<Suspense fallback={<LazyLoader />}>
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          </Suspense>
          }
          />
          {/* login */}
          <Route path={'login/'} element={<Suspense fallback={<LazyLoader />}>
            <ProtectRoute>
              <Login />
            </ProtectRoute>
          </Suspense>
          }
          />
          {/* login */}
          <Route path={'register/'} element={<Suspense fallback={<LazyLoader />}>
            <ProtectRoute>
              <Register />
            </ProtectRoute>
          </Suspense>
          }
          />
        </Route>

        <Route path={"/account/dashboard"} element={<DashboardLayout />}>
          <Route index element={
            <ProtectRoute>
              <Courses />
            </ProtectRoute>
          } />

          <Route path={'tradinghistory'} element={
            <ProtectRoute>
              <Messages />
            </ProtectRoute>
          } />

          <Route path={'accounthistory'} element={
            <ProtectRoute>
              <History />
            </ProtectRoute>
          } />
          <Route path={'deposit'} element={
            <ProtectRoute>
              <Deposit />
            </ProtectRoute>
          } />

          <Route path={'overview'} element={
            <ProtectRoute>
              <Overview />
            </ProtectRoute>
          } />

          <Route path={'support'} element={
            <ProtectRoute>
              <Support />
            </ProtectRoute>
          } />

          <Route path={'asset-balance'} element={
            <ProtectRoute>
              <Reviews />
            </ProtectRoute>
          } />
          <Route path={'payment'} element={
            <ProtectRoute>
              <Payment />
            </ProtectRoute>
          } />

          <Route path={'students'} element={
            <ProtectRoute>
              <Students />
            </ProtectRoute>
          } />
        </Route>
      </Routes>
    </div>
  );
}
