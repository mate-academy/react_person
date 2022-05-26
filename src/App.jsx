import React from 'react';
import './App.scss';
import { PersonalInfo } from './componenta/personal_info/index';
import { misha, olya, alex } from './componenta/users/index';

const App = () => (
  <div className="App">
    <PersonalInfo person={misha} />

    <PersonalInfo person={olya} />
    <PersonalInfo person={alex} />
  </div>
);

export default App;
