import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (val) => {
        dispatch ({
            type: "CHG_CURRENCY",
            payload: val, // I THINK this is right? I found the reducer in AppContext, might be diff payload
        })
    }
    return (
        <div>
            <div className="currencySelectionDropdown">
                <label style={{marginLeft: "1rem", backgroundColor: "#93e499", color: "white"}}>Currency
                  <select name="currency" id="currency" onChange={(event)=>handleCurrencyChange(event.target.value)}>
                        <option value="">choose...</option>
                        <option value="$" name="dollar"> $ Dollar</option>
                        <option value="€" name="euro">€ Euro</option>
                        <option value="£" name="pound">£ Pound</option>
                        <option value="₹" name="rupee">₹ Ruppee</option>
                  </select>
                  </label>
                </div>

        </div>
    );
};

export default Currency;
