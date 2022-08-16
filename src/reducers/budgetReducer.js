const initialState = {
    budget: 3000,
}

export const budgetReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case 'REDUCE_BUDGET':
            return {...state, budget: state.budget - payload.expenseCost}
        default:
            return state;
    }
}