import React from 'react';

const Person = ({ person }) => {
  const renderPartner = () => {
    if (!person.isMarried) {
      return 'I am not married';
    }

    return person.gender === 'male'
      ? `${person.partnerName} is my wife`
      : `${person.partnerName} is my husband`;
  };

  return (
    <div className="Person">
      <h2 className="Person__name">{person.name}</h2>
      {person.age && <p className="Person__age">Age: {person.age}</p>}

      <p className="Person__partner">{renderPartner()}</p>
    </div>
  );
};

export default Person;
