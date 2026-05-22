import { createRoot } from 'react-dom/client';

// 1. Importamos o Person E também os objetos que você criou lá dentro
import { Person, misha, olya, alex } from './Person'; 

createRoot(document.getElementById('root')).render(
  <div className="main">
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
); // 2. Parênteses e ponto e vírgula devidamente fechados aqui!