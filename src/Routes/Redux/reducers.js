import { combineReducers } from 'redux'
import findIndex from 'lodash/findIndex';
import {
  ADD_FLASH_MESSAGE,
  SET_CURRENT_USER,
  DELETE_FLASH_MESSAGE,
  GET_EMAIL
} from './actions'
import shortid from 'shortid'
import isEmpty from 'lodash/isEmpty'

const initialState={
  isAuthenticated: false,
  user:{}
}

function auth(state = initialState, action){
  switch(action.type){
    case SET_CURRENT_USER:
      return{
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      }
  default: return state
  }
}

function email(state={}){
  switch(action.type){
    case GET_EMAIL:
      return Object.assign({}, state, {
        email: action.email,
      })
    default:
      return state
  }
}
function addFlashMessage (state=[], action)
{
  switch (action.type){
    case ADD_FLASH_MESSAGE:
    return [
    ...state,
    {
      id: shortid.generate(),
      type: action.message.type,
      text: action.message.text
    }
    ]
    case DELETE_FLASH_MESSAGE:
      const index = findIndex(state, { id: action.id });
      if (index >= 0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default: return state;
  }

}

const rootReducer = combineReducers({
  addFlashMessage,
  auth
})

export default rootReducer
