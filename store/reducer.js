const initialState = {
  sDate: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_DATE':
      return {...state, sDate: action.payload}
    default:
      return state
  }
}