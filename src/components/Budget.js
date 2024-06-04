import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget , dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);

        if (updatedBudget >= 20000){
            alert("The value cannot exceed £20,000");
                setNewBudget("");
                return;
        } else if (updatedBudget< totalExpenses){
           alert("You don't have the budget for that");
            return;
        } else {
        setNewBudget(updatedBudget);
        dispatch({
            type:"SET_BUDGET",
            payload: updatedBudget,
        })
        };    
        useEffect(() =>{
            setNewBudget(budget);
        }, [budget]);
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange()}></input>
</div>
    );
};
}
export default Budget;