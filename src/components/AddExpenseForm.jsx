import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { setBudget } from '../actions/budgetAction';
import { setExpenseList } from '../actions/expenseListAction';

function AddExpenseForm(props) {

    const dispatch = useDispatch();
    const [expenseInfo, setExpenseInfo] = useState({
        expenseName: '',
        expenseCost: '',
        expenseId: 0
    });
    const [isValidName, setIsValidName] = useState(false)
    const [isValidCost, setIsValidCost] = useState(false)

    const handleExpenseName = (event) => {
        setIsValidName(event.target.value.length >= 4);
        setExpenseInfo({...expenseInfo, expenseName:event.target.value})
    }

    const handleExpenseCost = (event) => {
        const isValidCost = /^\d*\.?\d*$/.test(event.target.value)
        setIsValidCost(isValidCost)
        setExpenseInfo({...expenseInfo, expenseCost:event.target.value})
    }

    const isButtonDisabled = isValidName && isValidCost




    const textInput1 = React.useRef();
    const textInput2 = React.useRef();
    const clearInput1 = () => { textInput1.current.value = '' }
    const clearInput2 = () => { textInput2.current.value = '' }

    const addExpense = (event) => {
        event.preventDefault();
        dispatch(setBudget(expenseInfo))
        dispatch(setExpenseList(expenseInfo))
        setExpenseInfo({...expenseInfo, expenseId: Math.random()})
        clearInput1();
        clearInput2();
    }

    return (
        <Form className='FormInputs'>
            <Form.Group className="NameInput">
                <Form.Control placeholder="Enter Expense Name"  ref={textInput1} onChange={handleExpenseName} />
            </Form.Group>
            <Form.Group className="CostInput">
                <Form.Control placeholder="$0.00" type='number' ref={textInput2} onChange={handleExpenseCost} />
            </Form.Group>
            <Button onClick={addExpense} disabled={!isButtonDisabled} type="submit">Submit</Button>
        </Form>
    );
}

export default AddExpenseForm;