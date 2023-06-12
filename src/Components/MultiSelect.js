import React, { useState } from 'react';

const MultiSelect = ({ value, readonly }) => {

    const countries = ["India", "USA", "China", "Japan", "Germany", "Brazil", "India", "USA", "China", "Japan", "Germany", "Brazil"];
    const [countriesNames, setCountriesNames] = useState(countries)

    const [selectedValues, setSelectedValues] = useState(value);

    const handleCheckboxChange = (event) => {
        const selectedOption = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedValues([...selectedValues, selectedOption]);
        } else {
            setSelectedValues(selectedValues.filter((value) => value !== selectedOption));
        }
    };

    const handleSearch = (e) => {
        if (e.target.value === '') {
            setCountriesNames(countries)
            return
        }
        setCountriesNames(countries.filter(itm =>
            itm.toLowerCase()
                .includes(e.target.value.toLowerCase()
                )
        ))
    }

    return (
        <div className='mt-14 shadow p-4 border-2'>
            <input
                className='p-1 border-b border-black'
                type="text"
                placeholder="e.g japan"
                onChange={handleSearch}
            />

            <div>

            </div>
            <div className="w-52 flex flex-col justify-center gap-2 border shadow-sm  rounded py-2 p-1 mt-7 ">


                <div className={`dropdown ${readonly ? 'readonly' : ''} h-52 overflow-y-scroll pl-2 `}>

                    {countriesNames.map((item, index) => {
                        return <div key={index} className="flex justify-start gap-2">
                            <input
                                type="checkbox"
                                id="checkbox1"
                                value={index}
                                checked={selectedValues.find(item => item === index)}
                                onChange={handleCheckboxChange}
                                disabled={selectedValues.find(item => item === index) && readonly}
                            />
                            <label htmlFor="checkbox1">{item}</label>
                        </div>

                    })}

                </div>
            </div>
        </div>
    );
};

export default MultiSelect;
