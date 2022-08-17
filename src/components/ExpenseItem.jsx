import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteExpenseItem } from '../actions/handleDeleteExpense';
import { setNewBudget } from '../actions/newBudgetAction';

function ExpenseItem(props) {

    const dispatch = useDispatch()

    const deleteExpense = (e) => {
        e.preventDefault();
        console.log(props.cost)
        dispatch(deleteExpenseItem(props.id))
        dispatch(setNewBudget(props.cost))
    }


    return (
        <form>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.name}
        <div>
            <span>
                ${props.cost}
            </span>
            <button onClick={deleteExpense} type="submit" className='btn btn-danger'>X</button>
        </div>
    </li>
    </form>
    );
}

export default ExpenseItem;