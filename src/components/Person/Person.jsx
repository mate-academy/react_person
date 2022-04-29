import React from 'react';
import './Person.scss';

export const Person = ({ namePerson }) => {
  const { name, age, sex, isMarried, partnerName } = namePerson;

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>

        {age && (
          <p className="Person__age">{`I am ${age}`}</p>
        )}

        {isMarried
          ? (
            <p className="Person__partner">
              {`My ${sex === 'm' ? 'wife' : 'husband'} name is ${partnerName}`}
            </p>
          )
          : (
            <p className="Person__partner">
              I am not married
            </p>
          )
        }
      </section>
    </>
  );
};
