import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import totalExpenses from './ExpenseTotal';

const Budget = () => {
    const { budget , currency, dispatch } = useContext(AppContext);

    const handleBudgetChange = (val) => {
        if (val >= 20000) {
            alert("The value cannot exceed £20,000");
            return;
        } else if (val < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending.");
            return;
        } else {
            dispatch ({
                type: "SET_BUDGET",
                payload: val,
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input type="number" step="10" onChange={(event) => handleBudgetChange(event.target.value)} />
        </div>
    );
};

export default Budget;
