import React from 'react';
import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const ifMarried = (sex === 'm'
    ? `My wife name is ${partnerName}`
    : `My husband's name ${partnerName}`);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (<p className="Person__age">{`I am ${age}`}</p>)}

      <p className="Person__partner">
        {
          isMarried
            ? ifMarried
            : 'I am not married'
        }
      </p>
    </div>
  );
};
