import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ProfilePictureUpload = () => {
  const [profilePicture, setProfilePicture] = useState(
    localStorage.getItem('profilePicture') || ''
  );

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const profilePictureData = reader.result;
      setProfilePicture(profilePictureData);
      localStorage.setItem('profilePicture', profilePictureData);
    };

    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeProfilePicture = () => {
    setProfilePicture('');
    localStorage.removeItem('profilePicture');
  };

  return (
    <div>
      <div className="profile-container">
        {profilePicture ? (
          <img
            src={profilePicture}
            alt="Profile"
            className="profile-picture"
          />
        ) : (
          <div
            {...getRootProps()}
            className={`dropzone${isDragActive ? ' active' : ''}`}
          >
            <input {...getInputProps()} />
            <p className='dandd'>Drag and drop an image here, or click to select files</p>
          </div>
        )}
        <br />
        {profilePicture && (
          <button onClick={removeProfilePicture} className="remove-button">
            Remove
          </button>
        )}
        <br /><br />
      </div>
    </div>
  );
};

export default ProfilePictureUpload;
