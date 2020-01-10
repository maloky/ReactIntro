import React from "react";

class TodoItem extends React.Component {
  state = {
    item: this.props.item,
    editMode: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.setState({
        editMode: false
      });
    }
  };

  enableEditMode = () => {
    this.setState({
      editMode: true
    });
  };

  render() {
    const { editMode, item } = this.state;

    return (
      <li>
        {editMode ? (
          <input
            type="text"
            value={item}
            onKeyDown={this.handleKeyPress}
            onChange={this.handleChange}
          />
        ) : (
          <div>
            <span onClick={this.enableEditMode}>{item}</span>
          </div>
        )}
      </li>
    );
  }
}

export default TodoItem;
