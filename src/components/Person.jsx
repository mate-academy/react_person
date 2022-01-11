import React from 'react';
import './Person.scss';

const partnerSex = sex => (sex === 'm' ? 'wife' : 'husband');

function Person({
  name = '',
  age = null,
  sex = '',
  isMarried = false,
  partnerName = '',
}) {
  return (
    <section className="Person">
      {name && <h2 className="Person__name">{`My name is ${name}`}</h2>}
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried
          ? `My ${partnerSex(sex)}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
}

export default Person;
