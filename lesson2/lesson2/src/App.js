import "./App.css";
import "./components/Title/index";
import { Title } from "./components/Title/index";
import "./components/TodoList";
import { TodoList } from "./components/TodoList";

const App = () => {
  console.log(<TodoList/>);
  return (
    <div>
      <Title /> 
       <TodoList 
        
        li="Clean up bedroom"
       
       />
      {" "}
    </div>
  );
};

export default App;
