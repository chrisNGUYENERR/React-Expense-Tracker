import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import Budget from './Budget';
import Expenses from './Expenses';
import Currency from './Currency';


function ExpenseTracker(props) {
    return (
        <div className='BudgetUI'>
            <div className='CurrencyDropdown'>
                <Currency />
            </div>
            <div className='Budget'>
                Budget:
                <Budget />
            </div>
            <div className='ExpenseList'>
                <Expenses />
            </div>
            <div className='ExpenseForm'>
                <AddExpenseForm />
            </div>
        </div>
    );
}

export default ExpenseTracker;