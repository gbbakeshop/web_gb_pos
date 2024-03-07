import { add_sales_service } from '../../../../services/sales-service';
import { appSlice } from '../../../redux/app-slice';
import { cashierSlice } from './cashier-slice';

export function addCartThunk(product) {
    return async function (dispatch, getState) {
        // getState().cashier.cart
        if ((await product).status == 'success') {
            const item = getState().cashier.cart
            const id = (await product).data.id
            const randomId = Math.floor(1000000000 + Math.random() * 9000000000);
            dispatch(cashierSlice.actions.setCart({
                ...(await product).data,
                randomId:randomId,
                quantity:1,
                total:(await product).data.price
            }));
            dispatch(cashierSlice.actions.setSearch(''))
        }else{
            dispatch(cashierSlice.actions.setSearch(''))
        }
    };
}


export function createPaymentThunk() {
    return async function (dispatch, getState) {
        dispatch(cashierSlice.actions.setLoading(true));
        dispatch(appSlice.actions.setToastStatus({
            status: 'loading',
            message: 'Loading...'
        }));
        const payment = getState().cashier.payment
        const cart = getState().cashier.cart
        const data = { payment, cart }
        try {
            await add_sales_service(data)
            await dispatch(cashierSlice.actions.setIsPrint(true))
            setTimeout(() => {
                dispatch(cashierSlice.actions.setIsPrint(false))
            }, 1000);
            await dispatch(cashierSlice.actions.setLoading(false));
            await dispatch(cashierSlice.actions.resetPayment());
            await dispatch(appSlice.actions.setToastStatus({
                status: 'success',
                message: 'Created Success!'
            }));
        } catch (error) {
            dispatch(cashierSlice.actions.setLoading(false));
            dispatch(appSlice.actions.setToastStatus({
                status: 'error',
                message: error.response.data.message
            }));
        }
    };
}

