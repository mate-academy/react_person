import React from 'react';
import '../../App.scss';

export function Person({ person }) {
  const { name, sex, isMarried, partnerName } = person;

  // вычисляем роль партнёра заранее
  const partnerRole = sex === 'm' ? 'wife' : 'husband';

  return (
    <div className="Person">
      <p className="Person__name">My name is {name}</p>

      {'age' in person && <p className="Person__age">I am {person.age}</p>}

      {isMarried ? (
        <p className="Person__partner">
          {partnerName} is my {partnerRole}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </div>
  );
}
