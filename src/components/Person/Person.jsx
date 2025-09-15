import '../../App.scss';

export function Person({ person }) {
  let partnerMessage;

  if (person.isMarried === false) {
    partnerMessage = <span>I am not married</span>;
  } else if (person.sex === 'm') {
    partnerMessage = <span>{person.partnerName} is my wife</span>;
  } else if (person.sex === 'f') {
    partnerMessage = <span>{person.partnerName} is my husband</span>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {person.age && (
        <p className="Person__age">
          <span>{person.age}</span>
        </p>
      )}

      <p className="Person__partner">{partnerMessage}</p>
    </section>
  );
}
