import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

class ToDoList extends Component{

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inputValue: '',
  //     list: []
  //   };
  // }
  
  state = {
    inputValue: '',
    list: ['1', '2']
  };

  render() {
    return (
      <div className="content-box">
        <h2>天天向上</h2>
        <input type="text" placeholder="请输入" onChange={this.handleInputChange} value={this.state.inputValue}/>
        <button onClick={this.handleAdd}>添加</button>
        <div className="content">
          {this.loadToDuItem()}
        </div>        
      </div>
    )
  }

  loadToDuItem = () => {
    return this.state.list.map((item, index) => {
      return (
        <div>
          <ToDoItem 
                content={item}
                index={index}
                deleteItem={this.handleDelete}/>
        </div>
      );
    })
  };

  handleAdd = (e) => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
  };

  handleInputChange = (e) => {
    console.log(e.target.value);
    const {value} = e.target;
    this.setState(() => ({
      inputValue: value
    }));
    // this.setState({
    //   inputValue: e.target.value
    // });
  };

  handleDelete = (index) => {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({list});
  };

}

export default ToDoList;