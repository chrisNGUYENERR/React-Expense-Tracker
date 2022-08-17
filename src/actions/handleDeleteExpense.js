export const deleteExpenseItem = (expenseInfo) => {
    return {
        type: 'DELETE_EXPENSE',
        payload: expenseInfo
    }
}