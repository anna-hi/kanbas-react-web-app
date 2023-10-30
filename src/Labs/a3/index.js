import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import ConditionalOutput from "./ConditionalOutput";
import Classes from "./Classes";
import { useSelector } from "react-redux";
import Styles from "./Styles";
function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);
  return (
    <div>
      <h1>Assignment 3</h1>
      <Styles />
      <Classes />
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <ConditionalOutput />
      <PathParameters />
      <JavaScript />
    </div>
  );
}

export default Assignment3;
