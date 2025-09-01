import './App.css';
import { Person } from './components/Person/Person';
import { misha, olya, alex } from './people';

function App() {
  return (
    <div className="App">
      <Person person={misha} />
      <Person person={olya} />
      <Person person={alex} />
    </div>
  );
}

export default App;
