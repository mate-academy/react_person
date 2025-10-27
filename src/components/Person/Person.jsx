import cn from 'classnames';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const isMale = sex === 'm';
  const partnerRole = isMale ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className={cn('Person__name', {})}>{`My name is ${name}`}</h2>
      {age && <p className={cn('Person__age', {})}>{`I am ${age}`}</p>}

      <p className={cn('Person__partner', {})}>
        {isMarried ? `${partnerName} is my ${partnerRole}` : 'I am not married'}
      </p>
    </section>
  );
};
