import React from 'react';

// Деструктуризуємо проп person прямо в аргументах функції
export const Person = ({ person }) => {
  // Витягуємо конкретні властивості з об'єкта для зручного використання
  const { name, age, partnerName, sex, isMarried } = person;

  return (
    <div className="Person">
      {/* Рендеримо заголовок лише якщо ім'я існує (логічне &&) */}
      {name && <h1 className="Person__name">{`My name is ${name}`}</h1>}

      {/* Рендеримо вік лише якщо він переданий в об'єкті */}
      {age && <p className="Person__age">{`age: ${age}`}</p>}

      <p className="Person__partner">
        {/* Тернарний оператор: якщо одружений — показуємо партнера, інакше — статус */}
        {isMarried
          ? `${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`
          : 'I am not married'}
        {/* Вкладений тернарний оператор для вибору правильного
            слова (husband/wife) залежно від статі */}
      </p>
    </div>
  );
};
