import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Market,
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
  Profile,
  Contact,
  InvestmentHistory,

  RoiList,
  InvestmentList,
  RoIDetails,
  ManageRoi,
  Withdrawals,
  Withdrawal
} from "./screens";
import ProtectRoute from "./utils/ProtectRoute";
import LazyLoader from "./components/loaders/Lazy";
import AdminProtectRoute from "./utils/AdminProtectRoute";

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
          <Route path={'about'} element={<Suspense fallback={<LazyLoader />}>
            <About />
          </Suspense>
          }
          />
          <Route path={'market'} element={<Suspense fallback={<LazyLoader />}>
            <Market />
          </Suspense>
          }
          />
          {/* Contact */}
          <Route path={'faq'} element={<Suspense fallback={<LazyLoader />}>
            <FAQ />
          </Suspense>
          }
          />
          <Route path={'contact'} element={<Suspense fallback={<LazyLoader />}>
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
          {/* InvestmentList */}


          <Route path={'investment_history'} element={
            <ProtectRoute>
              <InvestmentHistory />
            </ProtectRoute>
          } />
          <Route path={'investment_withdrawal'} element={
            <ProtectRoute>
              <Withdrawals />
            </ProtectRoute>
          } />
          <Route path={'investment_withdrawal/:id'} element={
            <ProtectRoute>
              <Withdrawal />
            </ProtectRoute>
          } />

{/* Withdrawal */}
          <Route path={'investment_history'} element={
            <ProtectRoute>
              <InvestmentList />
            </ProtectRoute>
          } />

          <Route path={'tradinghistory'} element={
            <ProtectRoute>
              <Messages />
            </ProtectRoute>
          } />
          
          <Route path={'tradinghistory/:id'} element={
            <ProtectRoute>
              <RoIDetails />
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

        <Route path={"/account/admin/dashboard"} element={
          <AdminProtectRoute>
            <DashboardLayout />
          </AdminProtectRoute>
        }>
          <Route index element={
            <ProtectRoute>
              <Courses />
            </ProtectRoute>
          } />
          {/* admin */}
          {/* TransactionList */}
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
          <Route path={'Manage_Customers/:id'} element={
            <ProtectRoute>
              <ManageCustomers />
            </ProtectRoute>
          } />
          <Route path={'Manage_Customers'} element={
            <ProtectRoute>
              <CustomerList />
            </ProtectRoute>
          } />

          <Route path={'Manage_Roi'} element={
            <ProtectRoute>
              <RoiList />
            </ProtectRoute>
          } />

          <Route path={'Manage_Roi/:id'} element={
            <ProtectRoute>
              <ManageRoi />
            </ProtectRoute>
          } />


          <Route path={'investment_history'} element={
            <ProtectRoute>
              <InvestmentList />
            </ProtectRoute>
          } />


          <Route path={'Manage_Transaction/:id'} element={
            <ProtectRoute>
              <ManageTransactions />
            </ProtectRoute>
          } />

          <Route path={'overview'} element={
            <ProtectRoute>
              <Overview />
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
