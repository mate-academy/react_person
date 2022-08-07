import React from 'react';

export function Person({ person }) {
  const partner = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <div className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}

      <p className="Person__partner">
        {person.isMarried ? (
          `My ${partner}'s name is ${person.partnerName}`
        ) : (
          `I am not married`
        )}
      </p>
    </div>
  );
}
