import React from 'react';
const Person = ({ person }) => {

  const { name, age, partnerName, gender } = person;

  return (
    <div className="person-card">
      <h2>Name: {name}</h2>

      {age && <p>Age: {age}</p>}

      <p>
        {partnerName
          ? (gender === 'male' ? `Wife: ${partnerName}` : `Husband: ${partnerName}`)
          : 'I am not married'
        }
      </p>
    </div>
  );
};

export default Person;
