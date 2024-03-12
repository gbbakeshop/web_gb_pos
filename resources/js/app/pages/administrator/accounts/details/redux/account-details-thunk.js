import { get_all_account_details_service } from '../../../../../../services/account-details';
import {accountDetailsSlice} from './account-details-slice';
export function get_all_account_details_thunk(id) {
    return async function (dispatch, getState) {
        const search = getState().account_details.search
        const year = getState().dashboard.year
        const filter = {
            search:search,
            year:year
        }
        const result = (await get_all_account_details_service(id,filter)).data
         dispatch(accountDetailsSlice.actions.setAccountDetails(result));
    };
  }