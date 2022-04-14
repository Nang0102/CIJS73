export const TodoList = (props) => {

  return (
    <div >
      <ul className={props.className} >
        <li  > {props.id}</li>
      </ul>
      <div> </div>
    </div>
  );
};
