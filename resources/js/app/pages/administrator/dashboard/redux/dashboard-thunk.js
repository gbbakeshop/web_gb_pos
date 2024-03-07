import { get_all_analytics_service } from '../../../../../services/dashboard-service';
import { dashboardSlice } from './dashboard-slice';

export function getAllAnalytics() {
  return async function (dispatch, getState) {
    const { tab, year } = getState().dashboard
    const result = (await get_all_analytics_service(year, tab)).data
    console.log('result',result)
    dispatch(dashboardSlice.actions.setAnalytics(result));
  };
}
