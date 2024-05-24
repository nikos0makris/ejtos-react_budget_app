import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        //const newCurrency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div className="dropdown">
            <label htmlFor="currencyDropdown">Currency:</label>
            <select id="currencyDropdown" className="custom-select" onChange={handleCurrencyChange}>
                <option value="£">Pound (£)</option>
                <option value="$">Dollar ($)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;
