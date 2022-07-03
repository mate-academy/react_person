import React from 'react';

function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
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
          ? (`My ${sex === 'f' ? 'husband\'s' : 'wife\'s'} mame is ${partnerName}`)
          : 'I am not married'}
      </p>
    </section>
  );
}

export default Person;
