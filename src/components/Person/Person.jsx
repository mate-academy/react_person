import cn from 'classnames';

export const Person = ({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) => (
  <section className={cn('Person')}>
    <h2 className={cn('Person__name')}>{`My name is ${name}`}</h2>
    {age && (
      <p className={cn('Person__age')}>{`I am ${age}`}</p>
    )}
    <p className={cn('Person__partner')}>
      {isMarried ? (
        `${partnerName} is my ${sex === 'm' ? (
          'wife'
        ) : (
          'husband'
        )}`
      ) : (
        'I am not married'
      )}
    </p>
  </section>
);
