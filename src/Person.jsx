import './App.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried,
    partnerName = 'I am not married' } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>
      <p className="Person__age">
        {age && (
          <>
            I am
            {' '}
            {age}
          </>
        )}
      </p>
      <p className="Person__partner">
        {sex === 'm' && isMarried === true
          ? `${partnerName} is my wife`
          : ''
        }

        {sex === 'f' && isMarried === true
          ? `${partnerName} is my husband`
          : ''
        }
      </p>
    </section>
  );
};
