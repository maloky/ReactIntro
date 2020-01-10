import React from "react";

class TodoItem extends React.Component {
  state = {
    item: this.props.item,
    isDeleteVisible: false,
    editMode: false
  };

  handleMouseOver = () => {
    this.setState({
      isDeleteVisible: true
    });
  };

  handleMouseOut = () => {
    this.setState({
      isDeleteVisible: false
    });
  };

  handleDelete = () => {
    this.props.onDelete(this.props.index);
  };

  handleEdit = () => {
    this.props.onEdit(this.props.index);
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
      <li onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
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
            <button className="delete-btn" onClick={this.handleDelete}>
              delete
            </button>
          </div>
        )}
      </li>
    );
  }
}

export default TodoItem;
