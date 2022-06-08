import React from 'react';
import './style.scss';

function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const spouse = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {name}
      </h2>
      {age && (
        <p className="Person__age">
          I am
          {age}
        </p>
      )}
      <p className="Person__partner">
        { isMarried ? `My ${spouse}'s name is ${partnerName}`
          : 'I am not married'}
      </p>
    </section>

  );
}

Person.defaultProps = {
  name: '',
  age: undefined,
  sex: '',
  isMarried: false,
  partnerName: undefined,
};

export default Person;
