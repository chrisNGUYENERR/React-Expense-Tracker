export const setExpenseList = (expenseInfo) => {
    return {
        type: 'ADD_EXPENSE',
        payload: expenseInfo
    }
}