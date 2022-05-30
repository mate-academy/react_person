import React from 'react';
import './App.scss';
import { PersonalInfo } from './componenta/personalInfo';
import { misha, olya, alex } from './componenta/users/users';

const App = () => (
  <div className="App">
    <PersonalInfo person={misha} />
    <PersonalInfo person={olya} />
    <PersonalInfo person={alex} />
  </div>
);

export default App;
