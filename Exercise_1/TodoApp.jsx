import React from "react";
import TodoItem from "./TodoItem";

class TodoApp extends React.Component {
  state = {
    items: ["take a walk", "on the wild side"],
  };

  
  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {items.map((item, index) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
