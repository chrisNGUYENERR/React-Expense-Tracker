import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import Budget from './Budget';
import Expenses from './Expenses';


function ExpenseTracker(props) {
    return (
        <div className='BudgetUI'>
            <div className='Budget'>
                Budget:
                <Budget />
            </div>
            <div>
                <Expenses />
            </div>
            <div>
                <AddExpenseForm />
            </div>
        </div>
    );
}

export default ExpenseTracker;