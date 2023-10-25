import React from 'react';
import './App.css';

function App() {

    const names = ["Dimych", "Svets", "Katya", "Viktor", "Ignat"]

    const users= [
        {id: 489, name: "Dimych"},
        {id: 981,name: "Svets"},
        {id: 895, name: "Katya"},
        {id: 930, name: "Viktor"},
        {id: 984, name: "Ignat"},
  ]
  const liElements = users.map(users => <li key={users.id}>{users.name}</li>)

    return (
        <div className="App">
            <ul>
              {liElements}
            </ul>
        </div>
    );
}

export default App;
