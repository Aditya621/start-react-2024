import { useState } from "react";
import "./App.css";

const products = [
  { id: 1, title: "Monitor", recommend: false },
  { id: 2, title: "Chair", recommend: false },
  { id: 3, title: "Mouse", recommend: true },
];

function MyButton() {
  function handleEvent() {
    alert("button Clicked");
  }

  return <button onClick={handleEvent}>I'm button</button>;
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((count) => count + 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <>
      <div>
        <button
          style={{
            margin: "10px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
            padding: "10px",
          }}
          onClick={handleCount}
        >
          Count was {count}
        </button>
        <button className="btn" onClick={resetCount}>
          Reset Count
        </button>
      </div>
    </>
  );
}

function App() {
  // const [count, setCount] = useState(0);

  // function resetCount() {
  //   setCount(0);
  // }

  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.recommend ? "green" : "red" }}
      onClick={() => alert(product.title)}
    >
      {product.title}
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
      <MyButton />
      <Counter />
      <Counter />
      {/* <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <button style={{ margin: "10px" }} onClick={resetCount}>
          Reset Count
        </button>
      </div> */}
    </>
  );
}

export default App;
