export const setBudget = (expenseInfo) => {
    return {
        type: 'REDUCE_BUDGET',
        payload: expenseInfo
    }
}