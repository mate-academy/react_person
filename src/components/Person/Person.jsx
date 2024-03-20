/* eslint-disable no-nested-ternary */
// eslint-disable-next-line import/no-unresolved
import './person.scss';

export const Person = ({
  person: { name, age, isMarried, sex, partnerName },
}) => {
  const maritalStatus = isMarried
    ? sex === 'm'
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{maritalStatus}</p>
    </section>
  );
};
