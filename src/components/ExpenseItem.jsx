import React from 'react';

function ExpenseItem(props) {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.name}
        <div>
            <span>
                ${props.cost}
            </span>
            <button className='btn btn-danger'>X</button>
        </div>
    </li>
    );
}

export default ExpenseItem;