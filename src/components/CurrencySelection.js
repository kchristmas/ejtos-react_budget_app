import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelection = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (val) => {
        let currency = val;
        dispatch ({
            type: "CHG_CURRENCY",
            payload: currency, // I THINK this is right? I found the reducer in AppContext, might be diff payload
        })
    }
    return (
        <div>
            <div className="currencySelectionDropdown">
                <label style={{marginLeft: "1rem", backgroundColor: "#93e499", color: "white"}}>Currency
                  <select className="custom-select-currency" id="currencyLabel" onChange={(event)=>handleCurrencyChange(event.target.value)} value={currency}>
                        <option value="">Currency</option>
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

export default CurrencySelection;
