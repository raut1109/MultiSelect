import React, { useState } from 'react';

const MultiSelect = ({ value = [], readonly }) => {
    const [selectedValues, setSelectedValues] = useState(value);

    const handleCheckboxChange = (value) => {
        if (selectedValues.includes(value)) {
            setSelectedValues(selectedValues.filter(val => val !== value));
        } else {
            setSelectedValues([...selectedValues, value]);
        }
    };

    const countryNames = ["India", "USA", "China", "Japan", "Germany", "Brazil", "India", "USA", "China", "Japan", "Germany", "Brazil"];

    return (
        <div style={{ maxHeight: '200px', overflowY: 'scroll',backgroundColor:'silver' }}>
           

            {countryNames.map((country, index) => {
                const optionValue = index + 1;
                const isChecked = selectedValues.includes(optionValue);
                const isDisabled = readonly;

                return (
                    <div key={optionValue}>
                        <label>
                            <input
                                type="checkbox"
                                value={optionValue}
                                checked={isChecked}
                                disabled={isDisabled}
                                onChange={() => handleCheckboxChange(optionValue)}
                            />
                            {country}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export default MultiSelect;
