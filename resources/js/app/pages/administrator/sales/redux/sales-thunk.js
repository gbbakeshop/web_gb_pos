import { get_sales_service } from "../../../../../services/sales-service";
import {salesSlice} from "./sales-slice";

export function getSalesThunk(page,search) {
    return async function (dispatch, getState) {
        const result = await get_sales_service(page,search)
        dispatch(salesSlice.actions.setSales(result.data));
    };
  }