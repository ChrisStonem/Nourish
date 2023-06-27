import React, { useState } from 'react';

export function Diary() {
  const [inputValue, setInputValue] = useState('');
  const [foodItems, setFoodItems] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with the current date

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
        name: inputValue.trim(),
        date: selectedDate.toLocaleDateString(), // Add the selected date to the food item
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePrevDay = () => {
    const prevDay = new Date(selectedDate);
    prevDay.setDate(prevDay.getDate() - 1);
    setSelectedDate(prevDay);
  };

  const handleNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setSelectedDate(nextDay);
  };

  return (
    <>
    
    <div className='diary'>
      <h2>Diary</h2>
      <div className='Datehandle'>
        <button onClick={handlePrevDay}>&lt;</button>
        <span>{selectedDate.toDateString()}</span>
        <button onClick={handleNextDay}>&gt;</button>
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="              Enter food item and hit enter"
      />
      <p>(Please keep in mind not to use any numbers. Simply list the kinds of foods you ate in a day.)</p>
      <ul>
        {foodItems.map(item => (
          item.date === selectedDate.toLocaleDateString() && ( // Only show items for the selected date
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleEdit(item.id)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          )
        ))}
      </ul>
    </div>
    </>
  );
}
