
import { lazy } from 'react';
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const FAQ = lazy(() => import("./FAQ"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));

import Courses from './dashboard/Courses'
import Messages from './dashboard/ProfitRecord'
import Overview from './dashboard/Overview'
import Students from './dashboard/Pakages'
import Reviews from './dashboard/Exchanges'
import History from './dashboard/History'
import Support from './dashboard/Support'
import Deposit from './dashboard/Deposit'
import Payment from './dashboard/Payment'
import ManageTransactions from './dashboard/admin/ManageTransactions'
import ManageCustomers from './dashboard/admin/ManageCustomers'
import TransactionList from './dashboard/admin/TransactionList'
import CustomerList from './dashboard/admin/CustomerList'

import LayoutIndex from './Layout'
import DashboardLayout from './DashboardLayout'
export {
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
    FAQ
}