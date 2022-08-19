import { configureStore } from "@reduxjs/toolkit";
import { budgetReducer } from "./reducers/budgetReducer";
import { expenseListReducer } from "./reducers/expenseListReducer";
import { registerReducer } from "./reducers/registerReducer";

const store = configureStore({
    reducer: {
        budget: budgetReducer,
        expenseList: expenseListReducer,
        registerUser: registerReducer
    }
})



export default store