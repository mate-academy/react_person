import React from 'react';

export const Person = ({ person }) => {
  // дістаємо поля з обʼєкта person
  const { name, age, sex, isMarried, partnerName } = person;

  // визначаємо як називати партнера
  // prettier-ignore
  const partnerWord = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      {/* Імʼя */}
      <h2 className="Person__name">My name is {name}</h2>

      {/* Вік показуємо ТІЛЬКИ якщо він існує */}
      {age && <p className="Person__age">I am {age}</p>}

      {/* Якщо одружений */}
      {isMarried ? (
        <p className="Person__partner">
          {partnerName} is my {partnerWord}
        </p>
      ) : (
        // Якщо НЕ одружений
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
