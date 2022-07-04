import React from 'react';
import './Person.scss';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const createTextAboutPartner = () => {
    return (
      `My ${sex === 'f' ? 'husband\'s' : 'wife\'s'} name is ${partnerName}`
    );
  };

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        { isMarried
          ? createTextAboutPartner()
          : 'I am not married'
        }
      </p>
    </section>
  );
}
