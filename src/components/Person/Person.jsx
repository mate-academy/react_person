const hasValue = ([, value]) => {
  return value !== null && value !== undefined;
};

const strategy = {
  name: p => {
    return <h2 className="Person__name">{`My name is ${p.name}`}</h2>;
  },

  age: p => {
    return <p className="Person__age">{`I am ${p.age}`}</p>;
  },

  isMarried: p => {
    const marriedStrategy = {
      false: () => <p className="Person__partner">I am not married</p>,

      true: () => {
        const label = p.sex === 'm' ? 'wife' : 'husband';

        return (
          <p className="Person__partner">{`${p.partnerName} is my ${label}`}</p>
        );
      },
    };

    return marriedStrategy[p.isMarried]();
  },
};

export const Person = ({ person }) => {
  return (
    <section className="Person">
      {Object.entries(person)
        .filter(hasValue)
        .map(([key]) => strategy[key]?.(person))
        .filter(Boolean)}
    </section>
  );
};
