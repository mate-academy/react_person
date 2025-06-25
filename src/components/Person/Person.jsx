import React from 'react';

export const Person = ({ person }) => {
  const { name, age = null, sex, isMarried, partnerName = null } = person;
  const partnerSex = sex === 'm' ? 'wife' : 'husband';
  const notMarried = 'I am not married';

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && (
          <p className="Person__age">{`I am ${age}`}</p>
        )}
        {isMarried ? (
          <p className="Person__partner">
            {`${partnerName} is my ${partnerSex}`}
          </p>
        ) : (
          <p className="Person__partner">{notMarried}</p>
        )}
      </section>
    </>
  );
};

Person.defaultProps = {

};
