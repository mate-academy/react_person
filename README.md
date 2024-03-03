# React person

Implement a `Person` component rendering a person details using the given markup
and use it 3 times inside the `App` instead of static markup.

- pass the whole person as a prop `<Person person={misha} />` (**not** individual fields);
- omit `age` if it is not given;
- if a man is married use `wife` for a partner and `husband` if a woman is married;
- if a person is not marriend - print `I am not married` message;
- keep the same classNames in `Person.jsx` as in `App.jsx` (`Person`, `Person__name`, `Person__age`, `Person__partner`).

## Instructions
- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_person/) and add it to the PR description.

- передать всего человека в качестве реквизита `<Person person={misha} />` (**а не** отдельные поля);
- опустить `возраст`, если он не указан;
- если мужчина женат, используйте слово «жена» для партнера и «муж», если женщина замужем;
- если человек не состоит в браке - выведите сообщение «Я не женат»;
- сохраняйте в Person.jsx те же имена классов, что и в App.jsx («Person», «Person__name», «Person__age», «Person__partner»).

<div className="App">
  <section className="Person">
    <h2 className="Person__name">My name is Misha</h2>
    <p className="Person__age">I am 37</p>
    <p className="Person__partner">Natasha is my wife</p>
  </section>

  <section className="Person">
    <h2 className="Person__name">My name is Olya</h2>
    <p className="Person__partner">Maksym is my husband</p>
  </section>

  <section className="Person">
    <h2 className="Person__name">My name is Alex</h2>
    <p className="Person__age">I am 25</p>
    <p className="Person__partner">I am not married</p>
  </section>
</div>

{person.isMarried ? (
  person.sex === 'm' ? (
    <p className="Person__partner">{`My wife is ${person.partnerName}`}</p>
  ) : (
    <p className="Person__partner">{`My husband is ${person.partnerName}`}</p>
  )
) : (
  <p className="Person__partner">I am not married</p>
)}


В тебе тернарні оператори наслідуються, спробуй спростити цей запис. Винеси not married і запиши його так, як писав person.age
