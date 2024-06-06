import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import totalExpenses from './ExpenseTotal';
import currency from './CurrencySelection';

const Budget = () => {
    const { budget , dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);

        if (updatedBudget >= 20000){
            alert("The value cannot exceed £20,000");
                setNewBudget("");
                return;
        } else if (updatedBudget < totalExpenses){
           alert("You cannot reduce the budget value lower than the spending.");
            return;
        } else {
        setNewBudget(updatedBudget);
        dispatch ({
            type: "SET_BUDGET",
            payload: updatedBudget, // I THINK this is right? I found the reducer in AppContext, might be diff payload
        })
        }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{newBudget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
}
export default Budget;