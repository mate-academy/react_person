import React from 'react';
import { Person } from './Person';
import './App.css';

const misha = { name: 'Misha', age: 29, gender: 'male', isMarried: true, partnerName: 'Anna' };
const jane = { name: 'Jane', gender: 'female', isMarried: false };
const john = { name: 'John', age: 40, gender: 'male', isMarried: true, partnerName: 'Emily' };

function App() {
    return (
        <div className="App">
            <Person person={misha} />
            <Person person={jane} />
            <Person person={john} />
        </div>
    );
}

export default App;
