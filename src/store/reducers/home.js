import * as types from '../actionTypes'

const defaultState = {
  avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  description: '个人描述',
  name: '姓名',
  loading: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_PERSON_DATA_ACTION:
      const { name, bio } = action.payload
      return { ...state, avatar: action.payload.avatar_url, description: bio, name }
    case types.TOGGLE_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
