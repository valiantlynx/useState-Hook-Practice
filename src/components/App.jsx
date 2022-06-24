import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString("en-GB");
  const [time, setTime] = useState(now);

  function getDate() {
    const newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }

  setInterval(getDate, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getDate}>Get Time</button>
    </div>
  );
}

export default App;
