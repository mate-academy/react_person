import { Partner } from '../Partner';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined ? <p className="Person__age">I am {age}</p> : ''}
      <Partner sex={sex} isMarried={isMarried} partnerName={partnerName} />
    </section>
  );
};
