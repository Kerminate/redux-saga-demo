import * as types from '../actionTypes'

export const getPersonDataAction = (payload) => ({
  type: types.GET_PERSON_DATA_ACTION,
  payload
})

export const getDataErrorAction = () => ({
  type: types.GET_DATA_ERROR_ACTION
})

export const getPersonData = (payload) => ({
  type: types.GET_PERSON_DATA,
  payload
})

export const toggleLoading = (payload) => ({
  type: types.TOGGLE_LOADING,
  payload
})
