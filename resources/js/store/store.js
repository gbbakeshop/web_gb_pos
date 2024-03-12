
import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../app/redux/app-slice';
import productsSlice from '../app/pages/administrator/products/redux/products-slice';
import cashierSlice from '../app/pages/cashier/redux/cashier-slice';
import salesSlice from '../app/pages/administrator/sales/redux/sales-slice';
import accountSlice from '../app/pages/administrator/accounts/redux/account-slice';
import dashboardSlice from '../app/pages/administrator/dashboard/redux/dashboard-slice';
import accountDetailsSlice from '../app/pages/administrator/accounts/details/redux/account-details-slice';

const store = configureStore({
    reducer: {
        app: appSlice,
        products:productsSlice,
        cashier:cashierSlice,
        sales:salesSlice,
        accounts:accountSlice,
        dashboard:dashboardSlice,
        account_details:accountDetailsSlice
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
