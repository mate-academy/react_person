import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person'; // Змінено на іменований імпорт
import personData from './PersonData.json';

const App = () => (
  <div className="App">
    <Person person={personData.misha} />
    <Person person={personData.olya} />
    <Person person={personData.alex} />
  </div>
);

export default App;
