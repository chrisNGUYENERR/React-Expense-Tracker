import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import Budget from './Budget';
import Expenses from './Expenses';
import Currency from './Currency';
import { connect } from 'react-redux';

function ExpenseTracker(props) {
    console.log(props)
    return (
        <div className='AppBg'>
            <div className='CurrencyDropdown'>
                <Currency />
            </div>
            <header className="App-header">
                <h1>G u a p N a r c</h1>
                <h5><em>{props.name}'s Expense Tracker</em></h5>
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
        </div>
    );
}


const mapStateToProps = (state) => {
    const name = state.registerUser.name
    
    return {name}
}

export default connect(mapStateToProps, null)(ExpenseTracker);