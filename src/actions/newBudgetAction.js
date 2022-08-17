export const setNewBudget = (expenseInfo) => {
    return {
        type: 'NEW_BUDGET',
        payload: expenseInfo
    }
}