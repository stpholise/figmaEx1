import  { useState } from 'react';

function Dropdown() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You selected: ${selectedOption}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Choose an option:
                <select value={selectedOption} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Dropdown;
