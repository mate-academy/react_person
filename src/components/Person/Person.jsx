import classNames from 'classnames';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      <p className={classNames('', { Person__age: age })}>
        {age ? <p>I am {age}</p> : <></>}
      </p>

      <p className={classNames('', { Person__partner: partnerName })}>
        {isMarried ? `${partnerName} is my ${partner}` : `I am not married`}
      </p>
    </section>
  );
};
