import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partner = sex === 'm'
    ? 'wife'
    : 'husband';

  const marriedStatus = isMarried
    ? `${partnerName} is my ${partner}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">
            {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {marriedStatus}
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: undefined,
  partnerName: undefined,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

//   }
//     <section className="Person">
//       <h2 className="Person__name">My name is Misha</h2>
//       <p className="Person__age">I am 37</p>
//       <p className="Person__partner">Natasha is my wife</p>
//     </section>

//     <section className="Person">
//       <h2 className="Person__name">My name is Olya</h2>
//       <p className="Person__partner">Maksym is my husband</p>
//     </section>

//     <section className="Person">
//       <h2 className="Person__name">My name is Alex</h2>
//       <p className="Person__age">I am 25</p>
//       <p className="Person__partner">I am not married</p>
//     </section>
