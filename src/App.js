import React from 'react';
import Tabs from "./components/Tabs";
import Current from "./components/Current";
import Past from "./components/Past";
import Next from "./components/Next";

import './App.css';

function App() {
  return (
    <div>
      <h1>Book Club</h1>
      <Tabs>
        <div label="Current Read">
          <Current />
        </div>
        <div label ="Past Reads">
          <Past />
        </div>
        <div label="Next Up">
          <Next />
        </div>
      </Tabs>
    </div>
  );
}

export default App;
