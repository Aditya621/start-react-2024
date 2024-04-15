import { useState } from "react";
import "./App.css";

function MyButton() {
  return <button>I'm button</button>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyButton />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
