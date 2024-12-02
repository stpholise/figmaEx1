import  { useState } from 'react';

const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', checked: false },
    { id: 2, name: 'Item 2', checked: false },
    { id: 3, name: 'Item 3', checked: false },
  ]);

  const handleToggle = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  console.log(items.map(items => items.checked))
  };

  const handleSelectAll = () => {
    const allChecked = items.every((item) => item.checked);
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, checked: !allChecked }))
    );
  };

  return (
    <div>
      <h3>Checklist</h3>
      <button onClick={handleSelectAll}>
        {items.every((item) => item.checked) ? 'Unselect All' : 'Select All'}
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleToggle(item.id)}
              />
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
