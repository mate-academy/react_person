// export const Person = ({ person }) => ();
import React from 'react';

function Person({ person }) {
  const displayAge = person.age !== undefined && person.age !== null;
  let partnerInfo;

  if (!person.isMarried) {
    partnerInfo = <p className="Person__partner">I am not married</p>;
  } else {
    const partnerType = person.sex === 'm' ? 'wife' : 'husband';

    partnerInfo = (
      <p className="Person__partner">
        My {partnerType} is {person.partnerName}
      </p>
    );
  }

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {displayAge && <p className="Person__age">I am {person.age}</p>}
      {partnerInfo}
    </div>
  );
}

export { Person };
