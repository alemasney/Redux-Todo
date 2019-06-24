import React from 'react';
//import './App.css';
import { connect } from 'react-redux';
import { addItem } from '../actions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  changeHandler = event => {
    console.log(event.target.value)
    this.setState({
      input: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.addItem(this.state.input);
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            value={this.state.input}
            placeholder="add a new item"
            onChange={this.changeHandler}>
          </input>
          <button>Add Item</button>
        </form>
        <ul>
        {this.props.todos.map( item => (
          <li key={item.value}>{item.value}</li>
        ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      todos: [
        {
        value: state.value,
        completed: state.completed
        }
    ]
  }
}

export default connect(mapStateToProps, { addItem })(App);
