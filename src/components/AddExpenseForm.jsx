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
    });


    const addExpense = (e) => {
        e.preventDefault();
        dispatch(setBudget(expenseInfo))
        let a = dispatch((setExpenseList(expenseInfo)))
        console.log(a)
        
        // setExpenseInfo({...expenseInfo, expenseId: Math.random()})


    }


    return (
        <Form>
            <Form.Group className="mb-3">
            <Form.Control placeholder="Enter Expense Name" onChange={(event) => setExpenseInfo({...expenseInfo, expenseName:event.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Control placeholder="Enter Expense Cost" onChange={(event) => setExpenseInfo({...expenseInfo, expenseCost:event.target.value})} />
            </Form.Group>
            <Button onClick={addExpense} type="submit">Submit</Button>
        </Form>
    );
}

export default AddExpenseForm;