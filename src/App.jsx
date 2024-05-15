import { useState, useEffect } from 'react';
// import './App.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    // return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    return `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="stopwatch">
      <div className="time">{formatTime()}</div>
      <div className="buttons">
        {isRunning ? (
          <button onClick={startStop}>Stop</button>
        ) : (
          <button onClick={startStop}>Start</button>
        )}
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <Stopwatch />
    </div>
  );
}

export default App;
