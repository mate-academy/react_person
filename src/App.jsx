import Person from './components/Person/Person';

export const App = () => {
  const misha = {
    name: 'My name is Misha',
    age: 37,
    isMarried: true,
    gender: 'male',
    partnerName: 'Natasha',
  };

  const olya = {
    name: 'My name is Olya',
    isMarried: true,
    gender: 'female',
    partnerName: 'Maksym',
  };

  const alex = {
    name: 'My name is Alex',
    age: 25,
    isMarried: false,
    gender: 'male',
  };

  return (
    <div>
      <Person person={misha} />
      <Person person={olya} />
      <Person person={alex} />
    </div>
  );
};

export default App;
