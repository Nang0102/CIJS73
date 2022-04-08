export const TodoList = (props) => {
  // destructering
  // const {text}=props
  console.log(props.text);
  return (
    <div >
      <ul>
        <li className="text"> Clean up bedroom </li> <li> Buy some milk </li>
      </ul>{" "}
      <div> </div>{" "}
    </div>
  );
};
