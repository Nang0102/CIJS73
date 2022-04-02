import "./App.css";
import { Button } from "../../big-assignment/src/Button";

function App(props) {
  return (
    <div>
      <div className="flex-container" style={{}} onclick>
        <Button customStyle={{ color: "#fff", backgroundColor: "purple" }}>
          ADD NEW EXPENSE{" "}
        </Button>{" "}
      </div>{" "}
      <div className="container">
        <div className="inner"></div>{" "}
      </div>{" "}
    </div>
  );
}
// const App = () => {
// 	const x = 1;
// 	const y = 2;
// 	return (
// 		<div>
// 			<Sum a={x} b={y} />
// 		</div>
// 	)
// }

// const Sum = (props) => {
// 	console.log(props) // {a: 1, b: 2}

// 	return <div>The value is: {props.a + props.b}</div>
// }

export default App;
