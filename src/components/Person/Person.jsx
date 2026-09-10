import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  // Формуємо текст про партнера відповідно до тестів
  let partnerText = 'I am not married';

  if (isMarried) {
    if (sex === 'm') {
      partnerText = `${partnerName} is my wife`;
    } else if (sex === 'f') {
      partnerText = `${partnerName} is my husband`;
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {/* Показуємо вік лише якщо він переданий */}
      {age !== undefined && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
