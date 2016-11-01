'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-multi-comp */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-plusplus */
var _React = React,
    Component = _React.Component; // eslint-disable-line

var TodoItem = function (_Component) {
  _inherits(TodoItem, _Component);

  function TodoItem(props) {
    _classCallCheck(this, TodoItem);

    var _this = _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).call(this, props));

    _this.removeItem = _this.removeItem.bind(_this);
    _this.checkItem = _this.checkItem.bind(_this);
    return _this;
  }

  _createClass(TodoItem, [{
    key: 'removeItem',
    value: function removeItem() {
      this.props.removeItem(this.props.idx);
    }
  }, {
    key: 'checkItem',
    value: function checkItem() {
      this.props.checkItem(this.props.idx);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        { className: this.props.completed ? 'completed' : '' },
        React.createElement(
          'div',
          { className: 'view' },
          React.createElement('input', {
            className: 'toggle',
            type: 'checkbox',
            checked: this.props.completed,
            onClick: this.checkItem
          }),
          React.createElement(
            'label',
            null,
            this.props.content
          ),
          React.createElement('button', { className: 'destroy', onClick: this.removeItem })
        )
      );
    }
  }]);

  return TodoItem;
}(Component);

var CountDisplay = function (_Component2) {
  _inherits(CountDisplay, _Component2);

  function CountDisplay() {
    _classCallCheck(this, CountDisplay);

    return _possibleConstructorReturn(this, (CountDisplay.__proto__ || Object.getPrototypeOf(CountDisplay)).apply(this, arguments));
  }

  _createClass(CountDisplay, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Still have ',
        this.props.number,
        ' todos not finished yet!!!'
      );
    }
  }]);

  return CountDisplay;
}(Component);

var TodoApp = function (_Component3) {
  _inherits(TodoApp, _Component3);

  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this3 = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    _this3.state = {
      items: [],
      inputText: ''
    };

    _this3.addItem = _this3.addItem.bind(_this3);
    _this3.removeItem = _this3.removeItem.bind(_this3);
    _this3.checkItem = _this3.checkItem.bind(_this3);
    _this3.handleInputKeyPress = _this3.handleInputKeyPress.bind(_this3);
    _this3.renderTodoList = _this3.renderTodoList.bind(_this3);
    return _this3;
  }

  _createClass(TodoApp, [{
    key: 'addItem',
    value: function addItem(text) {
      this.setState({ items: [].concat(_toConsumableArray(this.state.items), [{ content: text, completed: false }]) });
    }
  }, {
    key: 'removeItem',
    value: function removeItem(idx) {
      this.setState({
        items: this.state.items.filter(function (v, i) {
          return i !== idx;
        })
      });
    }
  }, {
    key: 'checkItem',
    value: function checkItem(idx) {
      var newItems = [].concat(_toConsumableArray(this.state.items));
      newItems[idx].completed = !newItems[idx].completed;
      this.setState({
        items: newItems
      });
    }
  }, {
    key: 'handleInputKeyPress',
    value: function handleInputKeyPress(e) {
      if (e.key === 'Enter') {
        if (this.state.inputText.trim() !== '') {
          this.addItem(this.state.inputText);
          this.setState({ inputText: '' });
        }
      } else {
        this.setState({ inputText: e.target.value + e.key });
      }
    }
  }, {
    key: 'renderTodoList',
    value: function renderTodoList() {
      var _this4 = this;

      if (this.state.length === 0) {
        return '';
      }

      return this.state.items.map(function (v, i) {
        return React.createElement(TodoItem, {
          key: i,
          idx: i,
          content: v.content,
          completed: v.completed,
          checkItem: _this4.checkItem,
          removeItem: _this4.removeItem
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var activeTodoCount = this.state.items.reduce(function (accum, todo) {
        return todo.completed ? accum : accum + 1;
      }, 0);
      return React.createElement(
        'div',
        null,
        React.createElement(
          'section',
          { className: 'todoapp' },
          React.createElement(
            'header',
            { className: 'header' },
            React.createElement(
              'h1',
              null,
              'todos'
            ),
            React.createElement('input', {
              className: 'new-todo',
              placeholder: 'What needs to be done?',
              value: this.state.inputText,
              onKeyPress: this.handleInputKeyPress
            })
          )
        ),
        React.createElement(
          'section',
          { className: 'main' },
          React.createElement('input', {
            className: 'toggle-all',
            type: 'checkbox',
            checked: activeTodoCount === 0
          }),
          React.createElement(
            'ul',
            { className: 'todo-list' },
            this.renderTodoList()
          )
        ),
        React.createElement(CountDisplay, { number: activeTodoCount })
      );
    }
  }]);

  return TodoApp;
}(Component);

ReactDOM.render( // eslint-disable-line
React.createElement(TodoApp, null), document.getElementById('todoapp'));

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