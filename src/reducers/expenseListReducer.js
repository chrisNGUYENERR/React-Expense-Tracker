const initialState = []

export const expenseListReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
      case 'ADD_EXPENSE':
          return [
              ...state,
              payload
          ]
      default:
          return state
  }
}