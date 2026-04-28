import { Person } from './components/Person/Person';

const misha = {
  name: 'Misha',
  sex: 'm',
  isMarried: true,
  partnerName: 'Olya',
};

const olya = {
  name: 'Olya',
  age: 32,
  sex: 'f',
  isMarried: true,
  partnerName: 'Misha',
};

const alex = {
  name: 'Alex',
  age: 26,
  sex: 'm',
  isMarried: false,
};

export const App = () => (
  <div className="App">
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);
