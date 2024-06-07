import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import totalExpenses from './ExpenseTotal';
import currency from './CurrencySelection';

const Budget = () => {
    const { budget , dispatch } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);

        if (updatedBudget >= 20000){
            alert("The value cannot exceed £20,000");
                return;
        } else if (updatedBudget < totalExpenses){
           alert("You cannot reduce the budget value lower than the spending.");
            return;
        } else {
        dispatch ({
            type: "SET_BUDGET",
            payload: updatedBudget, // I THINK this is right? I found the reducer in AppContext, might be diff payload
        })
        }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={budget} onChange={(event)=>handleBudgetChange(event.target.value)}></input>
</div>
    );
};
}
export default Budget;