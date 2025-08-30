import classNames from 'classnames';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const role = sex === 'm' ? 'wife' : 'husband';

  const partnerBlock = isMarried
    ? `${partnerName} is my ${role}`
    : 'I am not married';

  return (
    <section
      className={classNames('Person', {
        'Person--married': isMarried,
      })}
    >
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerBlock}</p>
    </section>
  );
};
