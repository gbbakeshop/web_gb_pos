import { createBrowserRouter } from "react-router-dom";

import AdministratorLayout from "../app/layouts/administrator-layout";
// import LoginPage from "../app/pages/login/login-page";
import Error404Page from "../app/pages/error-404-page";
import DashboardPage from "../app/pages/administrator/dashboard/dashboard-page";

import LoginPage from "../app/pages/login/page";
import CashierLayout from "../app/layouts/cashier-layout";
import CashierPage from "../app/pages/cashier/cashier-page";
import SalesPage from "../app/pages/administrator/sales/sales-page";
import ProductsPage from "../app/pages/administrator/products/products-page";
import AccountsPage from "../app/pages/administrator/accounts/accounts-page";
import LoyaltyCardPage from "../app/pages/administrator/loyalty_card/loyalty-card-page";
import BarcodePage from "../app/pages/administrator/barcode/barcode-page";
export const router = createBrowserRouter([
  {
    path: '*',
    element: <Error404Page />,
  },
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/administrator',
    element: <AdministratorLayout />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'sales',
        element: <SalesPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'loyalty-card',
        element: <LoyaltyCardPage />,
      },
      {
        path: 'Barcode',
        element: <BarcodePage />,
      },
      {
        path: 'accounts',
        element: <AccountsPage />,
      },
     
    ]
  },
  {
    path: '/cashier',
    element: <CashierLayout />,
    children:[
      {
        path: '',
        element: <CashierPage />,
      },
    ]
  },
]);

