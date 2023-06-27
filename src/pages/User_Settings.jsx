import React, { useState } from 'react';

export function UserSettings() {
  const [profileName, setProfileName] = useState('');
  const [pushMessages, setPushMessages] = useState(false);
  const [theme, setTheme] = useState('light');
  const [isNameEditable, setIsNameEditable] = useState(true);
  const [selectedTimes, setSelectedTimes] = useState([]);

  const handleProfileNameChange = (event) => {
    setProfileName(event.target.value);
  };

  const handlePushMessagesChange = (event) => {
    setPushMessages(event.target.checked);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleNameConfirmation = () => {
    setIsNameEditable(false);
  };

  const handleNameChange = () => {
    setIsNameEditable(true);
  };

  const handleTimeSelection = (event) => {
    const time = event.target.value;
    let updatedTimes = [...selectedTimes];

    if (updatedTimes.includes(time)) {
      updatedTimes = updatedTimes.filter((t) => t !== time);
    } else {
      updatedTimes.push(time);
    }

    setSelectedTimes(updatedTimes);
  };

  return (
    <div>
      <h2>User Settings</h2>
      <div>
        {/* <img src={profilePictureURL} alt="Profile Picture" /> */}
        <label htmlFor="profilePicture">Profile Picture:</label>
        {/* image upload component here */}
      </div>
      <div>
        <label htmlFor="profileName">Profile Name:</label>
        <input
          type="text"
          id="profileName"
          value={profileName}
          onChange={handleProfileNameChange}
          readOnly={!isNameEditable}
        />
        {isNameEditable ? (
          <button onClick={handleNameConfirmation}>Confirm</button>
        ) : (
          <button onClick={handleNameChange}>Change</button>
        )}
      </div>
      <div>
        <label htmlFor="pushMessages">Push Messages:</label>
        <input
          type="checkbox"
          id="pushMessages"
          checked={pushMessages}
          onChange={handlePushMessagesChange}
        />
      </div>
      <div>
        <label htmlFor="theme">Theme:</label>
        <select id="theme" value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div>
        <h3>Push Message Times</h3>
        <label>
          <input
            type="checkbox"
            value="morning"
            checked={selectedTimes.includes('morning')}
            onChange={handleTimeSelection}
          />
          Morning
        </label>
        <label>
          <input
            type="checkbox"
            value="afternoon"
            checked={selectedTimes.includes('afternoon')}
            onChange={handleTimeSelection}
          />
          Afternoon
        </label>
        <label>
          <input
            type="checkbox"
            value="evening"
            checked={selectedTimes.includes('evening')}
            onChange={handleTimeSelection}
          />
          Evening
        </label>
      </div>
      <div>
        <h3>About</h3>
        <p>
          {/* about section content here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
          tristique leo ac elementum. Vivamus pharetra, nisl sed interdum finibus, purus
          justo interdum magna, non feugiat est velit et nulla.
        </p>
      </div>
    </div>
  );
};
