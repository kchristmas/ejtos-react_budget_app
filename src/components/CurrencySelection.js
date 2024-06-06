import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelection = () => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState('$');

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        setCurrency(selectedCurrency);
            dispatch ({
                type: "CHG_CURRENCY",
                payload: selectedCurrency, // I THINK this is right? I found the reducer in AppContext, might be diff payload
            });
    };
    return (
        <div>
            <div className='row'>

            <div className="input-group mb-4" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-currency">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={handleCurrencyChange} value={currency}>
                        <option defaultValue>Choose...</option>
                        <option value="$" name="dollar"> $ Dollar</option>
                        <option value="€" name="euro">€ Euro</option>
                        <option value="£" name="pound">£ Pound</option>
                        <option value="₹" name="rupee">₹ Ruppee</option>
                  </select>
                </div>
            </div>

        </div>
    );
};

export default CurrencySelection;
