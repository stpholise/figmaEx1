import  { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Select an option');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {selectedItem}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleItemClick('Option 1')}>Option 1</li>
          <li onClick={() => handleItemClick('Option 2')}>Option 2</li>
          <li onClick={() => handleItemClick('Option 3')}>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
