import React from 'react';

type Props = {
  person: IPerson,
};

export const Person: React.FC<Props> = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {
          isMarried && sex === 'm' && `My wife\`s name is ${partnerName}`
        }
        {
          isMarried && sex === 'f' && `My husband\`s name is ${partnerName}`
        }
        {
          !isMarried && 'I am not married'
        }
      </p>
    </section>
  );
};
