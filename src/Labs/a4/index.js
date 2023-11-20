import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import Add from "./Add";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div>
      <h1>Assignment 4</h1>
      <Add a={1} b={2} />
      <PassingFunctions theFunction={sayHello} />
      <ReduxExamples/>
    </div>
  );
}

export default Assignment4;
