import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import Budget from './Budget';
import Expenses from './Expenses';
import Currency from './Currency';


function ExpenseTracker(props) {
    return (
        <>
            <div className='CurrencyDropdown'>
                <Currency />
            </div>
            <header className="App-header">
                <h1>G u a p N a r c</h1>
                <h5><em>Expense Tracker</em></h5>
            </header>
            <div className='BudgetUI'>
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
        </>
    );
}

export default ExpenseTracker;