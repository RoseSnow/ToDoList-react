import React, { Component } from 'react';

class ToDoItem extends Component{

  render() {
    const {content} = this.props;
    return <h5 onClick={this.handleDelete}>{content}</h5>
  }

  // 删除
  handleDelete = () => {
    // 操作父组件的方法改变父组件的数据
    const {deleteItem, index} = this.props;
    deleteItem(index);
    console.log(index);
  };
}

export default ToDoItem;