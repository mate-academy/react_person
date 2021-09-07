import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

const App = () => (
  <div className="App">
    <Person
      personName={misha.name}
      age={misha.age}
      sex={misha.sex}
      isMarried={misha.isMarried}
      partnerName={misha.partnerName}
    />
    <Person
      personName={olya.name}
      age={olya.age}
      sex={olya.sex}
      isMarried={olya.isMarried}
      partnerName={olya.partnerName}
    />
    <Person
      personName={alex.name}
      age={alex.age}
      sex={alex.sex}
      isMarried={alex.isMarried}
      partnerName={alex.partnerName}
    />
  </div>
);

const Person = ({
  personName,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {personName}
    </h2>
    <p className="Person__age">{age !== 0 && `I am ${age}`}</p>
    <p className="Person__partner">
      {isMarried
        ? (sex === 'm' && `My wife's name is ${partnerName}`)
        || (sex === 'f' && `My husband's name is ${partnerName}`)
        : 'I am not married'}
    </p>
  </section>
);

Person.propTypes = {
  personName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string.isRequired,
};

export default App;
