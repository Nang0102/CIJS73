import "./Components/Scrolling.js"
import "./Components/Counting/index"
// import { Counting } from "./Components/Counting/index";
import { Scrolling } from "./Components/Scrolling.js";
import { BackToTop } from "./Components/Back_To_Top/index.js";

function App() {
  return (
    <div>
     {/* <Counting/>   */}
      <Scrolling/> 
      <BackToTop/>

    </div>
  );
}

export default App;
