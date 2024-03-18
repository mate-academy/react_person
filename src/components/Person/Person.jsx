export const Person = ({ person }) => {
  const getmaried = [];

  if (person.isMarried && person.sex === 'f') {
    getmaried.push('husband');
  }

  if (person.isMarried && person.sex === 'm') {
    getmaried.push('wife');
  }

  if (!person.isMarried && person.age) {
    getmaried.push('I am not married');

    return (
      <section className="Person">
        <h2 className="Person__name">My name is {person.name}</h2>
        <p className="Person__age">I am {person.age}</p>
        <p className="Person__partner">{getmaried}</p>
      </section>
    );
  }

  if (!person.isMarried && !person.age) {
    getmaried.push('I am not married');

    return (
      <section className="Person">
        <h2 className="Person__name">My name is {person.name}</h2>
        <p className="Person__partner">{getmaried}</p>
      </section>
    );
  }

  if (!person.age) {
    return (
      <section className="Person">
        <h2 className="Person__name">My name is {person.name}</h2>
        <p className="Person__partner">
          {person.partnerName} is my {getmaried}
        </p>
      </section>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      <p className="Person__age">I am {person.age}</p>
      <p className="Person__partner">
        {person.partnerName} is my {getmaried}
      </p>
    </section>
  );
};
