import './App.scss';
import { Person } from './components/Person/Person';

export const misha: IPerson = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya: IPerson = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex: IPerson = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

const App: React.FC = () => (
  <div className="App">
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);

export default App;
