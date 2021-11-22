import React from "react";
import "./App.scss";
import { Person } from "./components/Person";

const misha = {
  name: "Misha",
  age: 37,
  sex: "m",
  isMarried: true,
  partnerName: "Natasha",
};

const olya = {
  name: "Olya",
  sex: "f",
  isMarried: true,
  partnerName: "Maksym",
};

const alex = {
  name: "Alex",
  age: 25,
  sex: "m",
  isMarried: false,
};

const folks = [misha, olya, alex];

const App = () => (
  <div className="App">
    <div className="folks">
      {folks.map(folk => (
        <Person
          name={folk.name}
          age={folk.age}
          sex={folk.sex}
          isMarried={folk.isMarried}
          partnerName={folk.partnerName}
        />
      ))}
    </div>
  </div>
);

export default App;
