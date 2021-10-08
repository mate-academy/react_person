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

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <>
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age !== null && `I am ${age}`}
      </p>
      <p className="Person__partner">
        {isMarried
          ? `My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  </>
);

Person.defaultProps = {
  name: null,
  age: null,
  sex: null,
  isMarried: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

const App = () => (
  <div className="App">
    <Person {...misha} />
    <Person {...olya} />
    <Person {...alex} />
  </div>
);

export default App;
