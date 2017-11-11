import * as types from '../types'
const initialState = {
  value:0
}

export default (state=initialState,action) => {
  console.log(action);
  switch (action.type) {
    case (types.COUNTER_PLUS):
      return ({...state,value:state.value + 1})
      break
      
      case (types.COUNTER_MINUS):
      return ({...state,value:state.value - 1})
    break

    default:
      return state
  }
}

