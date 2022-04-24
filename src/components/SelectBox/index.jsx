import React from 'react'

const SelectBox = ({ value, options, placeholder, onChange }) => {
    return (
        <>
            <select
                className="form-control"
                onChange={(e) => onChange(e.target.value)}
                value={value}
            >
                <option value="">{placeholder}</option>
                {options.map((city, i) => <option key={i} value={city}>{city}</option>)}
            </select>
        </>
    )
}

export default SelectBox;