import { create_product_service, delete_product_service, edit_product_service } from '../../../../../services/products-service';
import { appSlice } from '../../../../redux/app-slice';
import { productsSlice } from './products-slice';

export function getAllProductsThunk(products) {
  return async function (dispatch, getState) {
    dispatch(productsSlice.actions.setProducts((await products).data));
  };
}

export function createProductThunk(branches) {
  return async function (dispatch, getState) {
    dispatch(productsSlice.actions.setLoading(true));
    dispatch(appSlice.actions.setToastStatus({
      status: 'loading',
      message: 'Loading...'
    }));

    try {
      const result = await create_product_service(getState().products.productForm)
      // console.log('datass',result.data)
      dispatch(productsSlice.actions.setLoading(false));
      dispatch(productsSlice.actions.setProducts(result.data));
      dispatch(productsSlice.actions.setProductForm({}));
      dispatch(appSlice.actions.setToastStatus({
        status: 'success',
        message: 'Created Success!'
      }));
    } catch (error) {
      dispatch(productsSlice.actions.setLoading(false));
      //  console.log('data', error.response.data.message)
      dispatch(appSlice.actions.setToastStatus({
        status: 'error',
        message: error.response.data.message
      }));

    }
  };
}

export function editProductThunk(branches) {
  return async function (dispatch, getState) {
    dispatch(productsSlice.actions.setLoading(true));
    dispatch(appSlice.actions.setToastStatus({
      status: 'loading',
      message: 'Loading...'
    }));

    try {
      const result = await edit_product_service(getState().products.productForm)
      // console.log('datass',result.data)
      dispatch(productsSlice.actions.setLoading(false));
      dispatch(productsSlice.actions.setProducts(result.data));
      dispatch(productsSlice.actions.setProductForm({}));
      dispatch(appSlice.actions.setToastStatus({
        status: 'success',
        message: 'Updated Success!'
      }));
    } catch (error) {
      dispatch(productsSlice.actions.setLoading(false));
      //  console.log('data', error.response.data.message)
      dispatch(appSlice.actions.setToastStatus({
        status: 'error',
        message: error.response.data.message
      }));

    }
  };
}

export function deleteProductThunk(data) {
  return async function (dispatch, getState) {
    dispatch(productsSlice.actions.setLoading(true));
    dispatch(appSlice.actions.setToastStatus({
      status: 'loading',
      message: 'Loading...'
    }));

    try {
      const result = await delete_product_service(data)
      dispatch(productsSlice.actions.setLoading(false));
      dispatch(productsSlice.actions.setProducts(result.data));
      dispatch(appSlice.actions.setToastStatus({
        status: 'success',
        message: 'Deleted Success!'
      }));
    } catch (error) {
      dispatch(productsSlice.actions.setLoading(false));
      //  console.log('data', error.response.data.message)
      dispatch(appSlice.actions.setToastStatus({
        status: 'error',
        message: error.response.data.message
      }));

    }
  };
}