import React from 'react';

export const Person = ({ person }) => {
  // По умолчанию считаем, что человек не в браке
  let partnerText = 'I am not married';

  // Если в браке, проверяем пол и меняем текст
  if (person.isMarried) {
    partnerText =
      person.sex === 'm'
        ? `${person.partnerName} is my wife`
        : `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {/* Условный рендеринг возраста */}
      {person.age && <p className="Person__age">I am {person.age}</p>}

      {/* Выводим подготовленный текст про партнера */}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
