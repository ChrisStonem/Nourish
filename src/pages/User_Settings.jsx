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
    <div className='settings'>
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
      <div className='about'>
        <h3>About</h3>
        <div className='abouttext'>
        <p>
        This project came about through my participation in the "AZAV course" at the ReDi School of Digital Integration.
        </p>
        <p>
        As someone who has been affected by an eating disorder for a long time, I have felt the need to pass on what I have learned and help others find their way back to a healthy life.
        </p>
        <p>
        Here I've put together a few helpful resources for that:
        </p>
        <div className='resources'>
        <a href="https://www.nationaleatingdisorders.org/">National Eating Disorders</a>
        <a href="https://www.aedweb.org/home">Academy for Eating Disorders</a>
        <a href="https://www.theprojectheal.org/">Project Heal</a>
        <a href="https://eatingdisordersanonymous.org/">Eating Disorders Anonymous</a>
        <a href="https://recoverywarriors.com/">Recovery Warriors</a>
        <a href="https://www.eatingdisorderhope.com/">Eating Disorders Hope</a>
        </div>
        <p>
        Remember, it's important to consult with a healthcare professional or therapist for personalized advice and treatment. These resources can provide valuable information and support, but they are not a substitute for professional help.
        </p>
        </div>
      </div>
    </div>
    </div>
  );
};
