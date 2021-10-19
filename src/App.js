import React from "react";
import "./App.scss";
import Person from "./components/Person";

const users = [
  {
    name: "Misha",
    age: 37,
    sex: "m",
    isMarried: true,
    partnerName: "Natasha",
  },
  {
    name: "Olya",
    sex: "f",
    isMarried: true,
    partnerName: "Maksym",
  },

  {
    name: "Alex",
    age: 25,
    sex: "m",
    isMarried: false,
  },
];

const App = () => (
  <div className="App">
    {users.map(({ name, age, isMarried, partnerName, sex }) => {
      return (
        <Person
          name={name}
          age={age}
          isMarried={isMarried}
          partnerName={partnerName}
          sex={sex}
        />
      );
    })}
  </div>
);

export default App;
