import "./App.css";
import { Button } from "./components/Button";
import { ProgressBar } from "./components/ProgressBar";

function App(props) {
  return (
    <div>
      <div className="flex-container" style={{}} onclick>
        <Button customStyle={{ color: "#fff", backgroundColor: "purple" }}>
          ADD NEW EXPENSE{" "}
        </Button>{" "}
      </div>{" "}
       <div >
       <ProgressBar  >
        {/* height={100} fillPercent={70} */}

      </ProgressBar>
        
      </div>{" "} 
     
    
    </div>
  );
}

export default App;
