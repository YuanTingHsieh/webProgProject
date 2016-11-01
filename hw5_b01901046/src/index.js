/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-multi-comp */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoItem from './todoitem';
import CountDisplay from './countdis';

import './todo.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputText: '',
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
    this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
    this.renderTodoList = this.renderTodoList.bind(this);
  }

  addItem(text) {
    this.setState({ items: [...this.state.items, { content: text, completed: false }] });
  }

  removeItem(idx) {
    this.setState({
      items: this.state.items.filter((v, i) => i !== idx),
    });
  }

  checkItem(idx) {
    const newItems = [...this.state.items];
    newItems[idx].completed = !newItems[idx].completed;
    this.setState({
      items: newItems,
    });
  }

  handleInputKeyPress(e) {
    if (e.key === 'Enter') {
      if (this.state.inputText.trim() !== '') {
        this.addItem(this.state.inputText);
        this.setState({ inputText: '' });
      }
    } else {
      this.setState({ inputText: e.target.value + e.key });
    }
  }

  renderTodoList() {
    if (this.state.length === 0) {
      return '';
    }

    return this.state.items.map(
      (v, i) => <TodoItem
        key={i}
        idx={i}
        content={v.content}
        completed={v.completed}
        checkItem={this.checkItem}
        removeItem={this.removeItem}
       />
    );
  }

  render() {
    const activeTodoCount = this.state.items.reduce((accum, todo) =>
       (todo.completed ? accum : accum + 1)
    , 0);
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              value={this.state.inputText}
              onKeyPress={this.handleInputKeyPress}
            />
          </header>
        </section>
        <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
            checked={activeTodoCount === 0}
          />
          <ul className="todo-list">{this.renderTodoList()}</ul>
        </section>
        <CountDisplay number={activeTodoCount} />
      </div>
    );
  }
}


ReactDOM.render( // eslint-disable-line
  <TodoApp />,
  document.getElementById('todoapp')
);

/*
  <section class="todoapp">
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus>
  </header>
  <section class="main">
    <input class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list"></ul>
  </section>
  <footer class="footer">
    <span class="todo-count"></span>
    <button class="clear-completed">Clear completed</button>
  </footer>
  </section>*/
