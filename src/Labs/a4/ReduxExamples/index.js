import React from "react";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";
import TodoForm from "./todos/TodoForm";

const ReduxExamples = () => {
  return (
    <div>
      <h2>Redux Examples</h2>
      <TodoList />
      <AddRedux />
      <CounterRedux />
      <HelloRedux />
      <TodoForm />
    </div>
  );
};

export default ReduxExamples;