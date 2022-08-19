import { configureStore } from "@reduxjs/toolkit";
import { budgetReducer } from "./reducers/budgetReducer";
import { expenseListReducer } from "./reducers/expenseListReducer";
import { registerReducer } from "./reducers/registerReducer";
import { loginReducer } from "./reducers/loginReducer";

const store = configureStore({
    reducer: {
        budget: budgetReducer,
        expenseList: expenseListReducer,
        registerUser: registerReducer,
        loginUser: loginReducer
    }
})



export default store