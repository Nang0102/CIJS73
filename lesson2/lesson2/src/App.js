import "./App.css";
import "./components/Title/index";
import { Title } from "./components/Title/index";
import "./components/TodoList";
import { TodoList } from "./components/TodoList";

const App = () => {
  console.log(<TodoList />);
  return (
    <div>
      <Title />
      <TodoList className=" Todo " id="Cleanup bedroom" />
      <TodoList className="Todo" id="Buy some milk" />
      <TodoList className="Todo" id="Jogging" />
      <TodoList className="Todo" id="Learn React" />
      <TodoList className="Todo" id="Doing Exercies" />
      {" "}
    </div>
  );
};

export default App;
