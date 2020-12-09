import React, { useState } from "react";

function App() {
  let k = 0;
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setInputText(value);
  }

  function addItem(event) {
    // setItems([...items, inputText]);
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="item"
          onChange={handleChange}
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li key={k++}>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
