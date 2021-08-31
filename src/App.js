import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

// export const App1 = () => (
//  <div className="App">
//    <section className="Person">
//      <h2 className="Person__name">My name is Misha</h2>
//      <p className="Person__age">I am 37</p>
//      <p className="Person__partner">My wife&apos;s name is Natasha</p>
//    </section>

//    <section className="Person">
//      <h2 className="Person__name">My name is Olya</h2>
//      <p className="Person__partner">My husband&apos;s name is Maksym</p>
//    </section>

//    <section className="Person">
//      <h2 className="Person__name">My name is Alex</h2>
//      <p className="Person__age">I am 25</p>
//      <p className="Person__partner">I am not married</p>
//    </section>
//  </div>
// );

export function App({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">
          {'My name is '}
          {name}
        </h2>
        <p className="Person__age">
          {age ? `I am ${age}` : null}
        </p>
        <p className="Person__partner">
          {' '}
          { isMarried
            ? `My  ${sex === 'f'
              ? `husband's`
              : `wife's`} name is ${partnerName}`
            : 'I am not married' }
        </p>
      </section>

    </div>
  );
}

App.propTypes = {
  person: PropTypes.string.isRequired,
};
