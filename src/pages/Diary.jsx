import React, { useState } from 'react';


export function Diary() {
  const [inputValue, setInputValue] = useState('');
  const [foodItems, setFoodItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addFoodItem();
    }
  };

  const addFoodItem = () => {
    if (inputValue.trim() !== '') {
      const newItem = {
        id: Date.now(),
        name: inputValue.trim()
      };
      setFoodItems([...foodItems, newItem]);
      setInputValue('');
    }
  };

  const handleEdit = (id) => {
    const updatedItems = foodItems.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item };
        const newName = prompt('Enter the new name:', updatedItem.name);
        if (newName !== null) {
          updatedItem.name = newName;
        }
        return updatedItem;
      }
      return item;
    });
    setFoodItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = foodItems.filter(item => item.id !== id);
    setFoodItems(updatedItems);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter food item"
      />
      <ul>
        {foodItems.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}