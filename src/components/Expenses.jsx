import React from 'react';
import ExpenseItem from './ExpenseItem';
import { connect } from 'react-redux';

function Expenses(props) {
    // const expenseList = [
    //     {id: 1, name: 'rent', cost: 800},
    //     {id: 2, name: 'groceries', cost: 300},
    //     {id: 3, name: 'car note', cost: 400},
    //     {id: 4, name: 'shopping', cost: 250}
    // ]

    const expenseList = [props.expenseList.expenseList][0]
    console.log(expenseList)
    
    return (
        <ul className='list-group'>
                {expenseList.map((expense, index) => {
                    return <ExpenseItem key={index} name={expense.expenseName} cost={expense.expenseCost} />
                })}
        </ul>
    );
}


const mapStateToProps = (state) => {
    const expenseList = state

    return {expenseList}
}

export default connect(mapStateToProps, null)(Expenses);