import React from 'react';
import './Person.scss';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name || 'noname'}`}
    </h2>

    {age ? (
      <p className="Person__age">{`I am ${age}`}</p>
    ) : (null)
    }

    {(() => {
      if (isMarried) {
        if (partnerName) {
          if (sex === 'm') {
            return (<p>{`My wife's name is ${partnerName}`}</p>);
          }

          if (sex === 'f') {
            return (<p>{`My husband's name is ${partnerName}`}</p>);
          }
        }

        return (<p>I am married, and my spouse&apos;s name is top secret</p>);
      }

      if (isMarried === false) {
        return (<p>I am not married</p>);
      }

      return null;
    })()}
  </section>
);

export default Person;
