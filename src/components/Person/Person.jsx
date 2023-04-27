import React from 'react';

const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const marriedSex = sex === 'f' ? 'husband' : 'wife';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>

        {age && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )}

        {!isMarried ? (
          <p className="Person__partner">I am not married</p>
        ) : (
          <p className="Person__partner">
            {isMarried ? `${partnerName} is my ${marriedSex}` : ''}
          </p>
        )}
      </section>
    </div>
  );
};

export default Person;
