import { useState } from "react";
import Header from './components/Header'
import Main from './components/Main'
import "./App.css";

function App() {

  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id ))
  }

  console.log(todos);


  return (
    <section className="todoapp">
      <Header todos={todos} setTodos={setTodos} />

      <Main todos={todos} deleteTodo={deleteTodo} />
    </section>
  );
}

export default App;
