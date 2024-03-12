import { change_account_password_service, delete_account_service, edit_account_service } from '../../../../../services/account-details';
import { create_account_service, get_all_account_service } from '../../../../../services/account-service';
import { appSlice } from '../../../../redux/app-slice';
import { accountSlice } from './account-slice';

export function getAllBranches() {
  return async function (dispatch, getState) {
    const result = await get_all_account_service()
    dispatch(accountSlice.actions.setAccounts(result.data));
  };
}

export function createAccountThunk() {
  return async function (dispatch, getState) {
    dispatch(accountSlice.actions.setLoading(true));
    dispatch(appSlice.actions.setToastStatus({
      status: 'loading',
      message: 'Loading...'
    }));

    try {
      const result = await create_account_service(getState().accounts.accountsForm)
      // console.log('datass',result.data)
      dispatch(accountSlice.actions.setLoading(false));
      dispatch(accountSlice.actions.setAccounts(result.data));
      dispatch(accountSlice.actions.setAccountsForm({}));
      dispatch(appSlice.actions.setToastStatus({
        status: 'success',
        message: 'Created Success!'
      }));
    } catch (error) {
      dispatch(accountSlice.actions.setLoading(false));
      //  console.log('data', error.response.data.message)
      dispatch(appSlice.actions.setToastStatus({
        status: 'error',
        message: error.response.data.message
      }));

    }
  };
}

export function editAccountThunk(branches) {
  return async function (dispatch, getState) {
    dispatch(accountSlice.actions.setLoading(true));
    dispatch(appSlice.actions.setToastStatus({
      status: 'loading',
      message: 'Loading...'
    }));

    try {
      const result = await edit_account_service(getState().accounts.accountsForm)
     console.log('datass',result.data)
      dispatch(accountSlice.actions.setLoading(false));
      dispatch(accountSlice.actions.setAccounts(result.data));
      dispatch(accountSlice.actions.setAccountsForm({}));
      dispatch(appSlice.actions.setToastStatus({
        status: 'success',
        message: 'Updated Success!'
      }));
    } catch (error) {
      dispatch(accountSlice.actions.setLoading(false));
      //  console.log('data', error.response.data.message)
      dispatch(appSlice.actions.setToastStatus({
        status: 'error',
        message: error.response.data.message
      }));

    }
  };
}

export function changeAccountPasswordThunk(data) {
  return async function (dispatch, getState) {
    dispatch(accountSlice.actions.setLoading(true));
    dispatch(appSlice.actions.setToastStatus({
      status: 'loading',
      message: 'Loading...'
    }));

    try {
      const result = await change_account_password_service(data)
      dispatch(accountSlice.actions.setLoading(false));
      dispatch(accountSlice.actions.setAccounts(result.data));
      dispatch(appSlice.actions.setToastStatus({
        status: 'success',
        message: 'Updated Success!'
      }));
    } catch (error) {
      dispatch(accountSlice.actions.setLoading(false));
      //  console.log('data', error.response.data.message)
      dispatch(appSlice.actions.setToastStatus({
        status: 'error',
        message: error.response.data.message
      }));

    }
  };
}

export function deleteAccountThunk(data) {
  return async function (dispatch, getState) {
    dispatch(accountSlice.actions.setLoading(true));
    dispatch(appSlice.actions.setToastStatus({
      status: 'loading',
      message: 'Loading...'
    }));

    try {
      const result = await delete_account_service(data)
      dispatch(accountSlice.actions.setLoading(false));
      dispatch(accountSlice.actions.setAccounts(result.data));
      dispatch(appSlice.actions.setToastStatus({
        status: 'success',
        message: 'Deleted Success!'
      }));
    } catch (error) {
      dispatch(accountSlice.actions.setLoading(false));
      //  console.log('data', error.response.data.message)
      dispatch(appSlice.actions.setToastStatus({
        status: 'error',
        message: error.response.data.message
      }));

    }
  };
}