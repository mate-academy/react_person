import React from 'react';

import { Person } from './component/Person';
import './App.scss';

// const misha = {
//   name: 'Misha',
//   age: 37,
//   sex: 'm',
//   isMarried: true,
//   partnerName: 'Natasha',
// };

// const olya = {
//   name: 'Olya',
//   sex: 'f',
//   isMarried: true,
//   partnerName: 'Maksym',
// };

// const alex = {
//   name: 'Alex',
//   age: 25,
//   sex: 'm',
//   isMarried: false,
// };

const App = () => (
  <div className="App">
    <Person
      name="Misha"
      age={37}
      sex="m"
      partnerName="Natasha"
      isMarried
    />

    <Person
      name="Olya"
      sex="f"
      partnerName="Maksym"
      isMarried
    />

    <Person
      name="Alex"
      age={25}
    />
  </div>
);

export default App;

/**
 * Create a Person component and use it instead of repeating markup in the App

Use conditional rendering
Move styles to correct file
Extra task (optional):
Add props validation using PropTypes library and defaultProps
 */
