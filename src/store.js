import { configureStore } from "@reduxjs/toolkit";
import { budgetReducer } from "./reducers/budgetReducer";
import { expenseListReducer } from "./reducers/expenseListReducer";

const store = configureStore({
    reducer: {
        budget: budgetReducer,
        expenseList: expenseListReducer
    }
})



export default store