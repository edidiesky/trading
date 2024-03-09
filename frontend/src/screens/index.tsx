
import { lazy } from 'react';
const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));
const Market = lazy(() => import("./Market"));
const About = lazy(() => import("./About"));
const FAQ = lazy(() => import("./FAQ"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));

import Courses from './dashboard/Dashboard'
import Messages from './dashboard/ProfitRecord'
import Overview from './dashboard/Overview'
import Students from './dashboard/Packages'
import Reviews from './dashboard/Exchanges'
import History from './dashboard/History'
import Support from './dashboard/Support'
import Deposit from './dashboard/Deposit'
import Payment from './dashboard/Payment'
import Profile from './dashboard/Profile'
import InvestmentHistory from './dashboard/Investment'
import RoIDetails from './dashboard/RoIDetails'
import Withdrawals from './dashboard/Withdrawals'
import Withdrawal from './dashboard/Withdrawal'
// InvestmentHistory
// Profile
// ManageRoi
// Withdrawals
import ManageTransactions from './dashboard/admin/ManageTransactions'
import RoiList from './dashboard/admin/RoiList'
import ManageCustomers from './dashboard/admin/ManageCustomers'
import TransactionList from './dashboard/admin/TransactionList'
import InvestmentList from './dashboard/admin/InvestmentList'
import CustomerList from './dashboard/admin/CustomerList'
import ManageRoi from './dashboard/admin/ManageRoi'
// import Contact from './Contact'
import LayoutIndex from './Layout'
import DashboardLayout from './DashboardLayout'
// InvestmentList
// RoiList
// RoIDetails
export {
    Home,
    LayoutIndex,
    Login,
    Register,
    Market,
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
    RoIDetails,
    Profile,
    Contact,
    InvestmentHistory,
    RoiList,
    InvestmentList,
    ManageRoi,
    Withdrawals,
    Withdrawal,
}