/* eslint-disable no-nested-ternary */
export const Person = ({ person }) => {
  // Логика для определения партнера
  let partnerMessage = 'I am not married';

  if (person.isMarried) {
    partnerMessage =
      person.sex === 'm'
        ? `${person.partnerName} is my wife`
        : `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <p className="Person__age">{person.age && `I am ${person.age}`}</p>
      <p className="Person__partner">{partnerMessage}</p>
    </section>
  );
};
