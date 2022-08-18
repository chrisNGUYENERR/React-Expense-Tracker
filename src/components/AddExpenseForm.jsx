import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { setBudget } from '../actions/budgetAction';
import { setExpenseList } from '../actions/expenseListAction';


function AddExpenseForm(props) {


    const dispatch = useDispatch()
    const [expenseInfo, setExpenseInfo] = useState({
        expenseName: '',
        expenseCost: '',
        expenseId: 0
    });


    const textInput1 = React.useRef();
    const textInput2 = React.useRef();
    const clearInput1 = () => { textInput1.current.value = '' }
    const clearInput2 = () => { textInput2.current.value = '' }


    const addExpense = (e) => {
        e.preventDefault();
        dispatch(setBudget(expenseInfo))
        dispatch(setExpenseList(expenseInfo))
        setExpenseInfo({...expenseInfo, expenseId: Math.random()})
        clearInput1();
        clearInput2();
    }


    return (
        <Form>
            <Form.Group className="mb-3">
            <Form.Control placeholder="Enter Expense Name" ref={textInput1} onChange={(event) => setExpenseInfo({...expenseInfo, expenseName:event.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Control placeholder="Enter Expense Cost" ref={textInput2} onChange={(event) => setExpenseInfo({...expenseInfo, expenseCost:event.target.value})} />
            </Form.Group>
            <Button onClick={addExpense} type="submit">Submit</Button>
        </Form>
    );
}

export default AddExpenseForm;