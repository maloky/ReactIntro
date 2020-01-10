import React from "react";
import TodoItem from "./TodoItem";

class TodoApp extends React.Component {
  state = {
    items: ["take a walk", "on the wild side"],
    newItem: ""
  };

  handleChange = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  addItem = () => {
    this.setState({
      items: this.state.items.concat(this.state.newItem),
      newItem: ""
    });
  };

  deleteItem = index => {
    const { items } = this.state;
    console.log("callind delete for item", index);
    this.setState({
      items: [...items.slice(0, index), ...items.slice(index + 1)]
    });
  };

  render() {
    const { items, newItem } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        {items.length === 0 && <h4>well done mate</h4>}
        <ul>
          {items.map((item, index) => (
            <TodoItem
              key={`item_${index}`}
              index={index}
              item={item}
              onDelete={this.deleteItem}
            />
          ))}
        </ul>
        <input
          type="text"
          value={newItem}
          placeholder="add new thing to do"
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.addItem}>
          Add task
        </button>
      </div>
    );
  }
}

export default TodoApp;
