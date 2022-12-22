import React from 'react';
import './Person.scss';

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
        {isMarried
          ? `${partnerName} is my ${partner}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};

/* <section className="Person">
<h2 className="Person__name">My name is Olya</h2>
<p className="Person__partner">Maksym is my husband</p>
</section>

<section className="Person">
<h2 className="Person__name">My name is Alex</h2>
<p className="Person__age">I am 25</p>
<p className="Person__partner">I am not married</p>
</section>
 */
