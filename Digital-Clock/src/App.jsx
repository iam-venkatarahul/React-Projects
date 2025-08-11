
import React, { useState, useEffect } from 'react';
// Importing React and necessary hooks
// useState for managing state and useEffect for side effects
// Importing CSS for styling the component
import { use } from 'react';
import './App.css'

export default function App() {

  const[time, setTime] = useState(new Date());
  
  // Update the time every second
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());} , 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    });
       
  return (
    <>
      <div className="Clock-Container">
        <div className="Clock">
            {formattedTime}
        </div>
      </div>
    </>
  )
}
