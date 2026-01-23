import cn from 'classnames';

export const Person = ({ person }) => {
  return (
    <section
      className={cn('Person', {
        'Person--married': person.isMarried,
        'Person--male': person.sex === 'm',
        'Person--female': person.sex === 'f',
      })}
    >
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age !== undefined && (
        <p className="Person__age">I am {person.age}</p>
      )}
      <p
        className={cn('Person__partner', {
          'Person__partner--married': person.isMarried,
          'Person__partner--single': !person.isMarried,
        })}
      >
        {person.isMarried
          ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`
          : 'I am not married'}
      </p>
    </section>
  );
};
