import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelection = (props) => {
    const { dispatch,remaining  } = useContext(AppContext);

    const [currency, resetCurrency] = useState('$ Dollars');
    const [action, setAction] = useState('');

    const setCurrency = (event) => {

        resetCurrency = event.target.value;
        dispatch ({
            type: "CHG_CURRENCY",
            payload: resetCurrency, // I THINK this is right? I found the reducer in AppContext, might be diff payload
        })


    };
    return (
        <div>
            <div className='row'>

            <div className="input-group mb-4" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-currency">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
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
