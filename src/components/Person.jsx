import React from 'react';

import './Person.scss';

export const Person = ({ props }) => {
  const { name, age, sex, isMarried, partnerName } = props;

  const marriageProps = () => {
    if (!isMarried) {
      return 'I am not married.';
    }

    return partnerName
      ? `My ${sex === 'f' ? ('husband') : ('wife')} name is ${partnerName}.`
      : 'I am married.';
  };

  return (
    <div className="Person">
      <h2 className="Person__name">
        {`My name is ${name}.`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}.`}
        </p>
      )}

      <p className="Person__partner">
        {marriageProps(sex, isMarried, partnerName)}
      </p>
    </div>
  );
};
