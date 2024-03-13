import { create_loyal_card_service, delete_loyal_card_service, edit_loyal_card_service } from '../../../../../services/loyal-card-service';
import { appSlice } from '../../../../redux/app-slice';
import { loyalCardSlice } from './loyal-card-slice';

export function getAllLoyalCardsThunk(loyal_cards) {
  return async function (dispatch, getState) {
    console.log('waa',(await loyal_cards).data)
    dispatch(loyalCardSlice.actions.setLoyalCard((await loyal_cards).data));
  };
}

export function createLoyalCardThunk() {
  return async function (dispatch, getState) {
    dispatch(loyalCardSlice.actions.setLoading(true));
    dispatch(appSlice.actions.setToastStatus({
      status: 'loading',
      message: 'Loading...'
    }));

    try {
      const result = await create_loyal_card_service(getState().loyal_card.loyalCardForm)
      // console.log('datass',result.data)
      dispatch(loyalCardSlice.actions.setLoading(false));
      dispatch(loyalCardSlice.actions.setLoyalCard(result.data));
      dispatch(loyalCardSlice.actions.setLoyalCardForm({}));
      dispatch(appSlice.actions.setToastStatus({
        status: 'success',
        message: 'Created Success!'
      }));
    } catch (error) {
      dispatch(loyalCardSlice.actions.setLoading(false));
      //  console.log('data', error.response.data.message)
      dispatch(appSlice.actions.setToastStatus({
        status: 'error',
        message: error.response.data.message
      }));

    }
  };
}

export function editLoyalCardThunk(branches) {
  return async function (dispatch, getState) {
    dispatch(loyalCardSlice.actions.setLoading(true));
    dispatch(appSlice.actions.setToastStatus({
      status: 'loading',
      message: 'Loading...'
    }));

    try {
      const result = await edit_loyal_card_service(getState().loyal_card.loyalCardForm)
      // console.log('datass',result.data)
      dispatch(loyalCardSlice.actions.setLoading(false));
      dispatch(loyalCardSlice.actions.setLoyalCard(result.data));
      dispatch(loyalCardSlice.actions.setLoyalCardForm({}));
      dispatch(appSlice.actions.setToastStatus({
        status: 'success',
        message: 'Updated Success!'
      }));
    } catch (error) {
      dispatch(loyalCardSlice.actions.setLoading(false));
      //  console.log('data', error.response.data.message)
      dispatch(appSlice.actions.setToastStatus({
        status: 'error',
        message: error.response.data.message
      }));

    }
  };
}

export function deleteLoyalCardThunk(data) {
  return async function (dispatch, getState) {
    dispatch(loyalCardSlice.actions.setLoading(true));
    dispatch(appSlice.actions.setToastStatus({
      status: 'loading',
      message: 'Loading...'
    }));

    try {
      const result = await delete_loyal_card_service(data)
      dispatch(loyalCardSlice.actions.setLoading(false));
      dispatch(loyalCardSlice.actions.setLoyalCard(result.data));
      dispatch(appSlice.actions.setToastStatus({
        status: 'success',
        message: 'Deleted Success!'
      }));
    } catch (error) {
      dispatch(loyalCardSlice.actions.setLoading(false));
      //  console.log('data', error.response.data.message)
      dispatch(appSlice.actions.setToastStatus({
        status: 'error',
        message: error.response.data.message
      }));

    }
  };
}