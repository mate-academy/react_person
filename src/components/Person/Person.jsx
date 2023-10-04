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

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>

    {person.age && <p className="Person__age">{`I am ${person.age}`}</p>
    }
    <p className="Person__partner">{getMarried(person)}</p>
  </section>
);
