import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  //let counter = 5;

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1); //✅
    }
    //counter = counter + 1;

    //setCounter(counter++); //don't use❎
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1); //✅
    }

    //setCounter(counter--);  //❎
  };

  return (
    <>
      <h1>chai aur counter</h1>
      {/* <h2>Counter value : {counter}</h2> */}

      <h2>Counter value: {counter}</h2>

      {counter <= 1 && <p style={{ color: "red" }}>Cannot decrease below 0</p>}

      {counter >= 20 && (
        <p style={{ color: "green" }}>Cannot increase above 20</p>
      )}

      <div className="btnContainer">
        <button className="btn" onClick={addValue}>
          Add value: +
        </button>

        <button className="btn" onClick={removeValue}>
          Remove value: +
        </button>
      </div>
    </>
  );
}

export default App;
