import './Person.scss';

function getMarried({ isMarried, sex, partnerName }) {
  if (!isMarried) {
    return 'I am not married';
  }

  if (sex === 'm') {
    return `${partnerName} is my wife`;
  }

  return `${partnerName} is my husband`;
}

export const Person = ({ person }) => {
  const { name, age } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {getMarried(person)}
      </p>
    </section>
  );
};
