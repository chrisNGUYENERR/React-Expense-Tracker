import React from 'react';
import ExpenseItem from './ExpenseItem';
import { connect } from 'react-redux';

function Expenses(props) {

    const expenseList = [props.expenseList.expenseList][0]
    console.log(expenseList)
    
    return (
        <ul className='list-group'>
                {expenseList.map((expense, index) => {
                    return <ExpenseItem key={index} id={expense.expenseId} name={expense.expenseName} cost={expense.expenseCost} />
                })}
        </ul>
    );
}


const mapStateToProps = (state) => {
    const expenseList = state

    return {expenseList}
}

export default connect(mapStateToProps, null)(Expenses);