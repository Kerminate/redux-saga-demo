import * as types from '../actionTypes'

export const getPersonDataAction = (payload) => ({
  type: types.GET_PERSON_DATA_ACTION,
  payload
})

export const getPersonData = (payload) => ({
  type: types.GET_PERSON_DATA,
  payload
})

export const toggleLoading = (payload) => ({
  type: types.TOGGLE_LOADING,
  payload
})

export const cancelGetPersonData = () => ({
  type: types.CANCEL_PERSON_REQUEST
})

export const getRequestResult = (payload) => ({
  type: types.GET_REQUEST_RESULT,
  payload
})
