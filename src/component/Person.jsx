import React from 'react';
import './Person.scss';

const Person = ({ name, isMarried, sex, partnerName, age }) => {
  const spouse = (sex === 'm' ? 'wife' : 'husband');
  const partner = isMarried
    ? `My ${spouse}'s name is ${partnerName}`
    : 'I am not married';

      <section className="Person__name">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>

        { age && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )
        }

        <p>
          {partner}
        </p>

      </section>;
};

export default Person;
