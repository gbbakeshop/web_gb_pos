import { appSlice } from '../../app/redux/app-slice';

export function getAllBranches(branches) {
  return async function (dispatch, getState) {
    dispatch(appSlice.actions.setBranches(await branches));
  };
}

export function getAllRecipes(recipes) {
  return async function (dispatch, getState) {
    dispatch(appSlice.actions.setRecipes(await recipes));
  };
}

export function getAllBread(breads) {
  return async function (dispatch, getState) {
    dispatch(appSlice.actions.setBreads(await breads));
  };
}