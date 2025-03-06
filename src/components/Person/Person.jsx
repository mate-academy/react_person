import React from 'react';

export const Person = ({ person }) => {
  const renderPartnerStatus = () => {
    if (person.isMarried) {
      if (person.sex === 'm') {
        return (
          <p className="Person__partner">{`${person.partnerName} is my wife`}</p>
        );
      }

      if (person.sex === 'f') {
        return (
          <p className="Person__partner">{`${person.partnerName} is my husband`}</p>
        );
      }

      return (
        <p className="Person__partner">{`${person.partnerName} is my partner`}</p>
      );
    }

    return <p className="Person__partner">I am not married</p>;
  };

  return (
    <div className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <div>
        {person.age && <p className="Person__age">I am {person.age}</p>}
      </div>
      <div>{renderPartnerStatus()}</div>
    </div>
  );
};
