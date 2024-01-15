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
  CustomerList,
  About,
  FAQ,
  DepositList,
  ManageDeposits,
  Profile,
  Contact,
  InvestmentHistory
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
          {/*  */}
          <Route path={'/about'} element={<Suspense fallback={<LazyLoader />}>
            <About />
          </Suspense>
          }
          />
          {/* Contact */}
          <Route path={'/faq'} element={<Suspense fallback={<LazyLoader />}>
            <FAQ />
          </Suspense>
          }
          />
          <Route path={'/contact'} element={<Suspense fallback={<LazyLoader />}>
            <Contact />
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
          <Route path={'profile'} element={
            <ProtectRoute>
              <Profile />
            </ProtectRoute>
          } />
          {/* { } */}
          {/* Profile */}
          {/* customers */}
          {/* InvestmentHistory */}
          <Route path={'Manage_Customers'} element={
            <ProtectRoute>
              <CustomerList />
            </ProtectRoute>
          } />
          <Route path={'Manage_Customers'} element={
            <ProtectRoute>
              <CustomerList />
            </ProtectRoute>
          } />
          <Route path={'investment_history'} element={
            <ProtectRoute>
              <InvestmentHistory />
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
          {/* DepositList */}
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
          <Route path={'deposit_list'} element={
            <ProtectRoute>
              <DepositList />
            </ProtectRoute>
          } />
          <Route path={'deposit_list/:id'} element={
            <ProtectRoute>
              <ManageDeposits />
            </ProtectRoute>
          } />
          {/* ManageDeposits */}

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

          <Route path={'invest'} element={
            <ProtectRoute>
              <Students />
            </ProtectRoute>
          } />
        </Route>
      </Routes>
    </div>
  );
}
