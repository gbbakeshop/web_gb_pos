import { get_sales_service } from "../../../../../services/sales-service";
import {salesSlice} from "./sales-slice";

export function getSalesThunk(page) {
    return async function (dispatch, getState) {
        const result = await get_sales_service(page)
        dispatch(salesSlice.actions.setSales(result.data));
    };
  }