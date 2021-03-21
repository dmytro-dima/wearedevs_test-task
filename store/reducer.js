const initialState = {
  selectDate: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_DATE':
      return {...state, selectDate: action.payload}
    default:
      return state
  }
}