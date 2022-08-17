const initialState = []

export const expenseListReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
      case 'ADD_EXPENSE':
          return [
              ...state,
              payload
          ]
      case 'DELETE_EXPENSE':
        return state.filter(expense => expense.expenseId !== payload)
      default:
          return state
  }
}