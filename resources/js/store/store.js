
import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../app/redux/app-slice';
import productsSlice from '../app/pages/administrator/products/redux/products-slice';
import cashierSlice from '../app/pages/cashier/redux/cashier-slice';
import salesSlice from '../app/pages/administrator/sales/redux/sales-slice';
import accountSlice from '../app/pages/administrator/accounts/redux/account-slice';

const store = configureStore({
    reducer: {
        app: appSlice,
        products:productsSlice,
        cashier:cashierSlice,
        sales:salesSlice,
        accounts:accountSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
