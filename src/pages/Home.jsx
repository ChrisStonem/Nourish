import React, { useEffect, useState } from 'react';

export const Home = () => {
  const [username, setUsername] = useState('');
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [status, setStatus] = useState('');
  
  useEffect(() => {
    // Retrieve profile name from local storage on component mount
    const storedProfileName = localStorage.getItem('profileName');
    if (storedProfileName) {
      setUsername(storedProfileName);
    }

    // Retrieve counter value from local storage on component mount
    const storedCounter1 = localStorage.getItem('counter1');
    if (storedCounter1) {
      setCounter1(parseInt(storedCounter1));
    }
    const storedCounter2 = localStorage.getItem('counter2');
    if (storedCounter2) {
      setCounter2(parseInt(storedCounter2));
    };

    const totalPoints = counter1 + counter2;
    if (totalPoints >= 0 && totalPoints <= 10) {
      setStatus('Beginner');
    } else if (totalPoints >= 11 && totalPoints <= 20) {
      setStatus('Novice');
    } else if (totalPoints >= 21 && totalPoints <= 30) {
      setStatus('Developing');
    } else if (totalPoints >= 31 && totalPoints <= 40) {
      setStatus('Exploring');
    } else if (totalPoints >= 41 && totalPoints <= 50) {
      setStatus('Advancing');
    } else if (totalPoints >= 51 && totalPoints <= 60) {
      setStatus('Expanding');
    } else if (totalPoints >= 61 && totalPoints <= 70) {
      setStatus('Improving');
    } else if (totalPoints >= 71 && totalPoints <= 80) {
      setStatus('Nourishing');
    } else if (totalPoints >= 81 && totalPoints <= 90) {
      setStatus('Growing');
    } else if (totalPoints >= 91 && totalPoints <= 100) {
      setStatus('Enriching');
    } else if (totalPoints >= 101 && totalPoints <= 110) {
      setStatus('Flourishing');
    } else if (totalPoints >= 111 && totalPoints <= 120) {
      setStatus('Progressive');
    } else if (totalPoints >= 121 && totalPoints <= 130) {
      setStatus('Skilled');
    } else if (totalPoints >= 131 && totalPoints <= 140) {
      setStatus('Proficient');
    } else if (totalPoints >= 141 && totalPoints <= 150) {
      setStatus('Food Expert');
    }
  }, [counter1, counter2]);
    
  return(
    <>
      <div className="maincontent1">
        <div className='greeting'>
        <h2>Hello, {username}!</h2>
        <h3>nice to have you back!</h3>
        </div>
        <div className="circle">
          <h4 className="text1">you've collected</h4>
          <h4 className="number">{counter1+counter2}</h4>
          <h4 className="text2">points so far</h4>
        </div>
        <div className='status'>
        <h3>that makes you a</h3>
        <h2>{status}</h2>
        </div>
      </div>
    </>
  );}