import "./App.css";
// import { Button } from "./components/Button";
import { ExpenseApp } from "./components/ExpenseApp";

function App(props) {
  return (
    <div>
      <div className="flex-container" style={{}} onclick>
        {/* <Button customStyle={{ color: "#fff", backgroundColor: "purple" }}>
          ADD NEW EXPENSE{" "}
        </Button>{" "} */}
        <ExpenseApp />
      </div>
    </div>
  );
}

export default App;
