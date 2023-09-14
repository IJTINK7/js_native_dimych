import React from 'react';
import './App.css';
import {User} from "./06-callback_events/06";

function App() {
    const names = ["Roma", "Igor", "Anna"]
    const users = [
        {id: 1, name: "Anton"},
        {id: 2, name: "Denis"},
        {id: 3, name: "Kate"},
      ]
  return (
    <div className="App">
        JS with Dimych
        <ul>
            {names.map((el, index) => <li>index: {index}, name: {el}</li>)}
        </ul>
        <ol>
            {users.map(el=><li key={el.id}>{el.name}</li>)}
        </ol>
        <User/>
    </div>
  );
}

export default App;
