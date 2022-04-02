import logo from './logo.svg';
import './App.css';
import Name  from "./component/Name"

function App() {

   const state =[
     {
      value: "Clean up bedroom"
     },
     {
      value: "Buy son=me milk"
     },
     {
     value: "Jogging"
    },
    {
     value: "Leanr React"
    },
    {
     value: "Doing Excercises"
    },
   ]

  
  return (
    <div className="App">
      <div className="App-header">
        <ToDoList todo={state} />

      </div>
     
    
      
    </div>
   
  );
};


export default App;

