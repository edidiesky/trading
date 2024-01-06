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
  Payment,
  ManageTransactions,
  TransactionList,
  ManageCustomers,
  CustomerList
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
            <Home />
          </Suspense>
          }
          />
          {/* login */}
          <Route path={'login/'} element={<Suspense fallback={<LazyLoader />}>
            <Login />
          </Suspense>
          }
          />
          {/* login */}
          <Route path={'register/'} element={<Suspense fallback={<LazyLoader />}>
            <Register />
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
          {/* admin */}
          {/* TransactionList */}
          <Route path={'TransactionList'} element={
            <ProtectRoute>
              <TransactionList />
            </ProtectRoute>
          } />
          {/* customers */}
          <Route path={'Manage_Customers'} element={
            <ProtectRoute>
              <CustomerList />
            </ProtectRoute>
          } />
          <Route path={'Manage_Customers/:id'} element={
            <ProtectRoute>
              <ManageCustomers />
            </ProtectRoute>
          } />
          <Route path={'Manage_Transaction/:id'} element={
            <ProtectRoute>
              <ManageTransactions />
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
