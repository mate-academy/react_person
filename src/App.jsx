import React from 'react';

export const Person = ({ person }) => {
  const { name, age } = person;

  return (
    <div className="Person">
      <h2>{name}</h2>
      {age !== undefined && age !== null && <p>Age: {age}</p>}
    </div>
  );
};

export const misha = { name: 'Misha', age: 25 };
export const olya = { name: 'Olya', age: 0 }; // Added age property
export const alex = { name: 'Alex', age: 30 };
