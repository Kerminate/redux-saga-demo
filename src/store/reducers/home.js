import * as types from '../actionTypes'

const defaultState = {
  avatar: 'https://avatars0.githubusercontent.com/u/33346345?s=400&v=4',
  description: '个人描述',
  name: '姓名',
  loading: false,
  result: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_PERSON_DATA_ACTION:
      const { name, bio } = action.payload
      return { ...state, avatar: action.payload.avatar_url, description: bio, name }
    case types.TOGGLE_LOADING:
      return { ...state, loading: action.payload }
    case types.GET_REQUEST_RESULT:
      return { ...state, result: action.payload }
    case types.RESET_DATA:
      return defaultState
    default:
      return state
  }
}
