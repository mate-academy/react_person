import { FC } from 'react';
import { IPerson } from '../../types/Person';

interface Props {
  person: IPerson;
}

export const Person: FC<Props> = ({ person }) => {
  const {
    name,
    age,
    isMarried,
    partnerName,
    sex,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      {isMarried && (
        <>
          {sex === 'm' && <p className="Person__partner">{`My wife's name is ${partnerName}`}</p>}
          {sex === 'f' && <p className="Person__partner">{`My husband's name is ${partnerName}`}</p>}
        </>
      )}
      {!isMarried && <p className="Person__partner">I am not married</p>}
    </section>
  );
};
