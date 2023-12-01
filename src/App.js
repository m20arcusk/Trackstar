import React, { useState } from 'react';
import NewWindow from 'react-new-window'
import './App.css';

/* global chrome */

const App = () => {

  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [timePerQuestion, setTimePerQuestion] = useState(30); // Default time in seconds

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const overlay = document.createElement('div');
    overlay.innerHTML = '<p>This is the overlay content.</p>';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(255, 255, 255, 0.8)'; // semi-transparent white background

    // Append the overlay to the body
    document.body.appendChild(overlay);

  };
  return (
    <div className="App">
      <h1>Trackstar</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="numberOfQuestions">Number of Questions:</label>
        <input
          type="number"
          id="numberOfQuestions"
          name="numberOfQuestions"
          min="1"
          value={numberOfQuestions}
          onChange={(e) => setNumberOfQuestions(e.target.value)}
          required
        />

        <label htmlFor="timePerQuestion">Time allotted per Question (in seconds):</label>
        <input
          type="number"
          id="timePerQuestion"
          name="timePerQuestion"
          min="1"
          value={timePerQuestion}
          onChange={(e) => setTimePerQuestion(e.target.value)}
          required
        />
        <button id="openNew" type="submit">Create Quiz</button>
      </form>
    </div>

  );
}

export default App;
